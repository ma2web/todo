export interface Todo {
  id: number;
  title: string;
  description: string;
  status: string;
}

export interface AddTodoAction {
  type: 'ADD_TODO';
  title: string;
  description: string;
  status: string;
}

export interface RemoveTodoAction {
  type: 'REMOVE_TODO';
  id: number;
}

export interface EditTodoStatusAction {
  type: 'EDIT_TODO';
  id: number;
  status: string;
  title: string;
  description: string;
}
