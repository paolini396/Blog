import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import PostsRepository from '../repositories/PostsRepository';
import CreatePostService from '../services/CreatePostsService';

const postsRouter = Router();

postsRouter.get('/', async (request, response) => {
  const postsRepository = getCustomRepository(PostsRepository);
  const posts = await postsRepository.find();

  return response.json(posts);
});

postsRouter.post('/', async (request, response) => {
  try {
    const { author_id, title, image, description, text } = request.body;

    const createPost = new CreatePostService();

    const post = await createPost.execute({
      author_id,
      title,
      image,
      description,
      text,
    });

    return response.json(post);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default postsRouter;
