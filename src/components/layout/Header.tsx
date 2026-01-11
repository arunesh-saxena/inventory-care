import { makeStyles, Text } from '@fluentui/react-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
  header: {
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    borderBottom: '1px solid #e1e1e1',
    backgroundColor: '#ffffff',
  },
  flex: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexLeft: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  flexRight: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '0 16px',
  },
});
const Header: React.FC = () => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <Text weight="bold" className={styles.flexLeft}>Inventory Care</Text>
        <nav className={styles.flexRight}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;