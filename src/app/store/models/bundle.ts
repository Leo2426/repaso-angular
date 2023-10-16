import {Product} from "./product";

export class Bundle {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  rating: number;
  products: Product[];

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.photoUrl = '';
    this.price = 0;
    this.rating = 0;
    this.products = [];
  }
}
