import { useMemo } from 'react';
import { Eye, CheckCircle2, BookOpen } from 'lucide-react';
import type { UserEngagementEvent } from '../../lib/queries/analytics';
import styles from './ActivityTimeline.module.scss';

type ActivityTimelineProps = {
  events: UserEngagementEvent[];
  isLoading?: boolean;
};

function getEventIcon(eventType: string) {
  switch (eventType) {
    case 'viewed_theory':
      return <BookOpen size={18} />;
    case 'viewed_vocabulary':
      return <Eye size={18} />;
    case 'completed_quiz':
    case 'quiz_attempt':
      return <CheckCircle2 size={18} />;
    default:
      return <Eye size={18} />;
  }
}

function getEventLabel(eventType: string) {
  const labels: Record<string, string> = {
    viewed_theory: 'Viewed Theory',
    viewed_vocabulary: 'Viewed Vocabulary',
    completed_quiz: 'Completed Quiz',
    quiz_attempt: 'Quiz Attempt',
  };
  return labels[eventType] || eventType;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;

  return date.toLocaleDateString();
}

export default function ActivityTimeline({ events, isLoading = false }: ActivityTimelineProps) {
  const sortedEvents = useMemo(() => {
    return [...events].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [events]);

  if (isLoading) {
    return (
      <div className={styles.timeline}>
        <div className={styles.loadingMessage}>Loading activity...</div>
      </div>
    );
  }

  if (sortedEvents.length === 0) {
    return (
      <div className={styles.timeline}>
        <div className={styles.emptyMessage}>No activity yet</div>
      </div>
    );
  }

  return (
    <div className={styles.timeline}>
      {sortedEvents.map((event, index) => (
        <div key={event.id} className={styles.entry}>
          <div className={styles.marker}>
            <div className={styles.icon}>{getEventIcon(event.event_type)}</div>
            {index < sortedEvents.length - 1 && <div className={styles.line} />}
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <p className={styles.action}>{getEventLabel(event.event_type)}</p>
              <span className={styles.timestamp}>{formatDate(event.created_at)}</span>
            </div>
            {event.related_type && (
              <p className={styles.detail}>
                Type: <code>{event.related_type}</code>
              </p>
            )}
            {event.metadata && Object.keys(event.metadata).length > 0 && (
              <p className={styles.detail}>
                Details: <code>{JSON.stringify(event.metadata)}</code>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
