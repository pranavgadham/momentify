import Post from "./post.schema.js";

export class postModel {
  getAllPost = async () => {
    try {
      const posts = await Post.find({});
      return posts;
    } catch (error) {
      console.log(error);
    }
  };

  getPostById = async (id) => {
    try {
      const post = await Post.findById(id);
      return post;
    } catch (error) {
      console.log(error);
    }
  };

  getPostByUserId = async (userId) => {
    try {
      const posts = await Post.find({ creater: userId });
      return posts;
    } catch (error) {
      console.log(error);
    }
  };

  createPost = async (caption, imageUrl, userId) => {
    try {
      const post = new Post({
        caption: caption,
        imageURL: imageUrl,
        creater: userId,
      });
      return await post.save();
    } catch (error) {
      console.log(error);
    }
  };

  deletePostById = async (id, userId) => {
    try {
      const post = await Post.findOne({ _id: id, creater: userId });
      if (post) {
        await Post.findByIdAndDelete(id);
      }
      return post;
    } catch (error) {
      console.log(error);
    }
  };

  updatePostById = async (id, userId, caption, imageUrl) => {
    try {
      const post = await Post.findOne({ _id: id, creater: userId });
      if (post) {
        if (post.caption) post.caption = caption;
        if (post.imageURL) post.imageURL = imageUrl;
        return await post.save();
      }
    } catch (error) {
      console.log(error);
    }
  };

}
