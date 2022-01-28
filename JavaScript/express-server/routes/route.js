const router = require("express").Router();

const routeController = require("../controllers/route");

// http://localhost:5000/api/1
router.get("/1", async (req, res, next) => {
  res.send({ message: "🚀 Route Works!" });
});

// http://localhost:5000/api/posts
router.get("/posts", routeController.getPosts);

// POST /api/post

router.post("/post", routeController.createPost);

module.exports = router;
