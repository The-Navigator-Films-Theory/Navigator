// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { useState } from 'react';
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react';
import DataTable, { type Column } from '../components/admin/DataTable';
import StatusBadge from '../components/admin/StatusBadge';
import TheoryFormModal from '../components/admin/TheoryFormModal';
import ConfirmDeleteModal from '../components/admin/ConfirmDeleteModal';
import { useTheories, useTheoryManagement } from '../lib/queries/theories.management';
import type { Theory } from '../types/theory';
import type { TheoryFormData } from '../components/admin/TheoryForm';
import styles from './AdminTheories.module.scss';

export default function AdminTheories() {
  const { data: theories = [], isLoading } = useTheories();
  const { create, update, delete: deleteTheory, publish, unpublish, toastMessage } = useTheoryManagement();

  const [formOpen, setFormOpen] = useState(false);
  const [editingTheory, setEditingTheory] = useState<Theory | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [theoryToDelete, setTheoryToDelete] = useState<Theory | null>(null);

  const handleCreate = () => {
    setEditingTheory(null);
    setFormOpen(true);
  };

  const handleEdit = (theory: Theory) => {
    setEditingTheory(theory);
    setFormOpen(true);
  };

  const handleFormSubmit = async (data: TheoryFormData) => {
    if (editingTheory) {
      await update.mutateAsync({ id: editingTheory.id, ...data });
    } else {
      await create.mutateAsync(data);
    }
    setFormOpen(false);
    setEditingTheory(null);
  };

  const handleDeleteClick = (theory: Theory) => {
    setTheoryToDelete(theory);
    setDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (theoryToDelete) {
      await deleteTheory.mutateAsync(theoryToDelete.id);
      setDeleteConfirmOpen(false);
      setTheoryToDelete(null);
    }
  };

  const columns: Column<Theory>[] = [
    {
      key: 'title',
      label: 'Title',
      className: styles.cellPrimary,
    },
    {
      key: 'slug',
      label: 'Slug',
    },
    {
      key: 'category',
      label: 'Category',
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
          <h1 className={styles.title}>Manage Theories</h1>
          <p className={styles.subtitle}>Create, edit, and publish film theory concepts.</p>
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
          Create Theory
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
        data={theories}
        isLoading={isLoading}
        emptyMessage="No theories yet. Create your first one!"
        rowActions={(theory) => (
          <>
            <button
              onClick={() => handleEdit(theory as Theory)}
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
            {theory.status === 'draft' ? (
              <button
                onClick={() => publish.mutate(theory.id)}
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
                onClick={() => unpublish.mutate(theory.id)}
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
              onClick={() => handleDeleteClick(theory as Theory)}
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

      <TheoryFormModal
        isOpen={formOpen}
        title={editingTheory ? 'Edit Theory' : 'Create New Theory'}
        initialData={
          editingTheory
            ? {
                title: editingTheory.title || '',
                slug: editingTheory.slug || '',
                category: editingTheory.category || '',
                overview: editingTheory.overview || '',
                description: editingTheory.description || '',
                history: editingTheory.history || '',
              }
            : undefined
        }
        isLoading={create.isPending || update.isPending}
        onSubmit={handleFormSubmit}
        onClose={() => {
          setFormOpen(false);
          setEditingTheory(null);
        }}
      />

      {deleteConfirmOpen && theoryToDelete && (
        <ConfirmDeleteModal
          title="Delete Theory"
          description={`Are you sure you want to delete "${theoryToDelete.title}"? This action cannot be undone.`}
          isLoading={deleteTheory.isPending}
          onConfirm={handleConfirmDelete}
          onCancel={() => {
            setDeleteConfirmOpen(false);
            setTheoryToDelete(null);
          }}
        />
      )}
    </section>
  );
}
