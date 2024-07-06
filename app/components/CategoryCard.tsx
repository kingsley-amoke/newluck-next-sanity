import { category } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category, styles }: { category: category, styles?:string }) => {
  return (
    <div className={`${styles} relative`}>
      <Link href={`categories/${category.slug}`}>
        <div className="lg:border p-1 md:p-2 absolute right-1 md:right-4 top-1 md:top-2 bg-gray-600 hover:bg-gray-800 rounded-sm">
          <h2 className="text-sm md:text-base capitalize font-bold text-white font-serif">
            {category.name}
          </h2>
        </div>
        <Image
          src={category.image}
          alt={category.name}
          width={900}
          height={600}
          className="w-full h-full"
        />
      </Link>
    </div>
  );
};

export default CategoryCard;
