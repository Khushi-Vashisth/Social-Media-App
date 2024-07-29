const route = require("express").Router();
const Post = require("../models/post");
const User = require("../models/user");

// route.get("/", (req, res) => {
//   res.send("postspostspostspostspostspostsposts");
// });

//create a post
route.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update a post
route.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      return res.status(200).json(` updated post`);
    } else {
      return res.status(403).json("You can update only your's post");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//delete a post
route.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json(`POST DELETED SUCCESSFULLY`);
    } else {
      return res.status(403).json("You can delete only your posts");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//like / dislike  a post
route.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json(`like added : ${req.body.userId}`);
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json(`disliked  : ${req.body.userId}`);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//get a post
route.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json("error : see vs");
  }
});

//get timeline posts
route.get("/timeline/all/:id", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.id);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    const allpost = userPosts.concat(...friendPosts);
    return res.status(200).json(allpost);
  } catch (err) {
    console.log(err);
    return res.status(500).json("error : see vs");
  }
});

//get user's all post
route.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    return res.status(500).json("error : see vs");
  }
});

module.exports = route;
