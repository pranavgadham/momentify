import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { jwtAuth } from './src/middleware/jwtAuth.js';
import commentRoutes from './src/comments/comments.routes.js';
import likeRoutes from './src/likes/likes.routes.js';
import postRoutes from './src/post/post.routes.js';
import userRoutes from './src/users/user.routes.js';

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
dotenv.config();
app.use(express.json());

// --------------Routes---------------------
app.use('/api',userRoutes);
app.use('/api/posts',jwtAuth,postRoutes);
app.use('/api/comments',jwtAuth,commentRoutes);
app.use('/api/likes',jwtAuth,likeRoutes);



export default app;