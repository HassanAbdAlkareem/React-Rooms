import React from "react";
import { Link } from "react-router-dom";
//

const Room = ({ images, name, price, slug }) => {
  //
  return (
    <React.Fragment>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="single-room">
          <div className="overlay"></div>
          <div className="card">
            <img src={images[0]} alt="Single Room" />
            <Link to={`/rooms/${slug}`} className="btn-featured">
              FEATURED
            </Link>
            <div className="card-body">
              <p>{name}</p>
            </div>
            <div className="price">
              <h4>
                $ {price} <span>per Night</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Room;
