export type Books = {
  name: string;
  url: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
};

export type InitialState = {
  books: Books[];
  loading: boolean;
  error: string;
};

export type fetchAllBooksActionTypes = {
  type: "FETCH_ALL_BOOKS";
  payload: Books[];
};

export type fetchSingleBookActionTypes = {
  type: string;
  payload: Books;
};
