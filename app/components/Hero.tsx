"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import { getHeroImages } from "@/lib/query";
import { useRef } from "react";

export default async function Hero() {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const data = await getHeroImages();
  console.log(data);
  return (
    <section className=" mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <Carousel 
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      >
            <CarouselContent>
              {data &&
                data.map((image) => (
                
                    <CarouselItem key={image.name}>

                       <Image src={image.url} alt={image.name} width={500} height={500}/>
                    </CarouselItem>
                   
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/phones"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Phones
          </Link>
          <Link
            href="/laptops"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Laptops
          </Link>
          <Link
            href="/accessories"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Accessories
          </Link>
        </div>
      </div>
    </section>
  );
}
