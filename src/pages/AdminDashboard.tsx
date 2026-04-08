// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, HelpCircle, TrendingUp, Plus } from 'lucide-react';
import { supabase } from '../lib/supabase/client';
import styles from './AdminDashboard.module.scss';

type DashboardStats = {
  publishedTheories: number;
  draftTheories: number;
  publishedVocabulary: number;
  draftVocabulary: number;
  publishedQuizzes: number;
  draftQuizzes: number;
  uniqueUsers: number;
  totalEvents: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        // Fetch all stats in parallel
        const [theoriesRes, vocabRes, quizzesRes, draftTheoriesRes, draftVocabRes, draftQuizzesRes] = await Promise.all([
          supabase
            .from('theories')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'published'),
          supabase
            .from('vocabulary_terms')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'published'),
          supabase
            .from('quizzes')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'published'),
          supabase
            .from('theories')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'draft'),
          supabase
            .from('vocabulary_terms')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'draft'),
          supabase
            .from('quizzes')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'draft'),
        ]);

        setStats({
          publishedTheories: theoriesRes.count ?? 0,
          draftTheories: draftTheoriesRes.count ?? 0,
          publishedVocabulary: vocabRes.count ?? 0,
          draftVocabulary: draftVocabRes.count ?? 0,
          publishedQuizzes: quizzesRes.count ?? 0,
          draftQuizzes: draftQuizzesRes.count ?? 0,
          uniqueUsers: 0,
          totalEvents: 0,
        });
      } catch (error) {
        console.error('Failed to load stats:', error);
      } finally {
        setLoading(false);
      }
    };

    void loadStats();
  }, []);

  const StatCard = ({
    icon: Icon,
    label,
    value,
    variant = 'blue',
  }: {
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    value: number;
    variant?: 'blue' | 'red' | 'green' | 'purple';
  }) => (
    <div className={`${styles.statCard} ${variant !== 'blue' ? styles[variant] : ''}`}>
      <div className={styles.statHeader}>
        <div className={styles.statIcon}>
          <Icon size={20} />
        </div>
        <p className={styles.statLabel}>{label}</p>
      </div>
      <p className={styles.statValue}>{value}</p>
    </div>
  );

  if (loading) {
    return (
      <section className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Loading your dashboard...</p>
        </div>
      </section>
    );
  }

  if (!stats) {
    return (
      <section className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Failed to load dashboard statistics.</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>Monitor and manage your learning platform content.</p>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <StatCard
          icon={BookOpen}
          label="Published Theories"
          value={stats.publishedTheories}
          variant="blue"
        />
        <StatCard
          icon={BookOpen}
          label="Draft Theories"
          value={stats.draftTheories}
          variant="red"
        />
        <StatCard
          icon={FileText}
          label="Published Vocabulary"
          value={stats.publishedVocabulary}
          variant="green"
        />
        <StatCard
          icon={FileText}
          label="Draft Vocabulary"
          value={stats.draftVocabulary}
          variant="red"
        />
        <StatCard
          icon={HelpCircle}
          label="Published Quizzes"
          value={stats.publishedQuizzes}
          variant="purple"
        />
        <StatCard
          icon={HelpCircle}
          label="Draft Quizzes"
          value={stats.draftQuizzes}
          variant="red"
        />
      </div>

      {/* Quick Actions */}
      <div className={styles.quickActions}>
        <h2 className={styles.sectionTitle}>Quick Actions</h2>
        <div className={styles.actionsGrid}>
          <Link to="/admin/theories?action=create" className={styles.actionCard}>
            <Plus size={24} className={styles.actionIcon} />
            <p className={styles.actionTitle}>Create Theory</p>
            <p className={styles.actionDesc}>Add a new film theory concept</p>
          </Link>
          <Link to="/admin/vocabulary?action=create" className={styles.actionCard}>
            <Plus size={24} className={styles.actionIcon} />
            <p className={styles.actionTitle}>Add Vocabulary Term</p>
            <p className={styles.actionDesc}>Expand the vocabulary library</p>
          </Link>
          <Link to="/admin/quizzes?action=create" className={styles.actionCard}>
            <Plus size={24} className={styles.actionIcon} />
            <p className={styles.actionTitle}>Create Quiz</p>
            <p className={styles.actionDesc}>Build a new assessment</p>
          </Link>
          <Link to="/admin/analytics" className={styles.actionCard}>
            <TrendingUp size={24} className={styles.actionIcon} />
            <p className={styles.actionTitle}>View Analytics</p>
            <p className={styles.actionDesc}>Track user engagement metrics</p>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={styles.recentActivity}>
        <h2 className={styles.sectionTitle}>Recent Activity</h2>
        {stats.totalEvents === 0 ? (
          <div className={styles.emptyState}>
            <p>No user activity recorded yet.</p>
          </div>
        ) : (
          <ul className={styles.activityList}>
            <li className={styles.activityItem}>
              <span className={styles.activityTime}>Today</span>
              <p className={styles.activityContent}>
                {stats.totalEvents} user engagement events recorded
              </p>
            </li>
          </ul>
        )}
      </div>
    </section>
  );
}
