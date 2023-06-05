import React, { createContext, useReducer } from 'react';
import {
  AppAction,
  AppState,
  StoreContextProps,
  StoreProviderProps,
} from 'types/store';
import { todoReducers } from './reducers/Todo';

const initialState: AppState = {
  todoList: [],
};

export const Store = createContext<StoreContextProps>({
  state: initialState,
  dispatch: () => {},
});

const rootReducer = (state: AppState, action: AppAction): AppState => {
  return {
    ...state,
    todoList: todoReducers(state, action).todoList,
  };
};

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<AppState, AppAction>>(
    rootReducer,
    initialState
  );

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
