import { startOfHour } from 'date-fns';

import Post from '../models/post';
import PostsRepository from '../repositories/PostsRepository';

interface RequestDTO {
  title: string;

  image: string;

  description: string;

  text: string;

  date: Date;
}

class CreatePostServie {
  private postsRepository: PostsRepository;

  constructor(postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  public execute({ title, image, description, text, date }: RequestDTO): Post {
    const postDate = startOfHour(date);

    const post = this.postsRepository.create({
      title,
      image,
      description,
      text,
      date: postDate,
    });

    return post;
  }
}

export default CreatePostServie;
