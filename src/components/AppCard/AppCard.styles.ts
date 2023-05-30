import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles<{ padding?: number | string }>()(
  ({ spacing, shadows }, { padding }) => ({
    root: {
      '& .MuiCard-root': {
        border: 'none',
        borderRadius: spacing(1),
        boxShadow: shadows[1],
      },
    },
    content: {
      padding,
    },
    appCardHeader: {
      marginBottom: spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appCardTitle: {
      textTransform: 'capitalize',
    },
    loading: {
      textAlign: 'center',
      padding: spacing(3, 0),
    },
  })
);
