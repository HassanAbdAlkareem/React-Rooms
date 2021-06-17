import React, { useEffect, useState } from "react";
import Items from "./DataRooms";

const AlContext = React.createContext();

const FunctionContext = ({ children }) => {
  // State

  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [sortRooms, setSortRooms] = useState([]);
  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [price, setPrice] = useState(600);
  const [size, setSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [minSize, setMinSize] = useState(0);
  const [pets, setPets] = useState(false);
  const [breakfast, setBreakfast] = useState(false);

  //

  useEffect(() => {
    const Rooms = FormatData(Items);

    //
    let featuredRoom = Rooms.filter((Room) => Room.featured === true);
    setFeaturedRooms(featuredRoom);

    let maxPrice = Math.max(...Rooms.map((item) => item.price));
    setMaxPrice(maxPrice);

    let maxSize = Math.max(...Rooms.map((item) => item.size));
    setMaxSize(maxSize);

    setRooms(Rooms);
    setSortRooms(Rooms);

    setLoading(false);
  }, []);

  const FormatData = (Items) => {
    let tempItems = Items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let rooms = { id, ...item.fields, images };
      return rooms;
    });
    return tempItems;
  };

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  //

  const handelChangeTypes = (event) => {
    setType(event.target.value);
    filterRooms();
  };

  const handelChangeCapacity = (e) => {
    setCapacity(e.target.value);
    filterRooms();
  };

  const handleChangePrice = (e) => {
    setPrice(parseInt(price));
    setPrice(e.target.value);
    filterRooms();
  };

  const handleChangeMaxSize = (e) => {
    setMaxSize(e.target.value);
    filterRooms();
  };

  const handleChangeMinSize = (e) => {
    setMinSize(e.target.value);
    filterRooms();
  };

  const handleChangeBreakfast = (e) => {
    const value = breakfast ? e.target.checked : e.target.value;
    setBreakfast(value);
    filterRooms();
  };

  const filterRooms = () => {
    let tempRooms = [...rooms];

    // filter types
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter Price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter size

    // filter Breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    setSortRooms(tempRooms);
  };

  return (
    <AlContext.Provider
      value={{
        // Varibals
        rooms,
        featuredRooms,
        sortRooms,
        loading,
        type,
        capacity,
        price,
        maxPrice,
        minPrice,
        size,
        maxSize,
        minSize,
        pets,
        breakfast,
        // Function And Set
        setLoading,
        setCapacity,
        getRoom,
        handelChangeTypes,
        handelChangeCapacity,
        handleChangePrice,
        handleChangeMinSize,
        handleChangeMaxSize,
        handleChangeBreakfast,
      }}
    >
      {children}
    </AlContext.Provider>
  );
};

export { FunctionContext, AlContext };
