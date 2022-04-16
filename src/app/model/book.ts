import {Author} from "./author";


export interface Book{
  id: number;
  title: string;
  genre: Genre;
  price: number;
  amount: number;
  rating: number;
  authorId: number;
  imageUrl: string;
  authorEntity: Author;
}
