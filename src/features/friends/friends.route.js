import { Router } from "express";
import friendController from "./friends.controller.js";

const friendRoute = Router();

const controller = new friendController();

friendRoute.get("/get-friends/:userld", controller.getFriends);
friendRoute.get("/get-pending-requests", controller.getPendingRequests);
friendRoute.post("/toggle-friendship/:friendId", controller.toggleFriendship);
friendRoute.post("/response-to-request/:friendId", controller.responseToRequest);
friendRoute.post("/send-request/:reciverId", controller.sendRequest);

export default friendRoute;