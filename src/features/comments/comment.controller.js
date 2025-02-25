import { commentModel } from "./comments.model.js";

const model = new commentModel();

export class commentController {
  comment = async (req, res) => {
    const postId = req.params.postId;
    const userId = req.user.userId;
    const content = req.body.comment;
    try {
      const comment = await model.postComment(userId, postId, content);
      if (!comment) {
        return res
          .status(400)
          .send({ success: false, message: "Error occurred while commenting" });
      }
      res
        .status(200)
        .send({ success: true, message: "Commented successfully", comment });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  getComments = async (req, res) => {
    const postId = req.params.postId;
    try {
      const comments = await model.getComments(postId);
      if (!comments) {
        return res
          .status(400)
          .send({ success: false, message: "Post not found" });
      }
      res
        .status(200)
        .send({ success: true, message: "Comments found", comments });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  deleteComment = async (req, res) => {
    const commentId = req.params.commentId;
    const userId = req.user.userId;
    try {
      const deletedComment = await model.deleteComment(commentId, userId);
      if (!deletedComment) {
        return res
          .status(400)
          .send({ success: false, message: "Comment not found" });
      }
      res
        .status(200)
        .send({ success: true, message: "Comment deleted", deletedComment });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };

  updateComment = async (req, res) => {
    const commentId = req.params.commentId;
    const userId = req.user.userId;
    const content = req.body.comment;
    try {
      const updatedComment = await model.updateComment(
        commentId,
        userId,
        content
      );
      if (!updatedComment) {
        return res
          .status(400)
          .send({ success: false, message: "Error while deleting comment" });
      }
      res.status(200).send({
        success: true,
        message: "Updated successfully",
        updatedComment,
      });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "Internal server error" });
    }
  };
}
