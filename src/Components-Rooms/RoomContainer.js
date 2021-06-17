import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

const RoomContainer = () => {
  return (
    <div className="room-container">
      <div className="title">
        <h2>Search Rooms</h2>
        <div className="underline"></div>
      </div>
      <RoomFilter />
      <RoomList />
    </div>
  );
};

export default RoomContainer;
