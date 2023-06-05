/* eslint-disable react-hooks/rules-of-hooks */
import { DriveFileRenameOutline } from '@mui/icons-material';
import { FormHelperText, MenuItem, Select, TextField } from '@mui/material';
import MainLayout from 'Layout/MainLayout';
import AppButton from 'components/AppButton/AppButton';
import AppTypography from 'components/AppTypography/AppTypography';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from 'store/Store';
import { editTodo } from 'store/actions/Todo';
import { Todo } from 'types/todo';
import { useStyles } from './EditTask.styles';

type Props = {};

interface FormData {
  title: string;
  description: string;
  status: string;
}

const EditTask = (props: Props) => {
  const { classes } = useStyles();
  const { dispatch, state } = useContext(Store);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return null;
  }

  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return null;
  }

  const currentTask = state.todoList.find((todo: Todo) => todo.id === parsedId);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: currentTask?.title,
      description: currentTask?.description,
      status: currentTask?.status,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    editTodo(parsedId, data.status, data.title, data.description, dispatch);
    navigate('/');
  };

  return (
    <MainLayout currentPage='Edit'>
      <div className={classes.root}>
        <AppTypography mb={3} className={classes.title}>
          Add a New Task
        </AppTypography>
        <div className='form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.textField}>
              <TextField
                {...register('title', {
                  required: 'Title is a required field',
                })}
                label='Title'
                error={!!errors.title}
                helperText={errors.title?.message}
                fullWidth
                variant='filled'
              />
            </div>
            <div className={classes.textField}>
              <TextField
                {...register('description', {
                  required: 'Description is a required field',
                })}
                label='Description'
                error={!!errors.description}
                helperText={errors.description?.message}
                fullWidth
                variant='filled'
                multiline
                rows={19}
              />
            </div>
            <div className={classes.textField}>
              <Select
                {...register('status', {
                  required: 'Status is a required field',
                })}
                error={!!errors.status}
                fullWidth
                variant='filled'
                defaultValue={currentTask?.status}
              >
                <MenuItem
                  value='Todo'
                  disabled={
                    currentTask?.status === 'inProgress' ||
                    currentTask?.status === 'Done'
                  }
                >
                  Todo
                </MenuItem>
                <MenuItem
                  value='inProgress'
                  disabled={
                    currentTask?.status === 'inQA' ||
                    currentTask?.status === 'Blocked' ||
                    currentTask?.status === 'Done'
                  }
                >
                  inProgress
                </MenuItem>
                <MenuItem
                  value='Blocked'
                  disabled={
                    currentTask?.status === 'Todo' ||
                    currentTask?.status === 'inQA' ||
                    currentTask?.status === 'Done'
                  }
                >
                  Blocked
                </MenuItem>
                <MenuItem
                  value='inQA'
                  disabled={
                    currentTask?.status === 'Todo' ||
                    currentTask?.status === 'Blocked' ||
                    currentTask?.status === 'Done'
                  }
                >
                  inQA
                </MenuItem>
                <MenuItem
                  value='Done'
                  disabled={
                    currentTask?.status === 'Todo' ||
                    currentTask?.status === 'Blocked' ||
                    currentTask?.status === 'inProgress'
                  }
                >
                  Done
                </MenuItem>
                <MenuItem
                  value='Deployed'
                  disabled={currentTask?.status !== 'Done'}
                >
                  Deployed
                </MenuItem>
              </Select>
              {!!errors.status && (
                <FormHelperText>{errors.status?.message}</FormHelperText>
              )}
            </div>
            <div className={classes.buttons}>
              <AppButton
                size='large'
                startIcon={<DriveFileRenameOutline />}
                type='submit'
                fullWidth
              >
                Edit
              </AppButton>
              <AppButton
                size='large'
                type='submit'
                fullWidth
                variant='outlined'
              >
                Cancel
              </AppButton>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditTask;
