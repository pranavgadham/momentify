//id,userid,postid,content
const comments = [];

export class commentModel {
    getComments = (postId) => {
        const postComments = comments.filter(c => c.postId == postId);
        return postComments;
    }

    postComment = (userId,postId,content) => {
        const comment = {
            id: Date.now(),
            userId: userId,
            postId: postId,
            content: content
        }
        comments.push(comment);
        return comment;
    }

    deleteComment = (id,userId) => {
        const index = comments.findIndex( c => c.id == id && c.userId == userId );
        if(index != -1){
            const deletedComment = comments.splice(index,1)[0];
            return deletedComment;
        }
        return null
    }

    updateComment = (id,userId,content) => {
        const comment = comments.find(c => c.id == id && c.userId == userId);
        if(comment){
            comment.content = content
            return comment;
        }
        return null;
    } 
}