import Comment from "./comments.schema.js";

export class commentModel {
  getComments = async (postId) => {
    try {
      const comments = await Comment.find({ post: postId });
      return comments;
    } catch (error) {
      console.log(error);
    }
  };

  postComment = async (userId, postId, content) => {
    try {
      const comment = new Comment({
        user: userId,
        post: postId,
        comment: content,
      });
      return await comment.save();
    } catch (error) {
      console.log(error);
    }
  };

  deleteComment = async (id, userId) => {
    try {
      const comment = await Comment.findOne({ _id: id, user: userId });
      if (comment) {
        await Comment.findByIdAndDelete(id);
      }
      return comment;
    } catch (error) {
      console.log(error);
    }
  };

  updateComment = async (id, userId, content) => {
    try {
      const comment = await Comment.findOne({ _id: id, user: userId });
      if (comment) {
        comment.comment = content;
        return await comment.save();
      }
    } catch (error) {
      console.log(error);
    }
  };
}
