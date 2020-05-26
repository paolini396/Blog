import { getCustomRepository } from 'typeorm';

import Post from '../models/Post';
import PostsRepository from '../repositories/PostsRepository';

interface RequestDTO {
  author_id: string;
  title: string;
  image: string;
  description: string;
  text: string;
}

class CreatePostServie {
  public async execute({
    author_id,
    title,
    image,
    description,
    text,
  }: RequestDTO): Promise<Post> {
    const postRepository = getCustomRepository(PostsRepository);

    const post = postRepository.create({
      author_id,
      title,
      image,
      description,
      text,
    });

    await postRepository.save(post);

    return post;
  }
}

export default CreatePostServie;
