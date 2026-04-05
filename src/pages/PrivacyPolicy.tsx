import styles from './LegalPage.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.meta}>Last updated: April 5, 2026</p>
      </header>

      <section className={styles.card}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. What We Collect</h2>
          <p className={styles.text}>
            We collect only the information required to run this educational platform, including
            account identifiers, selected learning progress, quiz activity, and optional feedback
            submissions.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. How We Use Data</h2>
          <p className={styles.text}>
            We use collected data to provide learning features, personalize progress tracking,
            improve content quality, and maintain platform security. We do not sell your personal
            data.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Legal Basis and Retention</h2>
          <p className={styles.text}>
            Data processing is based on consent, contractual necessity, and legitimate educational
            interests. We retain data only as long as needed for educational functionality,
            compliance, and audit requirements.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Third-Party Services</h2>
          <p className={styles.text}>
            We use trusted infrastructure providers for hosting, analytics, and database operations.
            These providers process data strictly on our instructions and under appropriate security
            obligations.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Your Rights</h2>
          <ul className={styles.list}>
            <li>Access your personal data and request a copy.</li>
            <li>Correct inaccurate or incomplete records.</li>
            <li>Request deletion where retention is no longer required.</li>
            <li>Object to or restrict specific processing activities.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Contact</h2>
          <p className={styles.text}>
            For privacy requests, contact: feedback@filmtheory.works. We respond to verified
            requests within a reasonable timeframe.
          </p>
        </div>
      </section>
    </div>
  );
}
