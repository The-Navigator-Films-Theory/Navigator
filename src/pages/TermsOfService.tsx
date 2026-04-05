import styles from './LegalPage.module.scss';

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.meta}>Last updated: April 5, 2026</p>
      </header>

      <section className={styles.card}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.text}>
            By using this platform, you agree to these terms. If you do not agree, you must
            discontinue use.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Educational Use</h2>
          <p className={styles.text}>
            This service is intended for educational and scholarly exploration of film and media
            theory. You agree not to use the platform for unlawful, abusive, or misleading
            activities.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Accounts and Responsibility</h2>
          <p className={styles.text}>
            You are responsible for all activity under your account and for safeguarding your login
            credentials. Notify us promptly if you suspect unauthorized access.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Content and Intellectual Property</h2>
          <p className={styles.text}>
            Platform text, design, and curation are protected intellectual property. Educational
            excerpts and citations remain the property of their respective rights holders.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Service Availability</h2>
          <p className={styles.text}>
            We strive for reliable access but cannot guarantee uninterrupted operation. Features may
            be modified, suspended, or removed as the platform evolves.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
          <p className={styles.text}>
            To the fullest extent permitted by law, the platform is provided on an "as available"
            basis without warranties of any kind, and liability is limited for indirect or
            consequential damages.
          </p>
        </div>
      </section>
    </div>
  );
}
