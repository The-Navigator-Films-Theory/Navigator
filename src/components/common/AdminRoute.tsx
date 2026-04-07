import { useEffect, useState, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase/client';
import { AdminLayout } from '../admin';
import ErrorState from './ErrorState';
import Loading from './Loading';

type AccessState = 'loading' | 'unauthenticated' | 'unauthorized' | 'authorized';

type AdminRouteProps = {
  children: ReactNode;
};

async function hasAdminAccess(userId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('admin_users')
    .select('user_id')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error('Failed to check admin access', error);
    return false;
  }

  return Boolean(data);
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const location = useLocation();
  const [accessState, setAccessState] = useState<AccessState>('loading');

  useEffect(() => {
    let active = true;

    const verify = async () => {
      // Check for admin session in sessionStorage
      const adminUserId = sessionStorage.getItem('admin_user_id');

      if (!active) return;
      if (!adminUserId) {
        setAccessState('unauthenticated');
        return;
      }

      // Verify the admin user still exists in admin_users table
      const isAdmin = await hasAdminAccess(adminUserId);
      if (!active) return;

      setAccessState(isAdmin ? 'authorized' : 'unauthorized');
    };

    void verify();

    return () => {
      active = false;
    };
  }, []);

  if (accessState === 'loading') {
    return <Loading label="Checking admin access..." />;
  }

  if (accessState === 'unauthenticated') {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  if (accessState === 'unauthorized') {
    return <ErrorState message="Your account is signed in but is not allowed to access admin." />;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
