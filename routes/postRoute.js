const express = require("express");
const router = express.Router();

const {
  getAllPostHandler,
  addPostHandler,
  getPostByIdHandler,
  updatePostByIdHandler,
  deletePostByIdHandler,
} = require("../controller/postController");

router.get("/", getAllPostHandler);
router.route("/").get(getAllPostHandler).post(addPostHandler);
router
  .route("/:id")
  .get(getPostByIdHandler)
  .put(updatePostByIdHandler)
  .delete(deletePostByIdHandler);

module.exports = router;
