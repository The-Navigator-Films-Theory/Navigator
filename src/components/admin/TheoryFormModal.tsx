import TheoryForm, { type TheoryFormData } from './TheoryForm';

type TheoryFormModalProps = {
  isOpen: boolean;
  title: string;
  initialData?: Partial<TheoryFormData>;
  isLoading?: boolean;
  onSubmit: (data: TheoryFormData) => void;
  onClose: () => void;
};

export default function TheoryFormModal({
  isOpen,
  title,
  initialData,
  isLoading = false,
  onSubmit,
  onClose,
}: TheoryFormModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--color-surface-elevated)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--border-radius-lg)',
          maxWidth: '600px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          padding: '2rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ margin: '0 0 1.5rem', fontSize: 'var(--font-size-xl)', fontWeight: 700 }}>
          {title}
        </h2>
        <TheoryForm initialData={initialData} isLoading={isLoading} onSubmit={onSubmit} onCancel={onClose} />
      </div>
    </div>
  );
}
