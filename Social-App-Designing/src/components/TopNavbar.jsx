import React, { useState } from "react";
import "./topNavbar.css";
import userPic from "/assets/kiki.jpg";
import { Link } from "react-router-dom";

function TopNavbar() {
  let [isclick, setisclick] = useState(false);

  let HandleClick = () => {
    setisclick(!isclick);
  };
  return (
    <div className="topnav">
      <h2 className="title">chillDose</h2>
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
        <Link to="/login" onClick={HandleClick} className="login">
          Log in
        </Link>
        <Link to="/Profile" onClick={HandleClick}>
          <img src={userPic} alt="Profile pic" />
        </Link>
      </div>
    </div>
  );
}

export default TopNavbar;
