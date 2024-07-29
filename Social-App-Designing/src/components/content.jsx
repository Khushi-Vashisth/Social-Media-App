import React, { useEffect, useState, useContext } from "react";
import "./content.css";
// import userPic from "/assets/kiki.jpg";
import axios from "axios";
import Post from "./posts";
import { AuthContext } from "../context/authContext";
// import { AllPosts } from "./Data/PostData";

function Content({ currentuser }) {
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState([]);
  const [file, setfile] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const ApiUrl = import.meta.env.VITE_API_URL;
        console.log(ApiUrl);

        const res = currentuser
          ? await axios.get(ApiUrl + `post/profile/${currentuser}`)
          : await axios.get(ApiUrl + `post/timeline/all/${user._id}`);
        setPost(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
        console.log("user :", res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("file", file);
      data.append("name", filename);
      newPost.img = filename;

      const header = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      try {
        const ApiUrl = import.meta.env.VITE_API_URL;
        const up = await axios.post(ApiUrl + "upload", data, header);
        console.log("upload", up);
      } catch (err) {
        console.log(err);
      }
      try {
        const ApiUrl = import.meta.env.VITE_API_URL;
        const resPost = await axios.post(ApiUrl + `post`, newPost);
        console.log("new-post data", resPost);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="content">
      <div className="mysection">
        <div className="topone">
          <span>
            <img
              src={user.profilePicture || "/assets/noprofile.jpg"}
              alt=""
              className="profile"
            />
          </span>
          <span>
            <input
              type="text"
              placeholder="What's in your mind ?"
              className="addthought"
            />
          </span>
        </div>
        <form className="addmore" onSubmit={submitHandler}>
          <label htmlFor="file">
            <span className="tomato">
              <i class="fa-solid fa-images "></i>
            </span>
            Photo or Video
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpg,.jpeg"
              onChange={(e) => setfile(e.target.files[0])}
            />
          </label>
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
          <button className="share-btn" type="submit">
            Share
          </button>
        </form>
      </div>
      {post.map((p) => {
        return <Post post={p} key={p._id} />;
      })}
    </div>
  );
}

export default Content;
