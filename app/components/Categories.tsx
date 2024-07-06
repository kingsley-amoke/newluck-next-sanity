import { getCategories } from "@/lib/query";
import Image from "next/image";
import React from "react";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="my-10 flex justify-center items-center w-full">
      <div className="grid grid-cols-2 grid-rows-4 gap-5">
        <div className="col-span-full row-span-2">
          <Image src={categories[0].image} alt="rr" width={900} height={420} className="w-full h-full"/>
        </div>
        <div >
          <Image src={categories[2].image} alt="rr" width={400} height={220} className="w-full h-full"/>
        </div>
        <div >
          <Image src={categories[2].image} alt="rr" width={400} height={50} className="w-full h-full"/>
        </div>
        <div> 
          <Image src={categories[0].image} alt="rr" width={420} height={50} className="w-full h-full"/>
        </div>
        <div >
          <Image src={categories[0].image} alt="rr" width={420} height={220} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
