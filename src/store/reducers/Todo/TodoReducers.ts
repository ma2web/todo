import { AppAction, AppState } from 'types/store';
import { Todo } from 'types/todo';

const addTodo = (
  state: AppState,
  title: string,
  description: string
): AppState => {
  const newTodo: Todo = {
    id:
      (state.todoList.length > 0 &&
        state.todoList[state.todoList.length - 1].id + 1) ||
      1,
    title,
    description,
    status: 'Todo',
  };

  return { ...state, todoList: [...state.todoList, newTodo] };
};

const removeTodo = (state: AppState, id: number): AppState => {
  const newTodoList = state.todoList.filter((todo: Todo) => todo.id !== id);

  return { ...state, todoList: newTodoList };
};

const editTodoTag = (
  state: AppState,
  id: number,
  status: string,
  title: string,
  description: string
): AppState => {
  const todo = state.todoList.find((todo: Todo) => todo.id === id);
  const todoIndex = state.todoList.indexOf(todo as Todo);
  const newTodo = { title, description, status, id };

  const newTodoList = [
    ...state.todoList.slice(0, todoIndex),
    newTodo,
    ...state.todoList.slice(todoIndex + 1),
  ];

  return { ...state, todoList: newTodoList };
};

export const todoReducers = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo(state, action.title, action.description);
    case 'REMOVE_TODO':
      return removeTodo(state, action.id);
    case 'EDIT_TODO':
      return editTodoTag(
        state,
        action.id,
        action.status,
        action.title,
        action.description
      );
    default:
      return state;
  }
};
