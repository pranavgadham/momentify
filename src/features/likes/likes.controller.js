import { likeModel } from "./likes.model.js";

const model = new likeModel();

export class likeController {
  getLikes = async(req, res) => {
    const id = req.params.id;
    try {
      const likes = await model.getLikes(id);
      if (!likes) {
        res.status(400).send({success: false, message: "Post or Comment not found"});
      }
      res.status(200).send({success: true, message: "Likes for this post/comment", likes});
    } catch {
      res.status(500).send({success: false, message:"Internal server error"});
    }
  };

  toggel = async(req, res) => {
    const userId = req.user.userId;
    const id = req.params.id;
    try {
      const like = await model.toggelLikeStatus(id, userId);
      if (!like) {
        res.status(400).send({success: false, message:"Post or Comment not found"});
      }
      res
        .status(200)
        .send({success: true, message: "Toggeled the like status successfully"});
    } catch (error) {
      res.status(500).send({success: false, message:"Internal server error"});
    }
  };
}
