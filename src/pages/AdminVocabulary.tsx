// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { Check, Edit2, Plus, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import ConfirmDeleteModal from '../components/admin/ConfirmDeleteModal';
import DataTable, { type Column } from '../components/admin/DataTable';
import StatusBadge from '../components/admin/StatusBadge';
import type { VocabularyFormData } from '../components/admin/VocabularyForm';
import VocabularyFormModal from '../components/admin/VocabularyFormModal';
import type { VocabularyTerm } from '../lib/queries/vocabulary';
import { useVocabularyManagement, useVocabularyTerms } from '../lib/queries/vocabulary.management';
import styles from './AdminVocabulary.module.scss';

export default function AdminVocabulary() {
  const { data: vocabularyTerms = [], isLoading } = useVocabularyTerms();
  const { create, update, delete: deleteTerm, publish, unpublish, toastMessage } = useVocabularyManagement();

  const [formOpen, setFormOpen] = useState(false);
  const [editingTerm, setEditingTerm] = useState<VocabularyTerm | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [termToDelete, setTermToDelete] = useState<VocabularyTerm | null>(null);

  const handleCreate = () => {
    setEditingTerm(null);
    setFormOpen(true);
  };

  const handleEdit = (term: VocabularyTerm) => {
    setEditingTerm(term);
    setFormOpen(true);
  };

  const handleFormSubmit = async (data: VocabularyFormData) => {
    if (editingTerm) {
      await update.mutateAsync({ id: editingTerm.id, ...data });
    } else {
      await create.mutateAsync(data);
    }
    setFormOpen(false);
    setEditingTerm(null);
  };

  const handleDeleteClick = (term: VocabularyTerm) => {
    setTermToDelete(term);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (termToDelete) {
      await deleteTerm.mutateAsync(termToDelete.id);
      setDeleteConfirmOpen(false);
      setTermToDelete(null);
    }
  };

  const columns: Column<VocabularyTerm>[] = [
    {
      key: 'term',
      label: 'Term',
      className: styles.cellPrimary,
    },
    {
      key: 'definition',
      label: 'Definition',
      render: (definition) => {
        const text = String(definition || '');
        return text.length > 50 ? `${text.substring(0, 50)}...` : text;
      },
    },
    {
      key: 'difficulty',
      label: 'Difficulty',
    },
    {
      key: 'status',
      label: 'Status',
      render: (status) => <StatusBadge status={status as 'published' | 'draft'} />,
    },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Manage Vocabulary</h1>
          <p className={styles.subtitle}>Create, edit, and publish film vocabulary terms.</p>
        </div>
        <button
          onClick={handleCreate}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--border-radius-md)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 200ms ease',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = 'var(--color-primary-hover)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = 'var(--color-primary)';
          }}
        >
          <Plus size={18} />
          Create Term
        </button>
      </div>

      {toastMessage && (
        <div
          style={{
            padding: '1rem',
            marginBottom: '1.5rem',
            borderRadius: 'var(--border-radius-md)',
            background: toastMessage.type === 'success' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            color: toastMessage.type === 'success' ? '#22c55e' : '#ef4444',
            border: `1px solid ${toastMessage.type === 'success' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
          }}
        >
          {toastMessage.text}
        </div>
      )}

      <DataTable
        columns={columns}
        data={vocabularyTerms}
        isLoading={isLoading}
        emptyMessage="No vocabulary terms yet. Create your first one!"
        rowActions={(term) => (
          <>
            <button
              onClick={() => handleEdit(term as VocabularyTerm)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.75rem',
                border: '1px solid var(--color-border)',
                background: 'rgba(79, 124, 255, 0.05)',
                color: 'var(--color-primary)',
                borderRadius: 'var(--border-radius-md)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              title="Edit"
            >
              <Edit2 size={16} />
            </button>
            {term.status === 'draft' ? (
              <button
                onClick={() => publish.mutate(term.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                  background: 'rgba(34, 197, 94, 0.05)',
                  color: '#22c55e',
                  borderRadius: 'var(--border-radius-md)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                }}
                title="Publish"
              >
                <Check size={16} />
              </button>
            ) : (
              <button
                onClick={() => unpublish.mutate(term.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  background: 'rgba(239, 68, 68, 0.05)',
                  color: '#ef4444',
                  borderRadius: 'var(--border-radius-md)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                }}
                title="Unpublish"
              >
                <X size={16} />
              </button>
            )}
            <button
              onClick={() => handleDeleteClick(term as VocabularyTerm)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.75rem',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                background: 'rgba(239, 68, 68, 0.05)',
                color: '#ef4444',
                borderRadius: 'var(--border-radius-md)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
              title="Delete"
            >
              <Trash2 size={16} />
            </button>
          </>
        )}
      />

      <VocabularyFormModal
        isOpen={formOpen}
        initialData={editingTerm}
        onSubmit={handleFormSubmit}
        onClose={() => {
          setFormOpen(false);
          setEditingTerm(null);
        }}
      />

      {deleteConfirmOpen && termToDelete && (
        <ConfirmDeleteModal
          title="Delete Term"
          description={`Are you sure you want to delete "${termToDelete.term}"? This action cannot be undone.`}
          isLoading={deleteTerm.isPending}
          onConfirm={handleConfirmDelete}
          onCancel={() => {
            setDeleteConfirmOpen(false);
            setTermToDelete(null);
          }}
        />
      )}
    </section>
  );
}
