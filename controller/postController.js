const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

const getAllPostHandler = asyncHandler(async (req, res) => {
  const post = await Post.find({});
  res.status(200).json({
    status: true,
    message: "success",
    data: post,
  });
});

//@desc add post
//@route GET /api/posts
//@access public
const addPostHandler = asyncHandler(async (req, res) => {
  //cek validasi
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    res.status(400).json({
      status: false,
      message: "validation error",
      data: "title dan author wajib diisi",
    });
  }

  const post = await Post.create(req.body);
  res.status(201).json({
    status: true,
    message: "success",
    data: post,
  });
});

const getPostByIdHandler = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: true,
    message: "success",
    data: "get post data by id",
  });
});

const updatePostByIdHandler = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: true,
    message: "success",
    data: " update data",
  });
});

const deletePostByIdHandler = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: true,
    message: "success",
    data: "delete data",
  });
});

module.exports = {
  getAllPostHandler,
  addPostHandler,
  getPostByIdHandler,
  updatePostByIdHandler,
  deletePostByIdHandler,
};
