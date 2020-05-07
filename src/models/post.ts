import { uuid } from 'uuidv4';

class Posts {
  id: string;

  title: string;

  image: string;

  description: string;

  text: string;

  date: Date;

  constructor({ title, image, description, text, date }: Omit<Posts, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.image = image;
    this.description = description;
    this.text = text;
    this.date = date;
  }
}

export default Posts;
