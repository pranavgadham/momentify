import Post from '../post/post.schema.js';
import Comment from '../comments/comments.schema.js';

export class likeModel {

  getLikes = async (id) => {
    try {
      let likes;
      const post = await Post.findById(id).populate('like');
      if (post) {
        likes = post.like;
      } else {
        const comment = await Comment.findById(id).populate('like');
        if (comment) {
          likes = comment.like;
        } else {
          throw new Error('No post or comment found with the given id');
        }
      }
      return likes;
    } catch (error) {
      console.log(error);
    }
  };

  toggelLikeStatus = async (id, userId) => {
    try {
      let entity = await Post.findById(id);
      if (!entity) {
        entity = await Comment.findById(id);
      }
      if (!entity) {
        throw new Error('No post or comment found with the given id');
      }

      const likeIndex = entity.like.indexOf(userId);
      if (likeIndex === -1) {
        entity.like.push(userId);
      } else {
        entity.like.splice(likeIndex, 1);
      }

      await entity.save();
      return entity.like;
    } catch (error) {
      console.log(error);
    }
  };
}
