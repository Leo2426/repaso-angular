export class Product {
  id: string;
  title: string;
  description: string;
  photoUrl: string;
  price: number;
  bundleId: string;
  rating: number;

  constructor() {
    this.id = '';
    this.title = '';
    this.description = '';
    this.photoUrl = '';
    this.price = 0;
    this.bundleId = '';
    this.rating = 0;
  }
}

