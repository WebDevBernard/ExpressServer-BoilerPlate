const router = require("express").Router();

// http://localhost:5000/api/1
router.get("/1", async (req, res, next) => {
  res.send({ message: "🚀 Route Works!" });
});

module.exports = router;
