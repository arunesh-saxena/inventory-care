import { NavLink } from 'react-router-dom';
import {
  makeStyles,
  NavDrawer,
  NavDrawerBody,
} from '@fluentui/react-components';
import {
  ArrowRight20Filled,
  ArrowRight20Regular,
  Board20Filled,
  Board20Regular,
  Home24Regular,
} from '@fluentui/react-icons';
const useStyles = makeStyles({
  sidebar: {
    width: '240px',
    borderRight: '1px solid #e1e1e1',
  },
});
// const Dashboard = bundleIcon(Board20Filled, Board20Regular);

export default function Sidebar() {
  const styles = useStyles();
  return (
    <NavDrawer open type="inline" className={styles.sidebar}>
      <NavDrawerBody>
        <NavLink to="/">
          <Home24Regular />
          Home
        </NavLink>
        <NavLink to="/dashboard">
          <Board20Regular />
          Dashboard
        </NavLink>
        <NavLink to="/settings">
          <Board20Filled />
          <Board20Regular />
          Settings
          <ArrowRight20Regular />
          <ArrowRight20Filled />
        </NavLink>
      </NavDrawerBody>
    </NavDrawer>
  );
}
