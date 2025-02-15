import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption:{
        type: String,
    },
    imageURL:{
        type: String,
        required: true
    },
    like:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    creater:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const postModel = mongoose.model('Post', postSchema);

export default postModel;