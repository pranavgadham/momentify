import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import commentRoutes from './src/comments/comments.routes.js';
import likeRoutes from './src/likes/likes.routes.js';
import postRoutes from './src/post/post.routes.js';

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(cookieParser);

// --------------Routes---------------------
app.post('/api/signup',);
app.post('/api/signin',);
app.use('/api/posts',postRoutes);
app.use('/api/comments',commentRoutes);
app.use('/api/likes',likeRoutes);

dotenv.config();

export default app;