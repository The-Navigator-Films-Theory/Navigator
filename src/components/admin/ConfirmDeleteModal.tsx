import { AlertTriangle } from 'lucide-react';
import styles from './ConfirmDeleteModal.module.scss';

type ConfirmDeleteModalProps = {
  title: string;
  description: string;
  itemName?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmDeleteModal({
  title,
  description,
  isLoading = false,
  onConfirm,
  onCancel,
}: ConfirmDeleteModalProps) {
  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <AlertTriangle size={24} style={{ color: '#ef4444' }} />
            <h2 className={styles.title}>{title}</h2>
          </div>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.footer}>
          <button type="button" className={styles.button} onClick={onCancel} disabled={isLoading}>
            Cancel
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.delete}`}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
