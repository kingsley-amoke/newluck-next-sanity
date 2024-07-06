import React from 'react'
import Hero from './components/Hero'
import { NewestProduct } from './components/Latest';
import { getHeroImages } from '@/lib/query';
import Categories from './components/Categories';

export const dynamic = "force-dynamic";

const page = async() => {


  const data = await getHeroImages();


  return (
    <div className="dark:bg-black bg-white pb-6 sm:pb-8 lb:pb-12">
      <Hero image={data}/>
      <Categories />
      <NewestProduct />
    </div>
  )
}

export default page