import Friend from "./friends.schema.js";

export default class FriendModel {

    getFriends = async (userId) => {
        try {
            const friends = await Friend.find({
                $or: [{ sender: userId }, { reciver: userId }],
                status: "accepted"
            })
            
            return friends;
            
        } catch (error) {
            console.log(error);
        }
    };

    getPendingRequests = async (userId) => {
        try {
            const pendingRequest = await Friend.find({
                $or: [{ sender: userId }, { reciver: userId }],
                status: "pending"
            });

            return pendingRequest;
        } catch (error) {
            console.log(error);
        }
    };

    toggleFriendship = async (id) => {
        try {
            const friend = await Friend.findById(id);
            if(friend){
                friend.status = friend.status === "accepted" ? "rejected" : "accepted";
                return await friend.save();
            }
        } catch (error) {
            console.log(error);
        }
    };

    responseToRequest = async (id, status) => {
        try {
            const friend = await Friend.findById(id);
            if(friend){
                friend.status = status;
                return await friend.save();
            }
        } catch (error) {
            console.log(error);
        }
    };

    createFriendRequest = async (sender, reciver) => {
        try{
            const request = new Friend({
                sender: sender,
                reciver: reciver
            })

            return await request.save();
        }catch(error){
            console.log(error);
        }
    }
        
}