import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { supabase } from '../lib/supabase/client';
import styles from './AdminLogin.module.scss';

type Step = 'request' | 'verify';

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
  const location = useLocation();

  const [step, setStep] = useState<Step>('request');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      const user = data.session?.user;

      if (!user) return;

      const isAdmin = await hasAdminAccess(user.id);
      if (isAdmin) {
        navigate('/admin', { replace: true });
        return;
      }

      await supabase.auth.signOut();
      setError('This authenticated account is not mapped in admin_users.');
    };

    void checkSession();
  }, [navigate]);

  const handleRequestOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    const { error: signInError } = await supabase.auth.signInWithOtp({
      phone: phone.trim(),
      options: {
        shouldCreateUser: false,
      },
    });

    setLoading(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    setStep('verify');
    setSuccessMessage('Verification code sent. Enter the 6-digit code from SMS.');
  };

  const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    const { data, error: verifyError } = await supabase.auth.verifyOtp({
      phone: phone.trim(),
      token: code.trim(),
      type: 'sms',
    });

    if (verifyError || !data.user) {
      setLoading(false);
      setError(verifyError?.message ?? 'OTP verification failed.');
      return;
    }

    const isAdmin = await hasAdminAccess(data.user.id);

    if (!isAdmin) {
      await supabase.auth.signOut();
      setLoading(false);
      setStep('request');
      setCode('');
      setError('Signed in, but this account is not in admin_users.');
      return;
    }

    const from = (location.state as { from?: string } | null)?.from ?? '/admin';
    navigate(from, { replace: true });
  };

  const resetFlow = () => {
    setStep('request');
    setCode('');
    setError('');
    setSuccessMessage('');
  };

  if (step === 'verify' && !phone.trim()) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Admin Login</h1>
        <p className={styles.subtitle}>Sign in with phone OTP. Admin access is enforced by admin_users.</p>

        {step === 'request' && (
          <form className={styles.form} onSubmit={handleRequestOtp}>
            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="+15551234567"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>

            <p className={styles.helperText}>Use E.164 format, for example +15551234567.</p>

            {successMessage && <p className={styles.successText}>{successMessage}</p>}
            {error && <p className={styles.errorText}>{error}</p>}

            <Button type="submit" loading={loading} size="lg" className={styles.loginButton}>
              {loading ? 'Sending Code...' : 'Send OTP'}
            </Button>
          </form>
        )}

        {step === 'verify' && (
          <form className={styles.form} onSubmit={handleVerifyOtp}>
            <div className={styles.inputGroup}>
              <label htmlFor="otp">OTP Code</label>
              <input
                type="text"
                id="otp"
                inputMode="numeric"
                pattern="[0-9]{6}"
                placeholder="123456"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                required
              />
            </div>

            <p className={styles.helperText}>Code sent to {phone.trim()}.</p>

            {successMessage && <p className={styles.successText}>{successMessage}</p>}
            {error && <p className={styles.errorText}>{error}</p>}

            <Button type="submit" loading={loading} size="lg" className={styles.loginButton}>
              {loading ? 'Verifying...' : 'Verify OTP'}
            </Button>

            <button type="button" className={styles.linkButton} onClick={resetFlow}>
              Use a different phone number
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
