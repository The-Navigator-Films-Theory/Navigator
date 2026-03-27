import { Slot } from '@radix-ui/react-slot';
import { Loader2 } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
};

export default function Button({
  asChild = false,
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild && !loading ? Slot : 'button';

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    props.className,
  ]
    .filter(Boolean)
    .join(' ');

  if (Comp === 'button') {
    return (
      <button {...props} className={buttonClasses} disabled={loading || props.disabled}>
        {loading && <Loader2 className={styles.spinner} size={20} />}
        <span className={loading ? styles.loadingText : ''}>{children}</span>
      </button>
    );
  }

  // If asChild is true, we render the Slot and expect the children to handle everything.
  // The loading state will be ignored here, as the child is in control.
  return (
    <Slot {...props} className={buttonClasses}>
      {children}
    </Slot>
  );
}
