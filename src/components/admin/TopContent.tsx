import { TrendingUp } from 'lucide-react';
import type { ContentPopularity } from '../../lib/queries/analytics';
import styles from './TopContent.module.scss';

type TopContentProps = {
  items: ContentPopularity[];
  isLoading?: boolean;
};

export default function TopContent({ items, isLoading = false }: TopContentProps) {
  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingMessage}>Loading trending content...</div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyMessage}>No engagement data yet</div>
      </div>
    );
  }

  // Get max views for percentage calculation
  const maxViews = Math.max(...items.map((item) => item.view_count));

  return (
    <div className={styles.container}>
      {items.map((item) => {
        const percentage = (item.view_count / maxViews) * 100;
        return (
          <div key={`${item.type}-${item.id}`} className={styles.item}>
            <div className={styles.header}>
              <div className={styles.titleSection}>
                <div className={styles.typeIcon}>
                  {item.type === 'theory' ? 'T' : 'V'}
                </div>
                <div className={styles.info}>
                  <p className={styles.title}>{item.title}</p>
                  <p className={styles.type}>{item.type}</p>
                </div>
              </div>
              <div className={styles.viewCount}>
                <TrendingUp size={16} />
                <span>{item.view_count}</span>
              </div>
            </div>
            <div className={styles.barContainer}>
              <div className={styles.bar} style={{ width: `${percentage}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
