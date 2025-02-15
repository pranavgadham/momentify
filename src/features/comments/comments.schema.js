import { compare } from "bcrypt";
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    comment:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
});

const commentModel = mongoose.model('Comment', commentSchema);
export default commentModel;