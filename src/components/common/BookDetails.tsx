import React, { FC } from "react";
import { Books } from "../../context/types/index";

interface BookDetailsProps {
  book: Books;
}

const BookDetails: FC<BookDetailsProps> = ({ book }) => {
  const {
    name,
    numberOfPages,
    authors,
    characters,
    povCharacters,
    released,
    isbn,
    country,
    publisher,
    mediaType,
  } = book;
  return (
    <div className="w-10/12">
      <div>
        <h1 className="text-4xl font-bold">{name}</h1>

        <p className="my-3 text-gray-500">
          Number of pages:{" "}
          <span className="font-bold text-gray-800">{numberOfPages}</span>
        </p>

        <p className="my-3 text-gray-500">
          Authors: <span className="font-bold text-gray-800">{authors}</span>
        </p>

        <p className="my-3 text-gray-500">
          Number of Characters:{" "}
          <span className="font-bold text-gray-800">{characters.length}</span>
        </p>

        <p className="my-3 text-gray-500">
          POV Characters:
          <span className="font-bold text-gray-800">
            {povCharacters.length}
          </span>
        </p>

        <p className="my-3 text-gray-500">
          Released Year:{" "}
          <span className="font-bold text-gray-800">
            {new Date(released).toDateString()}
          </span>
        </p>

        <p className="my-3 text-gray-500">
          Country: <span className="font-bold text-gray-800">{country}</span>
        </p>

        <p className="my-3 text-gray-500">
          ISBN: <span className="font-bold text-gray-800">{isbn}</span>
        </p>

        <p className="my-3 text-gray-500">
          Publisher:{" "}
          <span className="font-bold text-gray-800">{publisher}</span>
        </p>

        <p className="my-3 text-gray-500">
          Media Type:{" "}
          <span className="font-bold text-gray-800">{mediaType}</span>
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
