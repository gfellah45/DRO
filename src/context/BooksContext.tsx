import React, { createContext } from "react";
import { InitialState } from "./types/index";
import { initialState } from "./state/allBooksState";
import { Actions } from "./actions/BooksActions";

const BooksContext = createContext<{
  state: InitialState;
  dispatch: React.Dispatch<Actions>;
}>({ state: initialState, dispatch: () => undefined });

export default BooksContext;
