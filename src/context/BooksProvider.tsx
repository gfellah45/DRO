import { FC, useReducer } from "react";
import BooksContext from "./BooksContext";

import { BooksReducer } from "./reducer/BooksReducer";
import { initialState } from "./state/allBooksState";

const BooksProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  return (
    <BooksContext.Provider value={{ state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
