import React, { useContext, useState, useEffect } from "react";
import "./topNavbar.css";
// import userPic from "/assets/kiki.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function TopNavbar({}) {
  let [isclick, setisclick] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user, "context");

  let HandleClick = () => {
    setisclick(!isclick);
  };
  return (
    <div className="wrapper_nav">
      <div className="topnav">
        <h1>
          <Link to="/" onClick={HandleClick} className="title">
            ChillDose
          </Link>
        </h1>
        <div className="searchbar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends,post and video"
          />
        </div>
        <div className="navWords">Homepage &nbsp; &nbsp; Timeline</div>
        <div className="navFonts">
          <div className="f-user">
            <i class="fa-solid fa-user"></i>
            <span className="iconDot">2</span>
          </div>
          <div className="f-msg">
            <i class="fa-solid fa-message"></i>
            <span className="iconDot">1</span>
          </div>
          <div className="f-notify">
            <i class="fa-solid fa-bell"></i>
            <span className="iconDot">2</span>
          </div>
        </div>
        <div className="navLogo">
          <Link to="/register" onClick={HandleClick} className="login">
            Log in
          </Link>
          <Link to={`/Profile/${user.username}`} onClick={HandleClick}>
            <img
              src={user.profilePicture || "/assets/noprofile.jpg"}
              alt="Profile "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
