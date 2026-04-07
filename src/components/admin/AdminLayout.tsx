import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, Menu, X, BarChart3, BookOpen, FileText, HelpCircle } from 'lucide-react';
import styles from './AdminLayout.module.scss';

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_user_id');
    navigate('/admin/login', { replace: true });
  };

  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: BarChart3 },
    { path: '/admin/theories', label: 'Theories', icon: BookOpen },
    { path: '/admin/vocabulary', label: 'Vocabulary', icon: FileText },
    { path: '/admin/quizzes', label: 'Quizzes', icon: HelpCircle },
    { path: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={styles.adminLayout}>
      {/* Sidebar */}
      <nav className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarBrand}>
          <p className={styles.brandTitle}>Film Theory Navigator</p>
          <p className={styles.brandSubtitle}>Admin Dashboard</p>
        </div>

        <ul className={styles.sidebarNav}>
          {navItems.map((item) => (
            <li key={item.path} className={styles.navItem}>
              <Link
                to={item.path}
                className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.sidebarFooter}>
          <div className={styles.userInfo}>
            <div className={styles.userMeta}>
              <p className={styles.userName}>Admin</p>
              <p className={styles.userPhone}>Logged in</p>
            </div>
          </div>
          <button className={styles.logoutButton} onClick={handleLogout}>
            <LogOut size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Admin Dashboard</h1>
          <button
            className={styles.toggleNav}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle navigation"
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
        </header>

        <main className={styles.content}>{children}</main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
