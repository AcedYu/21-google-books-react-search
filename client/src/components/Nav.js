import React from "react";

const Nav = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
      <div className="container-fluid">
        <h1>Google Book Search</h1>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <a className="nav-link" href="/search">Search</a>
            <a className="nav-link" href="/saved">Saved</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;