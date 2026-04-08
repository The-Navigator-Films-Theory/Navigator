// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { Menu, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { EXTERNAL_LINKS, hasExternalLink } from '../../config/externalLinks';
import styles from './NavBar.module.scss';

const links = [
  { to: '/', label: 'Home' },
  { to: '/theory', label: 'Theory Library' },
  { to: '/vocabulary', label: 'Vocabulary' },
  { to: '/learn', label: 'Interactive Learning' },
  { to: '/analysis', label: 'Analysis Toolkit' },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandWrap}>
          <p className={styles.brand}>The Film &amp; Media Theory Navigator</p>
          <p className={styles.tagline}>Learn . Analyze . Discuss</p>
        </div>

        <nav className={styles.nav}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [styles.link, isActive ? styles.linkActive : ''].filter(Boolean).join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          {hasExternalLink(EXTERNAL_LINKS.betaFeedbackFormUrl) && (
            <a
              href={EXTERNAL_LINKS.betaFeedbackFormUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.feedbackLink}
            >
              Feedback
            </a>
          )}

          {hasExternalLink(EXTERNAL_LINKS.betaQaFormUrl) && (
            <a
              href={EXTERNAL_LINKS.betaQaFormUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.feedbackLink}
            >
              Q&A
            </a>
          )}

          <NavLink to="/admin/login" className={styles.loginButton}>
            <User size={16} />
            <span>Login</span>
          </NavLink>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={[styles.mobileOverlay, menuOpen ? styles.mobileOverlayVisible : '']
          .filter(Boolean)
          .join(' ')}
        onClick={closeMenu}
      />

      <div
        className={[styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : '']
          .filter(Boolean)
          .join(' ')}
      >
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileMenuHeader}>
            <p className={styles.mobileMenuTitle}>Navigation</p>
          </div>

          <nav className={styles.mobileNav}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [styles.mobileLink, isActive ? styles.mobileLinkActive : '']
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.mobileActions}>
            {hasExternalLink(EXTERNAL_LINKS.betaFeedbackFormUrl) && (
              <a
                href={EXTERNAL_LINKS.betaFeedbackFormUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.mobileFeedbackLink}
                onClick={closeMenu}
              >
                Beta Feedback
              </a>
            )}

            {hasExternalLink(EXTERNAL_LINKS.betaQaFormUrl) && (
              <a
                href={EXTERNAL_LINKS.betaQaFormUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.mobileFeedbackLink}
                onClick={closeMenu}
              >
                Beta Q&A
              </a>
            )}

            <NavLink to="/admin/login" className={styles.mobileLoginButton} onClick={closeMenu}>
              <User size={16} />
              <span>Login</span>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}