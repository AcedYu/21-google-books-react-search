import React from "react";
import BookEntry from "./BookEntry.js";

const BookList = ({ books }) => {
  return (
    <div className="container">
      <h1>Search Results</h1>
      <div className="container">
        {
          books.map(book => {
            var bookpic;
            if (!book.volumeInfo.imageLinks) {
              bookpic = "";
            } else {
              bookpic = book.volumeInfo.imageLinks.thumbnail;
            }
            return (
              <BookEntry
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={bookpic}
                link={book.volumeInfo.previewLink}
                description={book.volumeInfo.description}
              />
            );
          }
          )
        }
      </div>
    </div>
  );
}

export default BookList;