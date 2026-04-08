// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { Users, BarChart3, Eye, CheckCircle2 } from 'lucide-react';
import StatsCard from '../components/admin/StatsCard';
import ActivityTimeline from '../components/admin/ActivityTimeline';
import TopContent from '../components/admin/TopContent';
import EventStats from '../components/admin/EventStats';
import {
  useAnalyticsSummary,
  useUserEngagementEvents,
  useMostViewedContent,
  useEventStats,
} from '../lib/queries/analytics';
import styles from './AdminAnalytics.module.scss';

export default function AdminAnalytics() {
  const { data: summary } = useAnalyticsSummary();
  const { data: events = [], isLoading: eventsLoading } = useUserEngagementEvents(30);
  const { data: topContent = [], isLoading: contentLoading } = useMostViewedContent();
  const { data: eventStats = [], isLoading: statsLoading } = useEventStats();

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Analytics</h1>
        <p className={styles.subtitle}>View user engagement and content performance metrics.</p>
      </div>

      {/* Summary Stats */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Content Summary</h2>
        <div className={styles.statsGrid}>
          <StatsCard
            label="Published Theories"
            value={summary?.published_theories ?? '-'}
            icon={<BarChart3 size={20} />}
            color="primary"
          />
          <StatsCard
            label="Draft Theories"
            value={summary?.draft_theories ?? '-'}
            color="warning"
          />
          <StatsCard
            label="Published Vocabulary"
            value={summary?.published_vocabulary ?? '-'}
            icon={<Eye size={20} />}
            color="success"
          />
          <StatsCard
            label="Draft Vocabulary"
            value={summary?.draft_vocabulary ?? '-'}
            color="warning"
          />
        </div>
      </div>

      {/* Engagement Stats */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Engagement Overview</h2>
        <div className={styles.statsGrid}>
          <StatsCard
            label="Unique Users"
            value={summary?.unique_users ?? '-'}
            icon={<Users size={20} />}
            color="primary"
          />
          <StatsCard
            label="Total Events"
            value={summary?.total_engagement_events ?? '-'}
            icon={<CheckCircle2 size={20} />}
            color="success"
          />
        </div>
      </div>

      {/* Event Statistics */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Event Breakdown</h2>
        <div className={styles.card}>
          <EventStats stats={eventStats} isLoading={statsLoading} />
        </div>
      </div>

      {/* Most Viewed Content */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Top Content</h2>
        <div className={styles.card}>
          <TopContent items={topContent} isLoading={contentLoading} />
        </div>
      </div>

      {/* Activity Timeline */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        <div className={styles.card}>
          <ActivityTimeline events={events} isLoading={eventsLoading} />
        </div>
      </div>
    </section>
  );
}
