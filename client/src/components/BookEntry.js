import React from "react";
import API from "../utils/API.js";

const BookEntry = ({ title, authors, image, link, description }) => {
  function onSave(event) {
    var body = {
      authors: authors,
      description: description,
      image: image,
      link: link,
      title: title
    }
    API.saveBook(body)
      .then(res => {
        alert("Entry Saved to your Saved List");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt="No Image Available" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{authors}</p>
            <p className="card-text"><small className="text-muted">{description}</small></p>
            <a className="btn btn-primary" href={link} target="_blank">View</a>
            <button className="btn btn-danger" onClick={onSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookEntry;