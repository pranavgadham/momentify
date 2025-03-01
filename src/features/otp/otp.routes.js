import { Router } from "express";
import OtpController from "./otp.controller.js";

const otpRouter = Router();
const controller = new OtpController();

otpRouter.post('/reset-password',controller.resetPassword);
otpRouter.post('/verify',controller.verify);
otpRouter.post('/send',controller.send);


export default otpRouter;