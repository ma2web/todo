/* eslint-disable react/prop-types */
import { MenuItem, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import { useStyles } from './AppSelect.styles';

interface Option {
  value: string | number;
  label: string;
}

interface AppSelectProps {
  options: Option[];
  label?: string;
  defaultValue?: string | number;
  helperText?: string;
  size?: 'medium' | 'small';
  placeholder?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
}

const AppSelect: React.FC<AppSelectProps> = ({
  options,
  label,
  defaultValue = '',
  helperText = '',
  size = 'medium',
  placeholder = '',
  variant,
}) => {
  const { classes } = useStyles();
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleOptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    },
    []
  );

  return (
    <TextField
      select
      label={label}
      value={selectedOption}
      onChange={handleOptionChange}
      helperText={helperText}
      size={size}
      placeholder={placeholder}
      variant={variant}
      className={classes.root}
    >
      {options.map((option: Option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default AppSelect;
