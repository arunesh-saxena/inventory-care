import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="app-layout" role="region" aria-label="Main application layout">
      <Header />

      <div className="app-body">
        <Sidebar />
        <main className="app-content" role="main">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default memo(MainLayout);
