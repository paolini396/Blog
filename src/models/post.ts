import { uuid } from 'uuidv4';

class Posts {
  id: string;

  title: string;

  image: string;

  description: string;

  text: string;

  constructor({ title, image, description, text }: Omit<Posts, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.image = image;
    this.description = description;
    this.text = text;
  }
}

export default Posts;
