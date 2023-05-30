import { Button } from '@mui/material';
import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'secondary' | 'success' | 'error' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'submit';
  fullWidth?: boolean;
  startIcon?: ReactNode;
}

const AppButton = ({ startIcon, fullWidth, type, ...props }: Props) => {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={props?.variant ?? 'contained'}
      startIcon={startIcon}
      {...props}
    >
      {props?.children}
    </Button>
  );
};

export default AppButton;
