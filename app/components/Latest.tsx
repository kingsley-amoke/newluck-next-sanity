
import { getCategories, getLatestProducts } from "@/lib/query";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./ProductCard";




export const NewestProduct = async () => {
  const data = await getLatestProducts();


 
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/products">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        {
          data && data.map(product => (
            
            <ProductCard product={product} key={product._id}/>
          ))
          
        } 
        </div>
      </div>
    </div>
  );
};
