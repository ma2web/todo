import { DriveFileRenameOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppCard from '../../../components/AppCard/AppCard';
import AppTypography from '../../../components/AppTypography/AppTypography';
import { useStyles } from './Task.styles';

type Props = {
  title: string;
  description: string;
  id: number;
  status: string;
};

const Task = ({ title, description, id, status }: Props) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <AppCard padding={16}>
        <AppTypography mb={1} className={classes.title}>
          {title}
        </AppTypography>
        <AppTypography variant='body2' mb={5} className={classes.description}>
          {description}
        </AppTypography>
        <div className={classes.actions}>
          <div className={classes.status}>
            <AppTypography variant='caption'>{status}</AppTypography>
          </div>
          <div>
            <IconButton onClick={() => navigate(`/task/${id}`)}>
              <DriveFileRenameOutline />
            </IconButton>
          </div>
        </div>
      </AppCard>
    </div>
  );
};

export default Task;
