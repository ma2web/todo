import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(({ spacing, palette }) => ({
  tasks: {
    background: palette.primary.main,
    borderRadius: spacing(2, 2, 0, 0),
    overflow: 'hidden',
  },
  title: {
    padding: spacing(2, 3),
    background: palette.primary.main,
    '& p': {
      color: palette.common.white,
    },
  },
  list: {
    padding: spacing(3),
    background: `#a2ceed`,
    borderRadius: spacing(2, 2, 0, 0),
    height: 'calc(100vh - 503px)',
    overflow: 'auto',
  },
  noData: {
    minHeight: 'calc(100vh - 503px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
