import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="info">
        <h2>Page Not Found</h2>
        <button>
          <Link to="/">Return To Home ?</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
