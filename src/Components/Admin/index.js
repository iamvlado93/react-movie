import React from 'react';

import Header from '../Header';

import './index.css';

function Admin() {
  return (
    <div className="admin-page">
      <Header />
      <div className="admin-profile">
        <form className="movie-form">
          <div className="form-group">
            <input placeholder="Movie Name" className="form-control" />
          </div>
          <div className="image-uploader">
            <input type="file" />
          </div>
          <br />
          <div className="form-group">
            <input placeholder="Description" className="form-control" />
          </div>
          <div className="form-group">
            <input placeholder="Country" className="form-control" />
          </div>
          <div className="form-group">
            <input placeholder="Year" className="form-control" />
          </div>
          <div className="form-group">
            <input placeholder="Genre" className="form-control" />
          </div>
          <div className="form-group">
            <input placeholder="Duration" className="form-control" />
          </div>
          <div className="form-group">
            <input placeholder="Rating" className="form-control" />
          </div>
          <button type="submit" className="btn btn-secondary btn-lg btn-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
