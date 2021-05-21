import React from "react";

const styles = {
  jumboStyle: {
    background: "url('https://images.pexels.com/photos/1420709/pexels-photo-1420709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"
  },
};

const Jumbotron = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style={styles.jumboStyle}>
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 fw-normal bg-white">React Books Search</h1>
        <p className="lead fw-normal bg-white">Search and Save books of interest</p>
      </div>
    </div>
  );
}

export default Jumbotron;