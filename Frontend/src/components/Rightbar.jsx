import React from "react";
import "./rightbar.css";
import Onlinefriend from "./onlinefriend";
import { users } from "./Data/PostData";

function Rightbar() {
  return (
    <div className="rightBar">
      <div className="right-top">
        <img src="/assets/gift.png" alt="" />{" "}
        <span>
          <b>Kiki-visi</b> and <b>3 other friends</b> have a Party today
        </span>
      </div>
      <div className="party-img">
        <img src="/assets/party.jpg" alt="" title="Have a fun" />
      </div>
      <h1 className="online-title">ONLINE FRIENDS</h1>

      {users.map((i) => {
        return <Onlinefriend eachUser={i} />;
      })}
    </div>
  );
}

export default Rightbar;
