//get hero images

import { client } from "./sanity";
import { HeroImage, category, simplifieProduct } from "./types";

export async function getHeroImages(): Promise<HeroImage[]> {
    const query = `*[_type == 'hero'][] | order(_createdAt desc) {
    name,
    "url": image.asset->url
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

//get all products

export async function getAllProducts(): Promise<simplifieProduct[]> {
    const query = `*[_type == 'product'][] | order(_createdAt desc) {
      _id,
      price,
      name,
      quantity,
      variants,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
      "reviews": reviews->{
      name,
      review,
      user->
      },
      "ratings": ratings->{
      rating,
      user->
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
     
      name,
      slug,
      products,
      "image": image.asset->url,
    }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

  // const likeProduct = async() => {
  //   const data = await client.patch(id)
  // }

  //get reviews by reference
// export const getReviewsByReference = async(ref:string)=>{
//   const query = `*[name == 'reviews'][] {
//   reviews,`

//   const data = await client.fetch(query, { ref });

//   console.log(data)
// }

// export const productDetailQuery = (id:string) => {
//   const query = `*[_type == "product" && _id == '${id}']{
//     image{
//       asset->{
//         url
//       }
//     },
//     _id,
//     title, 
//     about,
//     category,
//     destination,
//     postedBy->{
//       _id,
//       userName,
//       image
//     },
//    ratings[]{
//       user,
//       rating
//     },
//     reviews[]{
//       review,
//       _key,
      
//     }
//   }`;

//   const data = client.fetch(query);
//   console.log(data)
// };