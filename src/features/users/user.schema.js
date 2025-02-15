import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true,
        default:'UnKnown'
    },
    avatar:{
        type: String,
        required: true,
        default:''
    },
    friends:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Friends'
    }],
    tocken:[{
        type: String,
        required: true
    }]
});

const User = mongoose.model('User', userSchema);

export default User;