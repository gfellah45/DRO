import { Books } from "../../context/types/index";
import { useState } from "react";
import Modal from "./Modal";
import BookDetails from "./BookDetails";

interface BookCardProps {
  book: Books;
}

const BookCard = ({ book }: BookCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <div className="p-3 my-3 bg-white rounded-md shadow-lg cursor-pointer hover:bg-red-100">
      <p>
        {book.authors.map((item: string, idx: number) => (
          <span className="text-sm text-gray-400" key={idx}>
            {item}
          </span>
        ))}
      </p>
      <h3 className="text-lg font-bold">{book.name}</h3>
      <p className="my-1 text-sm text-gray-500">
        Number of pages: {book.numberOfPages}
      </p>
      <p className="flex justify-between text-sm text-gray-700">
        <span> {book.publisher}</span>
      </p>
      <span className="text-sm text-gray-700">
        {new Date(book.released).toDateString()}
      </span>
      <p className="my-2 text-sm text-gray-800">ISBN: {book.isbn}</p>
      <div className="text-center">
        <button
          onClick={onOpen}
          className="px-4 py-2 mx-auto my-2 font-semibold text-red-500 border-2 border-red-500 rounded-md shadow-lg hover:text-white hover:bg-red-500"
        >
          View more
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} title="Book Details">
        <BookDetails book={book} />
      </Modal>
    </div>
  );
};

export default BookCard;
