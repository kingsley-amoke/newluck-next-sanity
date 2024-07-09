export type simplifieProduct = {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    quantity: number;
    variants?: string[];
    
  }
  
  export type fullProduct = {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
    quantity: number;
    variants: string[];
    reviews: review[];
    ratings: rating[];
  }

  export type HeroImage = {
    name: string;
    "url": string;
  }

  export type category = {
    _id: string;
    name: string;
    slug: string;
    products: simplifieProduct[];
    image: string;
  }

  export type review = {
name: string;
review: string;
user: string
  }

  export type rating = {
    rating: string;
    user: string
  }