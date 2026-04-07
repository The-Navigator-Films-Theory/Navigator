import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import styles from './TheoryForm.module.scss';

export type TheoryFormData = {
  title: string;
  slug: string;
  category: string;
  overview: string;
  description: string;
  history: string;
};

type TheoryFormProps = {
  initialData?: Partial<TheoryFormData>;
  isLoading?: boolean;
  onSubmit: (data: TheoryFormData) => void;
  onCancel: () => void;
};

export default function TheoryForm({
  initialData = {},
  isLoading = false,
  onSubmit,
  onCancel,
}: TheoryFormProps) {
  const [formData, setFormData] = useState<TheoryFormData>({
    title: initialData.title || '',
    slug: initialData.slug || '',
    category: initialData.category || '',
    overview: initialData.overview || '',
    description: initialData.description || '',
    history: initialData.history || '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof TheoryFormData, string>>>({});

  // Auto-generate slug from title
  useEffect(() => {
    if (initialData.title === undefined) {
      const generatedSlug = formData.title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title, initialData.title]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof TheoryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.slug.trim()) newErrors.slug = 'Slug is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="title">
          Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className={styles.input}
          placeholder="e.g., Auteur Theory"
          value={formData.title}
          onChange={handleChange}
          disabled={isLoading}
        />
        {errors.title && <p className={styles.error}>{errors.title}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="slug">
          Slug *
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          className={styles.input}
          placeholder="e.g., auteur-theory"
          value={formData.slug}
          onChange={handleChange}
          disabled={isLoading}
        />
        <p className={styles.helperText}>URL-friendly identifier (auto-generated from title)</p>
        {errors.slug && <p className={styles.error}>{errors.slug}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="category">
          Category
        </label>
        <input
          type="text"
          id="category"
          name="category"
          className={styles.input}
          placeholder="e.g., Directorial Studies"
          value={formData.category}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="overview">
          Overview
        </label>
        <textarea
          id="overview"
          name="overview"
          className={styles.textarea}
          placeholder="Brief summary of the theory..."
          value={formData.overview}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="description">
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          className={styles.textarea}
          placeholder="Detailed explanation of the theory..."
          value={formData.description}
          onChange={handleChange}
          disabled={isLoading}
        />
        {errors.description && <p className={styles.error}>{errors.description}</p>}
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="history">
          Historical Context
        </label>
        <textarea
          id="history"
          name="history"
          className={styles.textarea}
          placeholder="Historical background and development..."
          value={formData.history}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>

      <div className={styles.footer}>
        <button type="button" className={`${styles.button} ${styles.secondary}`} onClick={onCancel} disabled={isLoading}>
          Cancel
        </button>
        <Button type="submit" loading={isLoading} className={styles.primary}>
          {initialData.title ? 'Update' : 'Create'}
        </Button>
      </div>
    </form>
  );
}
