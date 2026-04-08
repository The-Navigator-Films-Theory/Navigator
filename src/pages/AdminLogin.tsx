// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { setAdminRequestHeader, supabase } from '../lib/supabase/client';
import styles from './AdminLogin.module.scss';

async function hasAdminAccess(userId: string): Promise<boolean> {
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

export default function AdminLogin() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const normalizedUserId = userId.trim();

    if (!normalizedUserId) {
      setError('UUID is required');
      setLoading(false);
      return;
    }

    // Add UUID header so RLS policies can validate admin access.
    setAdminRequestHeader(normalizedUserId);

    const isAdmin = await hasAdminAccess(normalizedUserId);

    if (!isAdmin) {
      setAdminRequestHeader(null);
      setLoading(false);
      setError('This UUID is not registered as an admin.');
      return;
    }

    // Store admin session
    sessionStorage.setItem('admin_user_id', normalizedUserId);
    navigate('/admin', { replace: true });
  };

  return (
    <div className={styles.page}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Admin Login</h1>
        <p className={styles.subtitle}>Enter your UUID to access the admin dashboard.</p>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="userId">User UUID</label>
            <input
              type="text"
              id="userId"
              placeholder="e.g., f5dd6cdc-7746-405e-9ad4-7021294586d"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
              required
            />
          </div>

          <p className={styles.helperText}>
            Get your UUID from the admin_users table in Supabase.
          </p>

          {error && <p className={styles.errorText}>{error}</p>}

          <Button type="submit" loading={loading} size="lg" className={styles.loginButton}>
            {loading ? 'Verifying...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  );
}
