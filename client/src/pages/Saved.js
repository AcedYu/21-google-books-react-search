import React from "react";
import API from "../utils/API.js";
import SaveEntry from "../components/SaveEntry.js";

const Saved = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    var bookData = await API.getBooks();
    setBooks(bookData.data);
  }

  return(
    <div className="container">
      <h1 className="text-center">Saved Books</h1>
      <div className="container">
        {
          books.map(book => (
            <SaveEntry
            id={book._id}
            title={book.title}
            authors={book.authors}
            image={book.image}
            link={book.link}
            description={book.description}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Saved;