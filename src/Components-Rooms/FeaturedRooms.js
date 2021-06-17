import React, { useContext } from "react";
import { AlContext } from "../FunctionContext";
import Loading from "./Loading";

import Room from "./Room";

const FeaturedRooms = () => {
  const { featuredRooms, loading } = useContext(AlContext);

  return (
    <div className="featured-rooms">
      <div className="title">
        <h2>Featured Rooms</h2>
        <div className="underline"></div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="rooms-3">
          <div className="container">
            <div className="row">
              {featuredRooms.map((room) => (
                <Room key={room.id} {...room} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedRooms;
