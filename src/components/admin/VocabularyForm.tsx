import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import styles from './VocabularyForm.module.scss';
import type { VocabularyTerm } from '../../lib/queries/vocabulary';
import type { VocabularyFormData } from '../../lib/queries/vocabulary.management';

type VocabularyFormProps = {
  initialData?: VocabularyTerm | null;
  onSubmit: (data: VocabularyFormData) => Promise<void>;
  isLoading?: boolean;
};

export type { VocabularyFormData };

export default function VocabularyForm({
  initialData,
  onSubmit,
  isLoading = false,
}: VocabularyFormProps) {
  const [formData, setFormData] = useState<VocabularyFormData>({
    term: initialData?.term ?? '',
    definition: initialData?.definition ?? '',
    example_usage: initialData?.example_usage ?? '',
    difficulty: initialData?.difficulty ?? 'intermediate',
    pronunciation: initialData?.pronunciation ?? '',
    etymology: initialData?.etymology ?? '',
    tags: initialData?.tags ?? [],
    related_terms: initialData?.related_terms ?? [],
    related_theories: initialData?.related_theories ?? [],
  });

  const [tagInput, setTagInput] = useState('');
  const [relatedTermInput, setRelatedTermInput] = useState('');
  const [relatedTheoryInput, setRelatedTheoryInput] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        term: initialData.term ?? '',
        definition: initialData.definition ?? '',
        example_usage: initialData.example_usage ?? '',
        difficulty: initialData.difficulty ?? 'intermediate',
        pronunciation: initialData.pronunciation ?? '',
        etymology: initialData.etymology ?? '',
        tags: initialData.tags ?? [],
        related_terms: initialData.related_terms ?? [],
        related_theories: initialData.related_theories ?? [],
      });
    }
  }, [initialData]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.term.trim()) {
      newErrors.term = 'Term is required';
    }

    if (!formData.definition.trim()) {
      newErrors.definition = 'Definition is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleAddRelatedTerm = () => {
    if (relatedTermInput.trim() && !formData.related_terms.includes(relatedTermInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        related_terms: [...prev.related_terms, relatedTermInput.trim()],
      }));
      setRelatedTermInput('');
    }
  };

  const handleRemoveRelatedTerm = (term: string) => {
    setFormData((prev) => ({
      ...prev,
      related_terms: prev.related_terms.filter((t) => t !== term),
    }));
  };

  const handleAddRelatedTheory = () => {
    if (
      relatedTheoryInput.trim() &&
      !formData.related_theories.includes(relatedTheoryInput.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        related_theories: [...prev.related_theories, relatedTheoryInput.trim()],
      }));
      setRelatedTheoryInput('');
    }
  };

  const handleRemoveRelatedTheory = (theory: string) => {
    setFormData((prev) => ({
      ...prev,
      related_theories: prev.related_theories.filter((t) => t !== theory),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="term" className={styles.label}>
          Term *
        </label>
        <Input
          id="term"
          type="text"
          placeholder="e.g., Mise-en-scène"
          value={formData.term}
          onChange={(e) => setFormData((prev) => ({ ...prev, term: e.target.value }))}
          disabled={isLoading}
        />
        {errors.term && <span className={styles.error}>{errors.term}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="definition" className={styles.label}>
          Definition *
        </label>
        <textarea
          id="definition"
          placeholder="Enter the definition of the term..."
          className={styles.textarea}
          value={formData.definition}
          onChange={(e) => setFormData((prev) => ({ ...prev, definition: e.target.value }))}
          disabled={isLoading}
          rows={4}
        />
        {errors.definition && <span className={styles.error}>{errors.definition}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="example_usage" className={styles.label}>
          Example Usage
        </label>
        <textarea
          id="example_usage"
          placeholder="Provide an example of how this term is used in film context..."
          className={styles.textarea}
          value={formData.example_usage}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, example_usage: e.target.value }))
          }
          disabled={isLoading}
          rows={3}
        />
      </div>

      <div className={styles.fieldGroup}>
        <div className={styles.field}>
          <label htmlFor="difficulty" className={styles.label}>
            Difficulty
          </label>
          <select
            id="difficulty"
            className={styles.select}
            value={formData.difficulty}
            onChange={(e) => setFormData((prev) => ({ ...prev, difficulty: e.target.value }))}
            disabled={isLoading}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="pronunciation" className={styles.label}>
            Pronunciation
          </label>
          <Input
            id="pronunciation"
            type="text"
            placeholder="e.g., mee-zon-sen"
            value={formData.pronunciation}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, pronunciation: e.target.value }))
            }
            disabled={isLoading}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="etymology" className={styles.label}>
          Etymology
        </label>
        <textarea
          id="etymology"
          placeholder="Explain the origin and history of the term..."
          className={styles.textarea}
          value={formData.etymology}
          onChange={(e) => setFormData((prev) => ({ ...prev, etymology: e.target.value }))}
          disabled={isLoading}
          rows={3}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Tags</label>
        <div className={styles.tagInput}>
          <Input
            type="text"
            placeholder="Add a tag..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddTag();
              }
            }}
            disabled={isLoading}
          />
          <Button
            type="button"
            onClick={handleAddTag}
            disabled={isLoading || !tagInput.trim()}
          >
            Add
          </Button>
        </div>
        {formData.tags.length > 0 && (
          <div className={styles.tagList}>
            {formData.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  disabled={isLoading}
                  className={styles.removeTag}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Related Terms</label>
        <div className={styles.tagInput}>
          <Input
            type="text"
            placeholder="Add a related term..."
            value={relatedTermInput}
            onChange={(e) => setRelatedTermInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddRelatedTerm();
              }
            }}
            disabled={isLoading}
          />
          <Button
            type="button"
            onClick={handleAddRelatedTerm}
            disabled={isLoading || !relatedTermInput.trim()}
          >
            Add
          </Button>
        </div>
        {formData.related_terms.length > 0 && (
          <div className={styles.tagList}>
            {formData.related_terms.map((term) => (
              <span key={term} className={styles.tag}>
                {term}
                <button
                  type="button"
                  onClick={() => handleRemoveRelatedTerm(term)}
                  disabled={isLoading}
                  className={styles.removeTag}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Related Theories</label>
        <div className={styles.tagInput}>
          <Input
            type="text"
            placeholder="Add a related theory..."
            value={relatedTheoryInput}
            onChange={(e) => setRelatedTheoryInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAddRelatedTheory();
              }
            }}
            disabled={isLoading}
          />
          <Button
            type="button"
            onClick={handleAddRelatedTheory}
            disabled={isLoading || !relatedTheoryInput.trim()}
          >
            Add
          </Button>
        </div>
        {formData.related_theories.length > 0 && (
          <div className={styles.tagList}>
            {formData.related_theories.map((theory) => (
              <span key={theory} className={styles.tag}>
                {theory}
                <button
                  type="button"
                  onClick={() => handleRemoveRelatedTheory(theory)}
                  disabled={isLoading}
                  className={styles.removeTag}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Term'}
        </Button>
      </div>
    </form>
  );
}
