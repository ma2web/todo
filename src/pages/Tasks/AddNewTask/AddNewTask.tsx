import { AddOutlined } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import AppButton from '../../../components/AppButton/AppButton';
import AppTypography from '../../../components/AppTypography/AppTypography';
import { Store } from '../../../store/Store';
import { addTodo } from '../../../store/actions';
import { useStyles } from './AddNewTask.styles';

type Props = {};

interface FormData {
  title: string;
  description: string;
}

const AddNewTask = (props: Props) => {
  const { classes } = useStyles();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const { dispatch } = useContext(Store);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    addTodo(data.title, data.description, dispatch);
    reset({ title: '', description: '' });
  };

  return (
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
              rows={4}
            />
          </div>
          <div>
            <AppButton
              size='large'
              startIcon={<AddOutlined />}
              type='submit'
              fullWidth
            >
              Add
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
