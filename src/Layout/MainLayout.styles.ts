import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing, shadows }) => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
  },
  content: {},
}));
