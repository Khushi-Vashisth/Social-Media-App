import React, { useEffect, useContext, useState } from "react";
import TopNavbar from "./TopNavbar";
import Sidebar from "./Sidebar";
import ProfileTop from "./Profiletop";
import "./Profile.css";
import ProfileRight from "./ProfileRight";
import Content from "./content";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Profile() {
  const [_user, setUser] = useState({});
  const { username } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const ApiUrl = import.meta.env.VITE_API_URL;
        // console.log(ApiUrl);

        const res = await axios.get(ApiUrl + `user/?username=${username}`);
        setUser(res.data);
        console.log("user profile", res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [username]);

  return (
    <div>
      <TopNavbar />
      <div className="top-profile">
        <Sidebar />
        <div className="profileside">
          <div className="profilecover">
            <ProfileTop User={username} />
          </div>
          <div className="profilebottom">
            <div className="profilecontent">
              <Content currentuser={`${username}`} />
            </div>
            <div className="profileright">
              <ProfileRight user={_user} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
