import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status:{
        type: String,
        enum: ['pending', 'accepted', 'rejected'], 
        default: 'pending'
    }
});

const Friend = mongoose.model('Friends', friendSchema);
export default Friend;