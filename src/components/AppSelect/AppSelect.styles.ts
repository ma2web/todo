import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing, shadows }) => ({
  root: {
    '& fieldset': {
      border: 'none',
      boxShadow: shadows[2],
    },
  },
}));
