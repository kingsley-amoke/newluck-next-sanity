import { getCategories } from "@/lib/query";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="my-10 flex justify-center items-center">
     {
      categories.length > 0 && (
        <div className="grid grid-cols-2 grid-rows-4 gap-3 lg:gap-5 w-[50rem] h-[30rem] lg:h-[50rem]">
        <CategoryCard
          category={categories[0]}
          styles="col-span-full row-span-2 "
        />

        <CategoryCard category={categories[1]} />

        <CategoryCard category={categories[2]} />

        <CategoryCard category={categories[1]} />

        <CategoryCard category={categories[2]} />
      </div>
      )
     }
    </div>
  );
};

export default Categories;
