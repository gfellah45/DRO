import { render, fireEvent, screen } from "@testing-library/react";

import BookCard from "../components/common/BookCard";

const bookCardTestData = {
  name: "test",
  url: "test",
  isbn: "test",
  authors: ["test"],
  numberOfPages: 5,
  publisher: "test",
  country: "",
  mediaType: "string",
  released: "test",
  characters: ["test"],
  povCharacters: ["test"],
};

describe("<BookCard />", () => {
  it("should render view more button", async () => {
    render(<BookCard book={bookCardTestData} />);
    const button = screen.getByRole("button", { name: /View more/i });

    expect(button).toBeInTheDocument();

    // ???
  });

  it("should contain book ISBN number", async () => {
    render(<BookCard book={bookCardTestData} />);

    const isbn = screen.getByText(/ISBN/i);
    expect(isbn).toBeInTheDocument();
  });
});
