import express from "express";
import { likeController } from "./likes.controller.js";

const likeRoutes = express.Router();
const controller = new likeController();

likeRoutes.get("/:id", controller.getLikes);
likeRoutes.post("/toggle/:id", controller.toggel);

export default likeRoutes;
