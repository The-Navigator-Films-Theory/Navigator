import { Mail, Users, X } from 'lucide-react'; // Using Users for the unidentified icon
import { Link } from 'react-router-dom';
import { EXTERNAL_LINKS, hasExternalLink } from '../../config/externalLinks';
import styles from './Footer.module.scss';

const learningLinks = [
  { to: '/theory', label: 'Theory Library' },
  { to: '/vocabulary', label: 'Vocabulary' },
  { to: '/learn', label: 'Interactive Quizzes' },
  { to: '/analysis', label: 'Analysis Toolkit' },
  { to: '/flashcards', label: 'Flashcards' },
  { to: '/games', label: 'Games', disabled: true },
];

const communityLinks = [
  {
    to: EXTERNAL_LINKS.betaFeedbackFormUrl,
    label: 'Beta Feedback Form',
    external: true,
    disabled: !hasExternalLink(EXTERNAL_LINKS.betaFeedbackFormUrl),
  },
  {
    to: EXTERNAL_LINKS.betaQaFormUrl,
    label: 'Beta Q&A Form',
    external: true,
    disabled: !hasExternalLink(EXTERNAL_LINKS.betaQaFormUrl),
  },
  { to: '/community/forums', label: 'Discussion Forums', disabled: true },
  { to: '/community/groups', label: 'Study Groups', disabled: true },
  { to: '/community/experts', label: 'Expert Insights', disabled: true },
  { to: '/citations', label: 'Citations Database', disabled: true },
  { to: '/reading', label: 'Reading Recommendations', disabled: true },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <h3 className={styles.brandName}>The Film & Media Theory Navigator</h3>
            <p className={styles.tagline}>Learn . Analyze . Discuss</p>
            <p className={styles.description}>
              Educational platform for film and media theory studies and critical media analysis.
              From classical frameworks to contemporary critical approaches, discover the ideas that
              shape cinema studies.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="X"><X size={20} /></a>
              <a href="#" aria-label="Community"><Users size={20} /></a>
              <a href="mailto:feedback@filmtheory.works" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Learning</h4>
              <ul>
                {learningLinks.map((link) => (
                  <li key={link.to}>
                    {link.disabled ? (
                      <span className={styles.disabledLink}>{link.label}</span>
                    ) : (
                      <Link to={link.to}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Community</h4>
              <ul>
                {communityLinks.map((link) => (
                  <li key={link.to}>
                    {link.disabled ? (
                      <span className={styles.disabledLink}>{link.label}</span>
                    ) : link.external ? (
                      <a href={link.to} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} The Film & Media Theory Navigator. All rights reserved.</p>
          <nav className={styles.legalLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/license">Academic License</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
