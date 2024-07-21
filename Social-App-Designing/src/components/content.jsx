import React from "react";
import "./content.css";
import userPic from "/assets/kiki.jpg";
import Post from "./posts";
import { AllPosts } from "./Data/PostData";

function Content() {
  return (
    <div className="content">
      <div className="mysection">
        <div className="topone">
          <span>
            <img src={userPic} alt="" className="profile" />
          </span>
          <span>
            <input
              type="text"
              placeholder="What's in your mind ?"
              className="addthought"
            />
          </span>
        </div>
        <div className="addmore">
          <span>
            <span className="tomato">
              <i class="fa-solid fa-images "></i>
            </span>
            Photo or Video
          </span>
          <span>
            <span className="green">
              <i class="fa-solid fa-tag "></i>
            </span>
            Tag
          </span>
          <span>
            <span className="blue">
              <i class="fa-solid fa-location-dot"></i>
            </span>
            Location
          </span>
          <span>
            <span className="yellow">
              <i class="fa-solid fa-face-kiss-wink-heart"></i>
            </span>
            Feelings
          </span>
          <button className="share-btn">Share</button>
        </div>
      </div>
      {AllPosts.map((p) => {
        return <Post eachPost={p} />;
      })}
    </div>
  );
}

export default Content;
