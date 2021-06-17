import React from "react";
import { Link } from "react-router-dom";
//
import Services from "../Components-Rooms/Services";
import FeaturedRooms from "../Components-Rooms/FeaturedRooms";

//

const Home = () => {
  return (
    <React.Fragment>
      {/* Start Section Picture  */}
      <div className="home">
        <div className="title">
          <h1>Luxurious Rooms</h1>
          <div className="underline"></div>
          <p>Deluxe Rooms Starting At $300</p>

          <Link to="/rooms">OUR ROOMS</Link>
        </div>
      </div>
      {/* End Section Picture */}

      <Services />

      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
