import React, { useContext } from "react";
import { AlContext } from "../FunctionContext";
import Room from "./Room";

const RoomList = () => {
  const { sortRooms } = useContext(AlContext);

  if (sortRooms.length === 0) {
    return (
      <h2 className="no-rooms">
        Unfortunately No Rooms Matched Your Search Parameters
      </h2>
    );
  }

  return (
    <div className="room-list">
      <div className="contaienr">
        <div className="row">
          {sortRooms.map((item, index) => {
            return <Room key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RoomList;
