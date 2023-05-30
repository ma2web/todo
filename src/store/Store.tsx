import React, { createContext, useReducer } from 'react';
import { AppAction, AppState, reducer } from './reducers';

interface StoreContextProps {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const initialState: AppState = {
  todoList: [],
};

export const Store = createContext<StoreContextProps>({
  state: initialState,
  dispatch: () => {},
});

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
