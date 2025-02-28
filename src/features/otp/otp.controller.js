import OtpModel from "./otp.model.js"

const moduel = new OtpModel();
export default class OtpController {
    resetPassword = async (req,res) => {
        const userId = req.cookies.userId;
        const {password} = req.body;
        try{
            const result = await moduel.resetPassword(userId,password);
            if(result){
                return res.status(200).send({
                    success: true,
                    message: "Password reset successfully"
                });
            }else{
                return res.status(400).send({
                    success: false,
                    message: "User not found"
                });
            }
        }catch(error){
            res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }

    }

    verify = async (req,res) =>{
        try {
            const userId = req.cookies.userId;
            const {otp} = req.body;
            const result = await moduel.verify(userId,otp);
            if(result){
                return res.status(200).send({
                    success: true,
                    message: "OTP verified successfully"
                });
            }
            res.status(400).send({
                success: false,
                message: "OTP Missmatch"
            });
            
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Internal server error"
            });   
        }
    }

    send = async (req,res) => {
        try {
            const {email} = req.body;
            const result = await moduel.send(email);
            if(result){
                res.cookie("userId",result.userId,{ httpOnly: true, maxAge: 5 * 60 * 1000 });
                return res.status(200).send({
                    success: true,
                    message: "OTP sent successfully"
                });
            }else{
                return res.status(400).send({
                    success: false,
                    message: "User not found"
                });
            }
        } catch (error) {
            res.status(500).send({
                success: false,
                message: "Internal server error"
            });
        }
    }
}