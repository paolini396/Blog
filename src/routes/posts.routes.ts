import { Router } from 'express';
import { parseISO } from 'date-fns';

import PostsRepository from '../repositories/PostsRepository';
import CreatePostService from '../services/CreatePostsService';

const postsRouter = Router();
const postsRepository = new PostsRepository();

postsRouter.get('/', (request, response) => {
  const posts = postsRepository.all();

  return response.json(posts);
});

postsRouter.post('/', (request, response) => {
  try {
    const { title, image, description, text, date } = request.body;

    const parsedDate = parseISO(date);

    const createPost = new CreatePostService(postsRepository);

    const post = createPost.execute({
      title,
      image,
      description,
      text,
      date: parsedDate,
    });

    return response.json(post);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default postsRouter;
