import express from 'express'
import { userController } from './user.controller.js';
import { jwtAuth } from '../../middleware/jwtAuth.js';

const controller = new userController();

const userRoutes = express.Router();

userRoutes.post('/signup',controller.signup);
userRoutes.post('/signin',controller.signin);
userRoutes.post('/logout',jwtAuth, controller.logout);
userRoutes.post('/logout-all-devices',jwtAuth, controller.logoutAllDevices);

export default userRoutes;