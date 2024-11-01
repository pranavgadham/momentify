import { postModel } from "./post.model.js";

const model = new postModel();

export class postController {
  getAll = (req, res) => {
    try {
      const posts = model.getAllPost();
      res.status(200).send(posts);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

  getById = (req, res) => {
    const id = req.params.id;
    try {
      if (id) {
        const post = model.getPostById(id);
        if (!post) {
          return res.status(400).send("Post not found");
        }
        res.status(200).send(post);
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

  getUserPost = (req, res) => {
    const userId = req.user.userId;
    try {
      if (userId) {
        const userPosts = model.getPostByUserId(userId);
        if (!userPosts) {
          return res.status(400).send("Post not found");
        }
        res.status(200).send(userPosts);
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

  createUserPost = (req, res) => {
    const userId = req.user.userId;
    const { caption, imageUrl } = req.body;
    try {
      const post = model.createPost(caption, imageUrl, userId);
      if (!post) {
        return res.status(400).send("Error occurred while creating the post");
      }
      res.status(200).send({ message: "Post created successfully", post });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

  deletePost = (req, res) => {
    const userId = req.user.userId;
    const id = req.params.id;
    try {
      if (userId && id) {
        const post = model.deletePostById(id, userId);
        if (!post) {
          return res
            .status(400)
            .send(
              "Post does not exist or try signin with same account to delete post"
            );
        }
        res.status(200).send({ message: "Post deleted successfully", post });
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

  updatePost = (req, res) => {
    const userId = req.user.userId;
    const id = req.params.id;
    const { caption, imageUrl } = req.body;
    try {
      if (userId && id) {
        const post = model.updatePostById(id, userId, caption, imageUrl);

        if (!post) {
          return res
            .status(400)
            .send(
              "Post does not exist or try signin with same account to delete post"
            );
        }
        res.status(200).send({ message: "Post updated successfully", post });
      }
    } catch (error) {
      console.log(error);

      res.status(500).send("Internal server error");
    }
  };
}
