import { Grid } from '@mui/material';
import MainLayout from 'Layout/MainLayout';
import AppTypography from 'components/AppTypography/AppTypography';
import { useContext } from 'react';
import { Store } from 'store/Store';
import { Todo } from 'types/todo';
import AddNewTask from './AddNewTask/AddNewTask';
import Task from './Task/Task';
import { useStyles } from './Tasks.styles';

type Props = {};

const Tasks: React.FC<Props> = (props) => {
  const { classes } = useStyles();
  const { state } = useContext(Store);

  return (
    <MainLayout currentPage='Home'>
      <AddNewTask />
      <div className={classes.tasks}>
        <div className={classes.title}>
          <AppTypography>Tasks</AppTypography>
        </div>
        <div className={classes.list}>
          {state.todoList.length > 0 ? (
            <Grid container spacing={3}>
              {state.todoList.map(
                ({ title, description, status, id }: Todo) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={`${status}-${id}`}
                  >
                    <Task
                      title={title}
                      description={description}
                      status={status}
                      id={id}
                    />
                  </Grid>
                )
              )}
            </Grid>
          ) : (
            <AppTypography className={classes.noData}>
              You have nothing to do.
              <br /> Go get some sleep
            </AppTypography>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Tasks;
