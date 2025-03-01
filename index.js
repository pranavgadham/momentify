import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { jwtAuth } from "./src/middleware/jwtAuth.js";
import commentRoutes from "./src/features/comments/comments.routes.js";
import likeRoutes from "./src/features/likes/likes.routes.js";
import postRoutes from "./src/features/post/post.routes.js";
import userRoutes from "./src/features/users/user.routes.js";
import friendRoute from "./src/features/friends/friends.route.js";
import otpRouter from "./src/features/otp/otp.routes.js";
import swaggerUi from 'swagger-ui-express';




const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

// --------------Routes---------------------
app.use("/api/users", userRoutes);
app.use("/api/posts", jwtAuth, postRoutes);
app.use("/api/comments", jwtAuth, commentRoutes);
app.use("/api/likes", jwtAuth, likeRoutes);
app.use("/api/friends", jwtAuth, friendRoute);
app.use("/api/otp", otpRouter);
app.use('/swagger.json', express.static('./swagger.json'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
    swaggerUrl: "/swagger.json"
}));




export default app;
