import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@fluentui/react-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  body: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: '16px',
    overflowY: 'auto',
    backgroundColor: '#fafafa',
  },
});
const MainLayout: React.FC = () => {
  const styles = useStyles();
  return (
    <div
      className={styles.root}
      role="region"
      aria-label="Main application layout"
    >
      <Header />

      <div className={styles.body}>
        <Sidebar />
        <main className={styles.content} role="main">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default memo(MainLayout);
