import CategoryPage from '@/app/components/CategoryPage'
import EmptyProductPage from '@/app/components/EmptyProductPage'
import Navbar from '@/app/components/Navbar'
import { getCategories } from '@/lib/query'
import React from 'react'

const Category = async ({params} : {params: {slug:string}}) => {

  const categories = await getCategories()

  const category = categories.find((c) => c.slug === params.slug)!;
  return (
    <div className='w-full'>
      {
category?.products ?(

  <CategoryPage category={category}/>
):(
  <EmptyProductPage />
)
      }
    </div>
  )
}

export default Category