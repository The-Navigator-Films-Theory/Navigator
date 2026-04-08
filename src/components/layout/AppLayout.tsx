// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { trackEngagementEvent } from '../../lib/engagement';
import styles from './AppLayout.module.scss';
import Footer from './Footer';
import NavBar from './NavBar';

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    void trackEngagementEvent({
      eventType: 'page_view',
      relatedType: 'route',
      relatedId: location.pathname,
      metadata: { path: location.pathname },
    });
  }, [location.pathname]);

  return (
    <div className={styles.root}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
