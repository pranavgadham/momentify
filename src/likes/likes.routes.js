import express from 'express';

const likeRoutes = express.Router();

likeRoutes.get('/:postId');
likeRoutes.get('/toggle/postId');

export default likeRoutes;