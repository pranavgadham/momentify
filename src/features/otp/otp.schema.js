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
    },
    status:{
        type: String,
        enum: ['pending','verified'],
        default: 'pending'
    }
});

const Otp = mongoose.model('Otp', otpSchema);

export default Otp;
    