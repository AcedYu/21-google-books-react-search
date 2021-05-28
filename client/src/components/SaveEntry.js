import React from "react";
import API from "../utils/API.js";

const SaveEntry = ({id, title, authors, image, link, description}) => {
  function onDelete(event) {
    API.deleteBook(id)
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} alt="failed to load" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{authors}</p>
            <p className="card-text"><small className="text-muted">{description}</small></p>
            <a className="btn btn-primary" href={link} target="_blank">View</a>
            <button className="btn btn-danger" onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaveEntry;