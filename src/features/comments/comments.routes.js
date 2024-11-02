import express from 'express';
import { commentController } from './comment.controller.js';

const commentRoutes = express.Router();
const controller = new commentController();

commentRoutes.get('/:id',controller.getComments);
commentRoutes.post('/:id',controller.comment);
commentRoutes.delete('/:id',controller.deleteComment);
commentRoutes.put('/:id',controller.updateComment);

export default commentRoutes;