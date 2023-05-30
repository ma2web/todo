import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing, shadows }) => ({
  root: {
    padding: spacing(3),
  },
  title: {
    fontWeight: 800,
  },
  textField: {
    marginBottom: spacing(2),
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing(1),
  },
}));
