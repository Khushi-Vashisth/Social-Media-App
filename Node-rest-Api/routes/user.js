const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Its User Route");
  console.log("request received user route");
});

module.exports = router;
