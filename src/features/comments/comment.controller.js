import { commentModel } from "./comments.model.js";

const model = new commentModel();

export class commentController {
    comment = (req,res) => {
        const postId = req.params.id;
        const userId = req.user.userId;
        const content = req.body.content;
        try {
            const comment = model.postComment(userId,postId,content);
            if(!comment){
                return res.status(400).send("Error occurred while commenting");
            }
            res.status(200).send({message:"Commented successfully",comment})
        } catch (error) {
            res.status(500).send("Internal server error");
        }
    }

    getComments = (req,res) => {
        const postId = req.params.id;
        try {
            const comments = model.getComments(postId);
            if(!comments){
                return res.status(400).send("Post not found");
            }
            res.status(200).send(comments);
        } catch (error) {
            res.status(500).send("Internal server error");
        }
    }

    deleteComment = (req,res) => {
        const id = req.params.id;
        const userId = req.user.userId;
        try {
            const deletedComment = model.deleteComment(id,userId);
            if(!deletedComment){
                return res.status(400).send("Error while deleting comment");
            }
            res.status(200).send({message:"Comment deleted",deletedComment});
        } catch (error) {
            res.status(500).send("Internal server error");
        }
    }

    updateComment = (req,res) => {
        const id = req.params.id;
        const userId = req.user.userId;
        const content = req.body.content;
        try {
            const updatedComment = model.updateComment(id,userId,content);
            if(!updatedComment){
                return res.status(400).send("Error while deleting comment");
            }
            res.status(200).send({message: "Updated successfully",updatedComment});
        } catch (error) {
            res.status(500).send("Internal server error");
        }
    }
}