const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

//@desc get all post
//@route GET /api/posts
//@access private
const getAllPostHandler = asyncHandler(async (req, res) => {
  //get all post berdasarkan user yang login
  const posts = await Post.find({ author: req.user.username }).sort({
    createdAt: -1,
  });
  return res.status(200).json({
    status: true,
    message: "success",
    data: posts,
  });
});

//@desc add post
//@route POST /api/posts
//@access public
const addPostHandler = asyncHandler(async (req, res) => {
  //cek validasi
  const { title, content, author, tags, thumbnail } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      status: false,
      message: "validation error",
      data: "title dan author wajib diisi",
    });
  }

  const post = await Post.create({
    title,
    content,
    author: req.user.username,
    tags,
    thumbnail,
  });
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
      message: "Post Not Found",
    });
  }

  //jika post dimiliki oleh pengguna lain
  if (post.author !== req.user.username) {
    return res.status(403).json({
      status: false,
      message: "Access denied, post does not belong to the logged-in user",
    });
  }

  //success
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

  //jika post milik author lain
  //jika post dimiliki oleh pengguna lain
  if (post.author !== req.user.username) {
    return res.status(403).json({
      status: false,
      message: "Access denied, post does not belong to the logged-in user",
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

  //jika post dimiliki oleh pengguna lain
  if (post.author !== req.user.username) {
    return res.status(403).json({
      status: false,
      message: "Access denied, post does not belong to the logged-in user",
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
