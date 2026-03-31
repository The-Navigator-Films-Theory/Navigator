import { User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const links = [
  { to: '/', label: 'Home' },
  { to: '/theory', label: 'Theory Library' },
  { to: '/vocabulary', label: 'Vocabulary' },
  { to: '/learn', label: 'Interactive Learning' },
  { to: '/analysis', label: 'Analysis Toolkit' },
];

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandWrap}>
          <p className={styles.brand}>The Film & Media Theory Navigator</p>
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
          <NavLink to="/admin/login" className={styles.loginButton}>
            <User size={16} />
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}