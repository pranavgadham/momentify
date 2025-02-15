import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    otp:{
        type: String,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    expiresAt:{
        type: Date,
        required: true
    }
});

export default otpModel = mongoose.model('Otp', otpSchema);
    