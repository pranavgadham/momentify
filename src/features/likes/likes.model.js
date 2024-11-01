//id,userid,postid
const likes = [];

export class likeModel {
  getLikes = (postId) => {
    const postLikes = likes.filter((l) => l.postId == postId);
    return postLikes;
  };

  likePost = (postId, userId) => {
    const like = {
      id: Date.now(),
      postId: postId,
      userId: userId,
      status: true,
    };
    likes.push(like);
    return like;
  };

  toggelLikeStatus = (postId, userId) => {
    const like = likes.find((l) => l.postId == postId && l.userId == userId);
    if (like) {
      like.status = !like.status;
    }
    return like;
  };
}
