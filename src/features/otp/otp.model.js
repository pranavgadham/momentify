import sendMail from "../../util/mailSender.js";
import { hashPassword } from "../../util/hashPassword.js";
import Otp from "./otp.schema.js";
import getUserByEmail from "../users/user.model.js";

export default class OtpModel{

    resetPassword = async(userId,password) =>{
        try{
            const otpData = await Otp.findOne({userId: userId, status: 'verified'}).populate('userId');
            if(otpData){
                otpData.userId.password = await hashPassword(password);
                return await otpData.userId.save();
            }
        }catch(err){
            console.log(err);
        }
    }

    verify = async(userId,otp) =>{
        try {
            const otpData = await Otp.findOne({userId: userId, otp, expiresAt: {$gt: new Date()}});
            if(otpData){
                otpData.status = 'verified';
                await otpData.save();
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }

    }

    send = async(email) =>{
        try {
            const otp = Math.floor(100000 + Math.random() * 900000);
            const user  = await getUserByEmail(email);
            if(user){
                const otpData = new Otp({
                    otp,
                    userId: user._id,
                    expiresAt: new Date(new Date().getTime() + 5*60000)
                });
                await sendMail(email,otp);
                return await otpData.save();
            }
        } catch (error) {
            console.log(error);
        }
    }
}