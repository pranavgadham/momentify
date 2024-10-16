import express from 'express';

const postRoutes = express.Router();

postRoutes.get('/all');
postRoutes.get('/:id');
postRoutes.get('/:');
postRoutes.post('/:');
postRoutes.delete('/:id');
postRoutes.put('/:id');

export default postRoutes;