import React, { useContext, useEffect } from "react";
import { AlContext } from "../FunctionContext";
import Loading from "./Loading";

const getUinque = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
//
export default function RoomFilter() {
  const {
    type,
    setType,
    capacity,
    price,
    maxPrice,
    minPrice,
    size,
    maxSize,
    minSize,
    pets,
    breakfast,
    loading,
    rooms,
    handelChangeTypes,
    handelChangeCapacity,
    handleChangePrice,
    handleChangeMaxSize,
    handleChangeMinSize,
    handleChangeBreakfast,
  } = useContext(AlContext);

  // get unique types
  let types = getUinque(rooms, "type");
  types = ["all", ...types];

  types = types.map((item, index) => {
    return <option value={item}>{item}</option>;
  });

  // get unique capacity
  let people = getUinque(rooms, "capacity");

  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="room-filter">
      <div className="container">
        <form>
          {/* select type */}
          <div className="row text-sm-center text-lg-center">
            <div className="col-sm-12 col-md-6 col-lg-2">
              <div className="type">
                <label htmlFor="type">room type</label>
                <select
                  name="type"
                  id="type"
                  value={type}
                  className="select"
                  onChange={handelChangeTypes}
                >
                  {types}
                </select>
              </div>
            </div>
            {/* end of select type */}
            {/* guests  */}
            <div className="col-sm-12 col-md-6 col-lg-2">
              <div className="capacity">
                <label htmlFor="capacity">Guests</label>
                <select
                  name="capacity"
                  id="capacity"
                  value={capacity}
                  className="select"
                  onChange={handelChangeCapacity}
                >
                  {people}
                </select>
              </div>
            </div>
            {/* end of guests */}
            {/* start price  */}
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="price">
                <label htmlFor="price">room price ${price}</label>
                <input
                  type="range"
                  name="price"
                  min={minPrice}
                  max={maxPrice}
                  id="price"
                  value={price}
                  onChange={handleChangePrice}
                  className="input-price"
                />
              </div>
            </div>
            {/* End start price */}
            {/* start size  */}
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="size">
                <label htmlFor="size">Room Size</label>
                <input
                  type="number"
                  name="minSize"
                  id="size"
                  value={minSize}
                  onChange={handleChangeMinSize}
                  className="input-size"
                />
                <input
                  type="number"
                  name="maxSize"
                  id="size"
                  value={maxSize}
                  onChange={handleChangeMaxSize}
                  className="input-size"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-2">
              <div className="checkbox">
                <label htmlFor="breakfast">breakfast</label>
                <input
                  className="input-checkbox"
                  id="breakfast"
                  type="checkbox"
                  name="breakfast"
                  checked={breakfast}
                  onClick={handleChangeBreakfast}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
