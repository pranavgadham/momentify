import express from 'express';

const commentRoutes = express.Router();

commentRoutes.get('/:id');
commentRoutes.post('/:id');
commentRoutes.delete('/:id');
commentRoutes.put('/:id');

export default commentRoutes;