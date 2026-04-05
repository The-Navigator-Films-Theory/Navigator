import styles from './LegalPage.module.scss';

export default function AcademicLicense() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>Academic License</h1>
        <p className={styles.meta}>Last updated: April 5, 2026</p>
      </header>

      <section className={styles.card}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>1. License Grant</h2>
          <p className={styles.text}>
            We grant students, educators, and researchers a non-exclusive, non-transferable license
            to use this platform for non-commercial academic purposes.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Permitted Uses</h2>
          <ul className={styles.list}>
            <li>Classroom teaching and academic presentations.</li>
            <li>Research, citation, and scholarly discussion.</li>
            <li>Personal study and exam preparation.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Restrictions</h2>
          <ul className={styles.list}>
            <li>No resale, sublicensing, or commercial redistribution of platform content.</li>
            <li>No automated scraping intended to replicate the service.</li>
            <li>No removal of attribution or citation context.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Attribution</h2>
          <p className={styles.text}>
            When reproducing educational excerpts, users should provide clear scholarly attribution
            to the platform and to original cited sources where applicable.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Termination</h2>
          <p className={styles.text}>
            This license terminates automatically if terms are violated. Continued access may also
            be revoked for misuse that harms learners, contributors, or platform integrity.
          </p>
        </div>
      </section>
    </div>
  );
}
