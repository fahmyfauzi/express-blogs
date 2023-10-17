const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

//@desc get all post
//@route GET /api/posts
//@access public
const getAllPostHandler = asyncHandler(async (req, res) => {
  const post = await Post.find({});
  res.status(200).json({
    status: true,
    message: "success",
    data: post,
  });
});

//@desc add post
//@route POST /api/posts
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

//@desc get post by id
//@route POST /api/posts/:id
//@access public
const getPostByIdHandler = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.status(200).json({
    status: true,
    message: "success",
    data: post,
  });
});

//@desc update post
//@route PUT /api/posts
//@access public
const updatePostByIdHandler = asyncHandler(async (req, res) => {
  //cari id
  const postId = await Post.findById(req.params.id);
  //jika id tidak ditemukan
  if (!postId) {
    res.status(404).json({
      status: false,
      message: "Not Found!",
    });
  }

  //update post
  const updatePost = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } // mengembalikan dokumen yang diperbarui setelah perubahan tersebut diterapkan.
  );

  //response yang sudah terupdate
  const post = await Post.findById(req.params.id);
  res.status(200).json({
    status: true,
    message: "success",
    data: post,
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
