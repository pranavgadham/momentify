import express from "express";
import { likeController } from "./likes.controller.js";

const likeRoutes = express.Router();
const controller = new likeController();

likeRoutes.post("/:postId", controller.like);
likeRoutes.get("/:postId", controller.getLikes);
likeRoutes.get("/toggle/:postId", controller.toggel);

export default likeRoutes;
