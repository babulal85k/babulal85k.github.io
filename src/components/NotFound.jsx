import React from 'react';
import './NotFound.css'; // Import your custom CSS for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404 Not Found</h1>
      <p className="not-found-text">
        Oops! It seems like you've stumbled upon a page that doesn't exist.
      </p>
      <img
        src="https://www.udacity.com/blog/wp-content/uploads/2021/02/img8.png" // Replace with your custom image or illustration
        alt="404 Not Found"
        className="not-found-image"
      />
      <p className="not-found-text">
        Return to <a href="/">homepage</a>
      </p>
    </div>
  );
};

export default NotFound;
