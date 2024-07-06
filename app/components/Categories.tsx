import { getCategories } from "@/lib/query";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = async () => {
  const categories = await getCategories();

  console.log(categories[0]);

  return (
    <div className="my-10 flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-4 gap-3 lg:gap-5 w-[50rem] h-[30rem] lg:h-[50rem]">
        <CategoryCard
          category={categories[0]}
          styles="col-span-full row-span-2 "
        />

        <CategoryCard category={categories[2]} />

        <CategoryCard category={categories[2]} />

        <CategoryCard category={categories[0]} />

        <CategoryCard category={categories[0]} />
      </div>
    </div>
  );
};

export default Categories;
