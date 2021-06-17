import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbarr">
      <div className="logo">
        <Link to="/">Beach Resort</Link>
      </div>

      <button className="nav-btn" onClick={handleToggle}>
        <FaAlignRight className="btn-toggle" />
      </button>

      <div className="links">
        <ul className={isOpen ? "ul-show" : "ul"}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
