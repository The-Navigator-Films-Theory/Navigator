import styles from './StatsCard.module.scss';

type StatsCardProps = {
  label: string;
  value: number | string;
  icon?: React.ReactNode;
  color?: 'primary' | 'success' | 'warning' | 'error';
  description?: string;
};

export default function StatsCard({
  label,
  value,
  icon,
  color = 'primary',
  description,
}: StatsCardProps) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.content}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
}
