import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing, palette }) => ({
  root: {},
  status: {
    background: palette.primary.main,
    color: palette.common.white,
    minWidth: 80,
    borderRadius: spacing(1),
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 800,
    wordBreak: 'break-all',
  },
  description: {
    wordBreak: 'break-all',
  },
}));
