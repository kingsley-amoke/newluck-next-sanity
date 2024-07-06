import React from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts, } from "@/lib/query";

const page = async () => {
  const products = await getAllProducts();



  console.log(products[0]);
  return (
    <div className="w-full px-10">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.length > 0 &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};

export default page;
