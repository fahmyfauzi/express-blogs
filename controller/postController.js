const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

//@desc get all post
//@route GET /api/posts
//@access public
const getAllPostHandler = asyncHandler(async (req, res) => {
  const post = await Post.find({}).sort({ createdAt: -1 });
  return res.status(200).json({
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
    return res.status(400).json({
      status: false,
      message: "validation error",
      data: "title dan author wajib diisi",
    });
  }

  const post = await Post.create(req.body);
  return res.status(201).json({
    status: true,
    message: "success",
    data: post,
  });
});

//@desc get post by id
//@route POST /api/posts/:id
//@access public
const getPostByIdHandler = asyncHandler(async (req, res) => {
  //cari id
  const post = await Post.findById(req.params.id);
  //jika id tidak ditemukan
  if (!post) {
    return res.status(404).json({
      status: false,
      message: "Not Found",
    });
  }

  return res.status(200).json({
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
    return res.status(404).json({
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
  return res.status(200).json({
    status: true,
    message: "success",
    data: post,
  });
});

const deletePostByIdHandler = asyncHandler(async (req, res) => {
  //cari id post
  const postId = await Post.findById(req.params.id);
  // jika id tidak ditemukan
  if (!postId) {
    return res.status(404).json({
      status: false,
      message: "Not Found!",
    });
  }

  const post = await Post.findByIdAndRemove(req.params.id);

  return res.status(200).json({
    status: true,
    message: "success",
  });
});

module.exports = {
  getAllPostHandler,
  addPostHandler,
  getPostByIdHandler,
  updatePostByIdHandler,
  deletePostByIdHandler,
};
