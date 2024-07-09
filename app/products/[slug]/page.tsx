import Product from '@/app/components/ProductPage';
import { getAllProducts } from '@/lib/query';
import React from 'react'

const page = async({params}: {params: {slug:string}}) => {

  const products = await getAllProducts()

  const product = products.find((p) => p.slug === params.slug)!;


  return (
    <Product product={product}/>
  )
}

export default page