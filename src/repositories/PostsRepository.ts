import { EntityRepository, Repository } from 'typeorm';

import Post from '../models/Post';

interface Posts {
  title: string;
  image: string;
  description: string;
  text: string;
}

@EntityRepository(Post)
class PostsRepository extends Repository<Post> {
  public async getPosts(): Promise<Posts[]> {
    const posts = await this.find();

    return posts;
  }
}

export default PostsRepository;
