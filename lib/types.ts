export type simplifieProduct = {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
  }
  
  export type fullProduct = {
    _id: string;
    images: any;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
  }

  export type HeroImage = {
    name: string;
    "url": string;
  }

  export type category = {
    name: string;
    products: fullProduct[];
    image: string;
  }