import { useEffect, useState, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabase/client';
import { AdminLayout } from '../components/admin';
import Loading from '../components/common/Loading';

type ProtectedAdminRouteProps = {
  children: ReactNode;
};

async function checkAdminAccess(userId: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('admin_users')
    .select('user_id')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error('Failed to check admin role', error);
    return false;
  }

  return Boolean(data);
}

export default function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAdmin = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const user = data.session?.user;

        if (!user) {
          setIsAdmin(false);
          setIsLoading(false);
          return;
        }

        const hasAccess = await checkAdminAccess(user.id);
        setIsAdmin(hasAccess);
      } catch (error) {
        console.error('Admin verification error:', error);
        setIsAdmin(false);
      } finally {
        setIsLoading(false);
      }
    };

    void verifyAdmin();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
