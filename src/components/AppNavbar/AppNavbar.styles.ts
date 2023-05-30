import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing, shadows }) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing(1),
  },
}));
