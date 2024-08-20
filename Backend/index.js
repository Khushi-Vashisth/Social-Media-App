const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

dotenv.config(); // Load environment variables

const app = express();
const port = 8000 || process.env.PORT;
app.use(cors());
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`running on port: ${port}`);
    });
  } catch (err) {
    console.error("Could not connect to MongoDB...", err);
    process.exit(0);
  }
};
connectDB();

app.use("/public", express.static(path.join(__dirname, "public/assets")));

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer(storage);
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json("File upload successfully");
  } catch (err) {
    console.log(err);
  }
});

app.use("/api/user", userRoute);
app.use("/auth/user", authRoute);
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/kd", (req, res) => {
  res.send("welcome kd");
});
