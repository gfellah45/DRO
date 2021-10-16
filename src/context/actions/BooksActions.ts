import {
  fetchAllBooksActionTypes,
  fetchSingleBookActionTypes,
  Books,
} from "../types/index";

export const FetchAllBooks = (payload: Books[]): fetchAllBooksActionTypes => ({
  type: "FETCH_ALL_BOOKS",
  payload,
});

export const FetchSingleBook = (
  payload: Books
): fetchSingleBookActionTypes => ({
  type: "FETCH_SINGLE_BOOK",
  payload,
});

export type Actions = fetchAllBooksActionTypes | fetchAllBooksActionTypes;
