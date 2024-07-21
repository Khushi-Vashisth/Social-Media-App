import React from "react";
import "./Profileright.css";

const ProfileRight = () => {
  return (
    <div className="rightprofile">
      <div className="info">
        <h3>User Information :</h3>
        <p>
          <b>Name: </b>Khushi Dhiman
        </p>
        <p>
          <b>Age: </b>18
        </p>
        <p>
          <b>Qualifications: </b>Diploma Holder
        </p>
        <p>
          <b>City: </b> Panipat
        </p>
      </div>
      <div className="listfollowing">
        <h1 className="Followlist">Following List</h1>
        <div className="list1">
          <div className="user1">
            <span className="following">
              <img src="/assets/profile.jpg" alt="" />
            </span>
            <h4>Nobita Nuhara</h4>
          </div>
          <div className="user2">
            <span className="following">
              <img src="/assets/profile2.jpg" alt="" />
            </span>
            <h4>Sizuka Marathi</h4>
          </div>
        </div>
        <div className="list2">
          <div className="user3">
            <span className="following">
              <img src="/assets/profile3.jpg" alt="" />
            </span>
            <h4>Denmark Laho</h4>
          </div>
          <div className="user4">
            <span className="following">
              <img src="/assets/profile4.jpg" alt="" />
            </span>
            <h4>Doraemon </h4>
          </div>
        </div>
        <div className="list3">
          <div className="user5">
            <span className="following">
              <img src="/assets/profile5.jpg" alt="" />
            </span>
            <h4>Ninja Hataori</h4>
          </div>
          <div className="user6">
            <span className="following">
              <img src="/assets/profile7.jpg" alt="" />
            </span>
            <h4>Miss Oxford</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRight;
