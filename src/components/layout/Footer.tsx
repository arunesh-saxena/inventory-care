import React from 'react';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  footer: {
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid #e1e1e1',
    backgroundColor: '#ffffff',
  },
});

const Footer: React.FC = () => {
  const styles = useStyles();
  return (
    <footer className={`app-footer ${styles.footer}`}>
      <div className="container">
        <span>© {new Date().getFullYear()} Inventory Care</span>
      </div>
    </footer>
  );
};

export default Footer;
