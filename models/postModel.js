const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title tidak boleh kosong"],
    },
    content: {
      type: String,
      required: [true, "Content tidak boleh kosong"],
    },
    author: {
      type: String,
      required: [true, "Author tidak boleh kosong"],
    },
    tags: [
      {
        type: String,
      },
    ],
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
