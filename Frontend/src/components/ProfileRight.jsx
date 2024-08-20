import React, { useEffect, useState } from "react";
import "./Profileright.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ProfileRight = ({ user }) => {
  const [friends, setfriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const ApiUrl = import.meta.env.VITE_API_URL;
        const friendList = await axios.get(`${ApiUrl}user/friends/${user._id}`);
        setfriends(friendList.data);
        console.log(friendList.data, "friend data");
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  });

  return (
    <div className="rightprofile">
      <div className="info">
        <h3>user Information :</h3>
        <p>
          <b>Name: </b>
          {user.username || "none"}
        </p>
        <p>
          <b>Age: </b>18
        </p>
        <p>
          <b>Relationship status: </b>
          {user.relationship || "none"}
        </p>
        <p>
          <b>Qualifications: </b>Graduation
        </p>
        <p>
          <b>City: </b> {user.city || "none"}
        </p>
      </div>
      <div className="listfollowing">
        <h1 className="Followlist">Following List</h1>

        <div className="listUser">
          {friends.map((friend) => (
            <span className="usernew">
              <Link to={`/profile/${friend.username}`}>
                <span className="following">
                  <img
                    className="userimg"
                    src={
                      friend.profilePicture
                        ? friend.profilePicture
                        : "/assets/noprofile.jpg"
                    }
                    alt="profile"
                  />
                </span>
                <span className="username__">{friend.username}</span>
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileRight;
