import { CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './StatusBadge.module.scss';

type StatusBadgeProps = {
  status: 'published' | 'draft';
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  if (status === 'published') {
    return (
      <span className={`${styles.badge} ${styles.published}`}>
        <CheckCircle2 />
        Published
      </span>
    );
  }

  return (
    <span className={`${styles.badge} ${styles.draft}`}>
      <AlertCircle />
      Draft
    </span>
  );
}
