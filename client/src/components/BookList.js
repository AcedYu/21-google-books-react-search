import React from "react";
import BookEntry from "./BookEntry.js";

const BookList = ({ books }) => {
  return (
    <div className="container">
      <h1>Search Results</h1>
      <div className="container">
        {
          books.map(book => (
            <BookEntry
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.previewLink}
            description={book.volumeInfo.description}
            />
          ))
        }
      </div>
    </div>
  );
}

export default BookList;