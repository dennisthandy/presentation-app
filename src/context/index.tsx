import React, { createContext, useReducer } from "react";
import { Action } from "./actionTypes";
import { reducer } from "./reducer";
import { State, initialState } from "./state";

interface ContextProviderProps {
  children: React.ReactNode;
}

const Context = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function ContextProvider({ children }: ContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { Context, ContextProvider };
