import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing, shadows }) => ({
  root: {
    maxWidth: 1440,
    margin: 'auto',
  },
  content: {},
}));
