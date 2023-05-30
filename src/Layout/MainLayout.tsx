import { ReactNode } from 'react';
import AppNavbar from '../components/AppNavbar/AppNavbar';
import { useStyles } from './MainLayout.styles';

type Props = {
  children: ReactNode;
  currentPage?: string;
};

const MainLayout = ({ currentPage, children }: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <AppNavbar currentPage={currentPage} />
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
