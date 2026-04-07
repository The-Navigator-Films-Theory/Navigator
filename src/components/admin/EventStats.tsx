import styles from './EventStats.module.scss';

type EventStatItem = {
  type: string;
  count: number;
};

type EventStatsProps = {
  stats: EventStatItem[];
  isLoading?: boolean;
};

function getEventLabel(eventType: string) {
  const labels: Record<string, string> = {
    viewed_theory: 'Viewed Theory',
    viewed_vocabulary: 'Viewed Vocabulary',
    completed_quiz: 'Completed Quiz',
    quiz_attempt: 'Quiz Attempt',
  };
  return labels[eventType] || eventType;
}

function getEventColor(eventType: string) {
  const colors: Record<string, string> = {
    viewed_theory: '#4f7cff',
    viewed_vocabulary: '#22c55e',
    completed_quiz: '#f59e0b',
    quiz_attempt: '#8b65ee',
  };
  return colors[eventType] || '#8b949e';
}

export default function EventStats({ stats, isLoading = false }: EventStatsProps) {
  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingMessage}>Loading statistics...</div>
      </div>
    );
  }

  if (stats.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyMessage}>No event data yet</div>
      </div>
    );
  }

  const total = stats.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className={styles.container}>
      <div className={styles.legend}>
        {stats.map((item) => (
          <div key={item.type} className={styles.legendItem}>
            <div
              className={styles.dot}
              style={{ backgroundColor: getEventColor(item.type) }}
            />
            <span className={styles.label}>{getEventLabel(item.type)}</span>
            <span className={styles.percentage}>
              {Math.round((item.count / total) * 100)}%
            </span>
            <span className={styles.count}>({item.count})</span>
          </div>
        ))}
      </div>

      <div className={styles.bars}>
        {stats.map((item) => (
          <div key={item.type} className={styles.barRow}>
            <div className={styles.barLabel}>{getEventLabel(item.type)}</div>
            <div className={styles.barContainer}>
              <div
                className={styles.bar}
                style={{
                  width: `${(item.count / total) * 100}%`,
                  backgroundColor: getEventColor(item.type),
                }}
              />
            </div>
            <div className={styles.barValue}>{item.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
