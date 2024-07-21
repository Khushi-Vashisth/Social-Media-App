import React from "react";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import ProfileTop from "./Profiletop";
import "./Profile.css";
import ProfileRight from "./ProfileRight";
import Content from "./content";

function Profile() {
  return (
    <div>
      <TopNavbar />
      <div className="top-profile">
        <Sidebar />
        <div className="profileside">
          <div className="profilecover">
            <ProfileTop />
          </div>
          <div className="profilebottom">
            <div className="profilecontent">
              <Content />
            </div>
            <div className="profileright">
              <ProfileRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
