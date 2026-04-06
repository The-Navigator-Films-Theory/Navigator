import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import VocabularyForm from './VocabularyForm';
import type { VocabularyTerm } from '../../lib/queries/vocabulary';
import type { VocabularyFormData } from '../../lib/queries/vocabulary.management';
import styles from './VocabularyFormModal.module.scss';

type VocabularyFormModalProps = {
  isOpen: boolean;
  initialData?: VocabularyTerm | null;
  onSubmit: (data: VocabularyFormData) => Promise<void>;
  onClose: () => void;
};

export default function VocabularyFormModal({
  isOpen,
  initialData,
  onSubmit,
  onClose,
}: VocabularyFormModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = async (data: VocabularyFormData) => {
    try {
      setIsLoading(true);
      await onSubmit(data);
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {initialData ? 'Edit Term' : 'Create New Term'}
          </h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          <VocabularyForm
            initialData={initialData}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
