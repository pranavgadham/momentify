import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
  },
  imageURL: {
    type: String,
    required: true,
  },
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  creater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
