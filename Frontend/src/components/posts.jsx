import React from "react";
import "./posts.css";
import { format } from "timeago.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Post({ post }) {
  const [like, setlike] = useState(false);
  const [countLike, setCountLike] = useState(post.likes.length);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const ApiUrl = import.meta.env.VITE_API_URL;
        // console.log(ApiUrl);

        const res = await axios.get(ApiUrl + `user?userId=${post.userId}`);
        setUser(res.data);
        console.log("users : # ", res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, [post.userId]);

  const HandleLike = async () => {
    try {
      const ApiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.put(ApiUrl + `post/${post._id}/like`, {
        userId: user._Id,
      });
      console.log(res, "likes");
    } catch (err) {}
    setCountLike(like ? countLike - 1 : countLike + 1);
    setlike(!like);
  };

  return (
    <div className="post">
      <div className="post-top-wrap">
        <ul className="post-top">
          <li>
            <Link to={`/profile/${user.username}`} onClick={HandleLike}>
              <img
                src={user.profilePicture || "/assets/noprofile.jpg"}
                alt=""
              />
            </Link>

            <span className="poster-name">{user.username}</span>
            <span className="posting-time">{format(post.createdAt)}</span>
          </li>
        </ul>
        <div>
          <i class="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <div className="about-post">{post.desc}</div>
      <div className="post-img">
        <img src={post.img || "/assets/party.jpg"} alt="0k" />
      </div>
      <div className="post-items">
        <ul className="post-likes">
          <span onClick={HandleLike} className="like">
            {like ? (
              <i class="fa-solid fa-heart"></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
          </span>
          <li>
            {countLike}
            {post.like} like (^.^){" "}
          </li>
        </ul>
        <div className="post-comment">{post.likes.length} comment</div>
      </div>
    </div>
  );
}

export default Post;
