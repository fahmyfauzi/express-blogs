const express = require("express");
const router = express.Router();

const {
  getAllPostHandler,
  addPostHandler,
  getPostByIdHandler,
  updatePostByIdHandler,
  deletePostByIdHandler,
} = require("../controller/postController");
const validateToken = require("../middleware/validateTokenMiddleware");

//middleware validate token
router.use(validateToken);

router.get("/", getAllPostHandler);
router.route("/").get(getAllPostHandler).post(addPostHandler);
router
  .route("/:id")
  .get(getPostByIdHandler)
  .put(updatePostByIdHandler)
  .delete(deletePostByIdHandler);

module.exports = router;
