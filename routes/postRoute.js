const express = require("express");
const router = express.Router();

const {
  getAllPostHandler,
  addPostHandler,
  getPostByIdHandler,
  updatePostByIdHandler,
  deletePostByIdHandler,
  getAllPostPublicHandler,
} = require("../controller/postController");
const validateToken = require("../middleware/validateTokenMiddleware");

router.get("/all", getAllPostPublicHandler);

//middleware validate token
router.use(validateToken);

router.route("/").get(getAllPostHandler).post(addPostHandler);
router
  .route("/:id")
  .get(getPostByIdHandler)
  .put(updatePostByIdHandler)
  .delete(deletePostByIdHandler);

module.exports = router;
