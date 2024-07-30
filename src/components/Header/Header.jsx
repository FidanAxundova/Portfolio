import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { FaEnvelope } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  let url = window.location.href;
  let endOfUrl;

  useEffect(() => {
    // url-den sehife adi goturulur
    endOfUrl = url.substring(url.lastIndexOf("/") + 1);
  }, []);

  const activeStyle = {
    color: "#f76e62",
  };

  return (
    <div className="header-container">
      <div className="information">
        <div className="info-in">
          <NavLink
            to={"/"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaHome />
          </NavLink>
          <NavLink
            to={"/about"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <BsFillPersonFill />
          </NavLink>
          <NavLink
            to={"/work"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <GrWorkshop />
          </NavLink>
          <NavLink
            to={"/Contact"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <FaEnvelope />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
