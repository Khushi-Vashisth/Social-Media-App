import React from "react";
import "./onlinefriend.css";

const Onlinefriend = ({ eachUser }) => {
  // console.log(eachUser);
  return (
    <div className="onlinefriend">
      <div className="username">
        <div className="logo">
          <img src={eachUser.pic} alt="" className="logoimg" />
          <span className="greendot">.</span>
        </div>
        <span>{eachUser.name}</span>
      </div>
    </div>
  );
};

export default Onlinefriend;
