/* eslint-disable react/prop-types */
import { Card } from '@mui/material';
import { ReactNode } from 'react';
import { useStyles } from './AppCard.styles';

export interface AppCardProps {
  children: ReactNode;
  padding?: number | string;
  variant?: 'elevation' | 'outlined' | undefined;
  title?: string;
  outSideTitle?: boolean;
  raised?: boolean;
  selectOption?: boolean;
  loading?: boolean;
}

const AppCard: React.FC<AppCardProps> = ({
  children,
  variant,
  padding,
  raised,
}) => {
  const { classes } = useStyles({ padding });

  return (
    <div className={classes.root}>
      <Card variant={variant ?? 'outlined'} raised={raised}>
        <div className={classes.content}>{children}</div>
      </Card>
    </div>
  );
};

export default AppCard;
