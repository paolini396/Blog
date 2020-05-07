import { Router } from 'express';

import PostsRepository from '../repositories/PostsRepository';

const postsRouter = Router();
const postsRepository = new PostsRepository();

postsRouter.get('/', (request, response) => {
  const posts = postsRepository.all();

  return response.json(posts);
});

postsRouter.post('/', (request, response) => {
  const { title, image, description, text } = request.body;

  const post = postsRepository.create({ title, image, description, text });

  return response.json(post);
});

export default postsRouter;
