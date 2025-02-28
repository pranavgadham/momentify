import FriendModel from "./friends.model.js";

const model = new FriendModel();

export default class friendController{

    getFriends = async (req, res) => {
        const userId = req.params.userId;
        try {
            const friends = await model.getFriends(userId);
            if(!friends){
                return res.status(404).json({success: false, message: "No friends found"});
            }
            res.status(200).json({success: true, message:"Found friends", data: friends});

        } catch (error) {
            res.status(500).json({success: true, message: "Internal server error"});
        }
    };

    getPendingRequests = async (req, res) => {
        const userId = req.user.userId;
        try {
            const pendingRequests = await model.getPendingRequests(userId);

            if(!pendingRequests){
                return res.status(200).json({success: true, message: "No pending requests found"});
            }
            res.status(200).json({success: true, message: "Found pending requests", pendingRequests});
        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"});
        }
    };

    toggleFriendship = async (req, res) => {
        const friendId = req.params.friendId;
        try {
            const result = await model.toggleFriendship(friendId);
            if(!result){
                return res.status(404).json({success: false, message: "Friend not found"});
            }
            res.status(200).json({success: true, message: "Friendship status updated", result});
        } catch (error) {
            res.status(500).json({success: false, message: "Internal server error"});
        }
    };

    responseToRequest = async (req, res) => {
        const friendId = req.params.friendId;
        const status = req.body.status;
        try {
            const result = await model.responseToRequest(friendId,status);
            if(!result){
                return res.status(404).json({success: false, message: "Friend not found"});
            }
            res.status(200).json({success: true, message: "Friendship status updated", result});
            
        } catch (error) {
            console.log(error);
        }
    };

    sendRequest = async (req, res) => {
        const request = await model.createFriendRequest(req.user.userId, req.params.receiverId);
        try{
            if(!request){
                return res.status(404).json({success: false, message: "Error while requesting"});
            }
            return res.status(200).json({success: true, message: "Request sent"});

        }catch(error){
            res.status(500).json({success: false, message: "Internal server error"});
        }

    }

}