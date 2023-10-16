const asyncHandler = require("express-async-handler");

const getAllPostHandler = asyncHandler(async (req, res) => {
  res.status(200).json({
    status: true,
    message: "success",
    data: "get all data",
  });
});

const addPostHandler = asyncHandler(async (req, res) => {
  res.status(201).json({
    status: true,
    message: "success",
    data: "get post data",
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
