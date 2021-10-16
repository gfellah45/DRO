import { Books } from "../context/types";
import useData from "../hooks/useData";
import BookCard from "./common/BookCard";
import { FC, useEffect, useState } from "react";
import DataMsg from "./common/DataMsg";

interface BookListProps {
  searchTerm: string;
}

const BookList: FC<BookListProps> = ({ searchTerm }) => {
  //fecthing th data from useData hook
  const {
    data,
    status,
    error,
    ref,
    inView,
    isFetchingNextPage,

    fetchNextPage,
  } = useData("/books");

  const { data: charData } = useData("/characters");

  //if in view fecth next page
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  // search function for computaion of all paramertes
  //note this are all local serach
  const searchResults = (data: any[]) => {
    // filter name author isbn publisher
    if (searchTerm) {
      const savedSearchResult = data.filter((book: Books) => {
        const { name, authors, isbn, publisher } = book;
        return (
          name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          authors.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
          isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
          publisher.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      // filter chaacter name if the above result is empty
      if (savedSearchResult.length === 0) {
        const filterName = charData?.pages[0].find(
          (char: any) =>
            char.name?.toLowerCase() === searchTerm.toLowerCase() ||
            char.culture?.toLowerCase() === searchTerm.toLowerCase()
        );

        const filtereData = data.reduce((acc: Books[], book: Books) => {
          filterName?.books.forEach((item: string) => {
            if (item === book.url) {
              acc.push(book);
            }
          });
          return acc;
        }, []);

        return filtereData;
      }

      return savedSearchResult;
    }

    return data;
  };

  //setting the data to local state
  const [availableBooks, setAVailableBooks] = useState<Books[]>([]);

  useEffect(() => {
    if (data) {
      setAVailableBooks(data?.pages.flat());
    }
  }, [data]);

  return (
    <div className="">
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center w-full min-h-screen ">
          <div className="flex items-center justify-center ">
            <div className="w-32 h-32 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
          </div>

          <h1 className="font-bold text-white">Loading....</h1>
        </div>
      )}
      {status === "error" && <div>Error: {error}</div>}

      {status === "success" && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {searchResults(availableBooks).map((book: Books, idx: number) => (
            <BookCard key={idx} book={book} />
          ))}
        </div>
      )}

      {status === "success" && searchResults(availableBooks).length === 0 && (
        <DataMsg text="No data Found" />
      )}
      {status === "success" && searchResults(availableBooks).length > 0 && (
        <div ref={ref}>
          {isFetchingNextPage ? (
            <DataMsg text="Loading more books..." />
          ) : (
            <DataMsg text="Load more books" />
          )}
        </div>
      )}
    </div>
  );
};

export default BookList;
