import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    props.className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button {...props} className={buttonClasses} disabled={loading || props.disabled}>
      {loading && <Loader2 className={styles.spinner} size={20} />}
      <span className={loading ? styles.loadingText : ''}>{children}</span>
    </button>
  );
}
