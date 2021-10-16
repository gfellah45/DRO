import { InitialState } from "../types/index";
import { initialState } from "../state/allBooksState";
import { Actions } from "../actions/BooksActions";

export const BooksReducer = (
  state = initialState,
  action: Actions
): InitialState => {
  switch (action.type) {
    case "FETCH_ALL_BOOKS":
      return {
        ...state,
      };

    default:
      return state;
  }
};
