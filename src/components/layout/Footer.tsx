import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="app-footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Inventory Care</span>
      </div>
    </footer>
  );
};

export default Footer;