import React, { useState } from "react";
import "./posts.css";

function Post({ eachPost }) {
  const [count, setcount] = useState(eachPost.like);
  const [like, setlike] = useState(false);

  const HandleLike = () => {
    setcount(like ? count - 1 : count + 1);
    setlike(!like);
  };

  return (
    <div className="post">
      <div className="post-top-wrap">
        <ul className="post-top">
          <li>
            <img src={eachPost.profilePic} alt="" />
            <span className="poster-name">{eachPost.username}</span>
            <span className="posting-time">{eachPost.time}</span>
          </li>
        </ul>
        <div>i</div>
      </div>

      <div className="about-post">{eachPost.about}</div>
      <div className="post-img">
        <img src={eachPost.photo} alt="0k" />
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
          <li>{count} likes </li>
        </ul>
        <div className="post-comment">{eachPost.comment} comment</div>
      </div>
    </div>
  );
}

export default Post;
