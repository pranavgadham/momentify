import { postModel } from "./post.model.js";

const model = new postModel();

export class postController {
  getAll = async (req, res) => {
    try {
      const posts = await model.getAllPost();
      if (!posts) {
        return res
          .status(400)
          .send({ success: false, message: "No post found" });
      }
      res
        .status(200)
        .send({ success: true, message: "Found all posts", posts });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  getById = async (req, res) => {
    const id = req.params.id;
    try {
      if (id) {
        const post = await model.getPostById(id);
        if (!post) {
          return res
            .status(400)
            .send({ success: false, message: "Post not found" });
        }
        res.status(200).send({ success: true, message: "Post found", post });
      }
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  getUserPost = async (req, res) => {
    const userId = req.params.userId;
    try {
      if (userId) {
        const userPosts = await model.getPostByUserId(userId);
        if (!userPosts) {
          return res
            .status(400)
            .send({ success: false, message: "Post not found" });
        }
        res
          .status(200)
          .send({ success: true, message: "User post found", userPosts });
      }
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  createUserPost = async (req, res) => {
    const userId = req.user.userId;
    const { caption, imageUrl } = req.body;
    try {
      const post = await model.createPost(caption, imageUrl, userId);
      if (!post) {
        return res.status(400).send({
          success: false,
          message: "Error occurred while creating the post",
        });
      }
      res
        .status(200)
        .send({ success: true, message: "Post created successfully", post });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  deletePost = async (req, res) => {
    const userId = req.user.userId;
    const id = req.params.id;
    try {
      if (userId && id) {
        const post = await model.deletePostById(id, userId);
        if (!post) {
          return res.status(400).send({
            success: false,
            message:
              "Post does not exist or try signin with same account to delete post",
          });
        }
        res
          .status(200)
          .send({ success: true, message: "Post deleted successfully", post });
      }
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  updatePost = async (req, res) => {
    const userId = req.user.userId;
    const id = req.params.id;
    const { caption, imageUrl } = req.body;
    try {
      if (userId && id) {
        const post = await model.updatePostById(id, userId, caption, imageUrl);

        if (!post) {
          return res.status(400).send({
            success: false,
            message:
              "Post does not exist or try signin with same account to update post",
          });
        }
        res
          .status(200)
          .send({ success: true, message: "Post updated successfully", post });
      }
    } catch (error) {
      console.log(error);

      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };
}
