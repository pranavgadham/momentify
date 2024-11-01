import { likeModel } from "./likes.model.js";

const model = new likeModel();

export class likeController {
  like = (req, res) => {
    const userId = req.user.userId;
    const postId = req.params.postId;
    try {
      const like = model.likePost(postId, userId);
      if (!like) {
        res.status(400).send("Error while liking the post");
      }
      res.status(200).send({ message: "Liked the post", like });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };

  getLikes = (req, res) => {
    const postId = req.params.postId;
    try {
      const users = model.getLikes(postId);
      if (!users) {
        res.status(400).send("Post not found");
      }
      res.status(200).send(users);
    } catch {
      res.status(500).send("Internal server error");
    }
  };

  toggel = (req, res) => {
    const userId = req.user.userId;
    const postId = req.params.postId;
    try {
      const like = model.toggelLikeStatus(postId, userId);
      if (!like) {
        res.status(400).send("Post not found");
      }
      res
        .status(200)
        .send({ message: "Toggeled the like status successfully", like });
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
}
