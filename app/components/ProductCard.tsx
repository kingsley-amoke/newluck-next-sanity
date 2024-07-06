import { simplifieProduct } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: simplifieProduct }) => {
  return (
    <div key={product._id} className="group relative">
      <Link href={`/products/${product.slug}`} key={product._id}>
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 relative">
          <Image
            src={product.imageUrl}
            alt="Product image"
            className="w-full h-full object-cover lg:h-full lg:w-full"
            width={300}
            height={300}
          />
          <div className="absolute top-2 right-2 p-2 text-white bg-black text-sm font-semibold">
            In-Stock ({product.quantity})
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 font-bold">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-900 font-extralight">
              {product.categoryName}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
