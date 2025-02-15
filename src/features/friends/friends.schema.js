import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    reciver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status:{
        type: String,
        enum: ['pending', 'accepted', 'rejected'], 
        default: 'pending'
    }
});

export default friendModel = mongoose.model('Friends', friendSchema);