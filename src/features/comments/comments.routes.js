import express from "express";
import { commentController } from "./comment.controller.js";

const commentRoutes = express.Router();
const controller = new commentController();

commentRoutes.get("/:postId", controller.getComments);
commentRoutes.post("/:postId", controller.comment);
commentRoutes.delete("/:commentId", controller.deleteComment);
commentRoutes.put("/:commentId", controller.updateComment);

export default commentRoutes;
