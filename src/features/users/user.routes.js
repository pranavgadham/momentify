import express from 'express'
import { userController } from './user.controller.js';

const controller = new userController();

const userRoutes = express.Router();

userRoutes.post('/signup',controller.signup);
userRoutes.post('/signin',controller.signin);

export default userRoutes;