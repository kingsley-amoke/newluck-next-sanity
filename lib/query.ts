//get hero images

import { client } from "./sanity";
import { HeroImage, simplifieProduct } from "./types";

export async function getHeroImages(): Promise<HeroImage[]> {
    const query = `*[_type == 'hero'][0...4] | order(_createdAt desc) {
    name,
    "url": image.asset->url
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

//get latest products

export async function getLatestProducts(): Promise<simplifieProduct[]> {
    const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
      _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

  //get all categories

  export async function getCategories(): Promise<category[]> {
    const query = `*[_type == 'category'][] | order(_createdAt desc) {
     
      name,
      products,
      "image": image.asset->url,
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }