import React from "react";
import BookList from "../components/BookList.js";
import API from "../utils/API";

const Books = () => {
  const [books, setBooks] = React.useState([]);
  const [formObject, setFormObject] = React.useState({});

  function getBooks(query) {
    API.getFromGoogle(query)
      .then(res => {
        setBooks(res.data.items);
      })
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  async function handleSubmit(event) {
    getBooks(formObject.search);
  }

  return (
    <div className="container">
      <div className="input-group mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
          name="search"
          placeholder="Search for a Book"
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={handleSubmit}>
          Search
          </button>
      </div>

      <BookList books={books}/>

    </div>
  );
}

export default Books;