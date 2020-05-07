import Post from '../models/post';

interface CreatePostDTO {
  title: string;

  image: string;

  description: string;

  text: string;
}

class PostsRepository {
  private posts: Post[];

  constructor() {
    this.posts = [];
  }

  public all(): Post[] {
    return this.posts;
  }

  public create({ title, image, description, text }: CreatePostDTO): Post {
    const post = new Post({ title, image, description, text });

    this.posts.push(post);

    return post;
  }
}

export default PostsRepository;
