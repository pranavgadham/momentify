import express from "express";
import { postController } from "./post.controller.js";

const postRoutes = express.Router();
const controller = new postController();

postRoutes.get("/all", controller.getAll);
postRoutes.get("/:id", controller.getById);
postRoutes.get("/", controller.getUserPost);
postRoutes.post("/", controller.createUserPost);
postRoutes.delete("/:id", controller.deletePost);
postRoutes.put("/:id", controller.updatePost);

export default postRoutes;
