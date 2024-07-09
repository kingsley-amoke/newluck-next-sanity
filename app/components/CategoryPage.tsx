import { category } from '@/lib/types'
import React from 'react'
import ProductCard from './ProductCard'

const CategoryPage = ({category} : {category: category}) => {



  return (

    

    <div className=' mx-5 my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        <ProductCard product={category.products[0]} />

    </div>
  )
}

export default CategoryPage