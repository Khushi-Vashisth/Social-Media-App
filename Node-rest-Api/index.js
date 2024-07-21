const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config(); // Load environment variables

const app = express();
const port = 8000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB...", err);
    process.exit(0);
  }
};
connectDB();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/user", userRoute);
app.use("/auth/user", authRoute);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/kd", (req, res) => {
  res.send("welcome kd");
});

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});
