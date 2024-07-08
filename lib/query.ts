//get hero images

import { client } from "./sanity";
import { HeroImage, category, fullProduct, simplifieProduct } from "./types";

export async function getHeroImages(): Promise<HeroImage[]> {
    const query = `*[_type == 'hero'][] | order(_createdAt desc) {
    name,
    "url": image.asset->url
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

//get all products

export async function getAllProducts(): Promise<fullProduct[]> {
    const query = `*[_type == 'product'][] | order(_createdAt desc) {
      _id,
      price,
      name,
      quantity,
      variants,
      description,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
      "reviews": reviews[]->{
      name,
      review,
      "user": user->name
      },
      "ratings": ratings[]->{
      rating,
      "user": user->name
      }
      
    }`;

    try {
      const data = await client.fetch(query);
  
      return data;
    } catch (error) {
      console.error(error);
      return []
    }
  
   
  }

  //get latest products

  export async function getLatestProducts(): Promise<simplifieProduct[]> {
    const query = `*[_type == 'product'][0...9] | order(_createdAt desc) {
      _id,
      price,
      name,
      quantity,
      variants,
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
     _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "products": products[]->{
      _id
      }
    }`;

    try {
      
      const data = await client.fetch(query);
    
      return data;
    } catch (error) {
      console.log(error);
      return []
    }
  
  }

  // const likeProduct = async() => {
  //   const data = await client.patch(id)
  // }
