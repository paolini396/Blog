import Post from '../models/post';

interface CreatePostDTO {
  title: string;

  image: string;

  description: string;

  text: string;

  date: Date;
}

class PostsRepository {
  private posts: Post[];

  constructor() {
    this.posts = [];
  }

  public all(): Post[] {
    return this.posts;
  }

  public create({
    title,
    image,
    description,
    text,
    date,
  }: CreatePostDTO): Post {
    const post = new Post({ title, image, description, text, date });

    this.posts.push(post);

    return post;
  }
}

export default PostsRepository;
