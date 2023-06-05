import {
  AddTodoAction,
  EditTodoStatusAction,
  RemoveTodoAction,
  Todo,
} from './todo';

export type AppAction = AddTodoAction | RemoveTodoAction | EditTodoStatusAction;

export interface AppState {
  todoList: Todo[];
}

export interface StoreContextProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export interface StoreProviderProps {
  children: React.ReactNode;
}
