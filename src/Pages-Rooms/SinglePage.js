import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AlContext } from "../FunctionContext";
import Error from "./Error";

const SinglePage = () => {
  const { slug } = useParams();
  const { getRoom } = useContext(AlContext);
  const room = getRoom(slug);

  if (!room) {
    return <Error />;
  }
  const {
    name,
    price,
    description,
    capacity,
    size,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImg, ...defaultImg] = images;

  return (
    <div className="single-page">
      <div className="image">
        <img src={images[0]} />

        <div className="title">
          <h1>{name}</h1>
          <div className="underline"></div>

          <Link to={`/rooms`}>Back To Rooms </Link>
        </div>
      </div>

      <div className="info">
        <div className="row">
          {defaultImg.map((item, index) => {
            return (
              <div className="col-sm-12 col-lg-4">
                <div className="img">
                  <img src={item} key={index} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="details">
          <div className="row">
            <div className="col-sm-12 col-lg-6 ">
              <h4>Details</h4>
              <p>{description}</p>
            </div>

            <div className="col-sm-12 col-lg-6 ">
              <div className="infoo">
                <h4>Info</h4>
                <h6>Price : ${price}</h6>
                <h6>Size : {size} SQFT</h6>
                <h6>
                  Max capacity :
                  {capacity > 1 ? `${capacity} People ` : `${capacity} Person`}
                </h6>
                <h6>{pets ? "Pets Allowed" : " No Pets Allowed"}</h6>
                <h6>{breakfast && "Free Breakfast"}</h6>
              </div>
            </div>

            <div className="col-sm-12 col-lg-12 text-lg-center">
              <h4>Extras</h4>
              <ul className="extras">
                {extras.map((item, index) => {
                  return <li key={index}>- {item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
