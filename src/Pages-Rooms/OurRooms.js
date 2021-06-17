import React from "react";
import RoomContainer from "../Components-Rooms/RoomContainer";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <React.Fragment>
      <div className="rooms">
        <div className="title-rooms">
          <h1>Our Rooms</h1>
          <div className="underline"></div>

          <Link to="/">Return Home </Link>
        </div>
      </div>
      <RoomContainer />
    </React.Fragment>
  );
};

export default Rooms;
