import React from "react";
import "./Profiletop.css";

const ProfileTop = () => {
  return (
    <div>
      <div className="coverimg">
        <img src="/assets/cover.jpg" alt="" className="cover-img" />
        <div className="handleprofile">
          <img className="myprofile" src="/assets/myprofile.jpg" alt="" />
        </div>
        <div className="handlename">
          <h1>Khushi Dhiman</h1>
          <span className="bio">Hello my Programmer Friends !</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
