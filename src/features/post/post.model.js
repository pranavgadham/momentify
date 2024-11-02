//id,userid,caption,imageURL
const posts = [];
export class postModel {
  getAllPost = () => {
    return posts;
  };

  getPostById = (id) => {
    const post = posts.find((p) => p.id == id);
    return post;
  };

  getPostByUserId = (userId) => {
    const usersPost = posts.filter((p) => p.userId == userId);
    return usersPost;
  };

  createPost = (caption, imageUrl, userId) => {
    const post = {
      id: Date.now(),
      userId: userId,
      caption: caption,
      imageUrl: imageUrl,
    };
    posts.push(post);
    return post;
  };

  deletePostById = (id, userId) => {
    const index = posts.findIndex((p) => p.id == id && p.userId == userId);
    if (index !== -1) {
      const deletedPost = posts.splice(index, 1)[0];
      return deletedPost;
    }
    return null;
  };

  updatePostById = (id, userId, caption, imageUrl) => {
    const post = posts.find((p) => p.id == id && p.userId == userId);

    if (post) {
      if (caption !== undefined) post.caption = caption;
      if (imageUrl !== undefined) post.imageUrl = imageUrl;
      return post;
    }
    return null;
  };
}
