import { AppAction } from 'types/store';

export const addTodo = (
  title: string,
  description: string,
  dispatch: React.Dispatch<AppAction>
) => {
  dispatch({
    type: 'ADD_TODO',
    title,
    description,
    status: 'Todo',
  });
};

export const removeTodo = (id: number, dispatch: React.Dispatch<AppAction>) => {
  dispatch({
    type: 'REMOVE_TODO',
    id,
  });
};

export const editTodo = (
  id: number,
  status: string,
  title: string,
  description: string,
  dispatch: React.Dispatch<AppAction>
) => {
  dispatch({
    type: 'EDIT_TODO',
    id,
    status,
    title,
    description,
  });
};
