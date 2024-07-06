import React from 'react'
import Hero from './components/Hero'
import { NewestProduct } from './components/Latest';

export const dynamic = "force-dynamic";

const page = () => {
  return (
    <div className="dark:bg-black bg-white pb-6 sm:pb-8 lb:pb-12">
      <Hero />
      <NewestProduct />
    </div>
  )
}

export default page