import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import "./Profiletop.css";
import { useParams } from "react-router-dom";

const ProfileTop = ({ User }) => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const { user: context_user } = useContext(AuthContext);
  console.log(User, params);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const ApiUrl = import.meta.env.VITE_API_URL;
        // console.log(ApiUrl);

        const res = await axios.get(ApiUrl + `user/?username=${User}`);
        setUser(res.data);
        console.log("user profile", res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="coverimg">
        <img
          src={User.coverPicture || "/assets/black.jpg"}
          alt=""
          className="cover-img"
        />
        <div className="handleprofile">
          <img
            className="myprofile"
            src={User.profilePicture || "/assets/noprofile.jpg"}
            alt=""
          />
        </div>
        <div className="handlename">
          <h1>{User}</h1>
          <span className="bio">{context_user.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;
