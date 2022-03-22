const router = require("express").Router();
const { body } = require("express-validator/");

const feedController = require("../controllers/feed");

// http://localhost:5000/api/1
router.get("/1", async (req, res, next) => {
  res.send({ message: "🚀 Route Works!" });
});

// POST /api/post
router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

// GET http://localhost:5000/api/posts
router.get("/posts", feedController.getPosts);

router.put("/post/:postId", feedController.updatePost);

router.delete("/post/:postId", feedController.deletePost);

module.exports = router;
