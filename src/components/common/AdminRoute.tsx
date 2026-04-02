import { useEffect, useState, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { supabase } from '../../lib/supabase/client';
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
      const { data, error } = await supabase.auth.getSession();

      if (!active) return;
      if (error || !data.session?.user) {
        setAccessState('unauthenticated');
        return;
      }

      const isAdmin = await hasAdminAccess(data.session.user.id);
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

  return <>{children}</>;
}
