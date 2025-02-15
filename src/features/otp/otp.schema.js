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

const otpModel = mongoose.model('Otp', otpSchema);

export default otpModel;
    