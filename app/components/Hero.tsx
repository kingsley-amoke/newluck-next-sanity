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
import Autoplay from "embla-carousel-autoplay";

import { getHeroImages } from "@/lib/query";
import { useRef } from "react";
import { lookup } from "dns";
import { DollarSign, ShieldCheck, Ship } from "lucide-react";

export default function Hero({
  image,
}: {
  image: { name: string; url: string }[];
}) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-10 w-full h-full">
        <div className="flex justify-center items-center flex-4">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full lg:w-[1400px] lg:h-[720px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
            }}
          >
            <CarouselPrevious className="bg-gray-400 z-10 left-5 opacity-60 font-bold" />
            <CarouselNext className="bg-gray-400 z-10 right-5 opacity-60 font-bold" />

            <CarouselContent>
              {image &&
                image.map((image) => (
                  <CarouselItem key={image.name}>
                    <Image
                      src={image.url}
                      alt={image.url}
                      width={1400}
                      height={720}
                      className="contain-size"
                      
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex flex-1 flex-col items-center justify-between gap-8 md:flex-row w-4/5">
          <div className="flex flex-col md:flex-row lg:h-12 w-full lg:divide-x lg:overflow-hidden rounded-lg lg:border">
            <div className="flex w-[80%] lg:w-1/3 items-center justify-start lg:justify-center gap-5">
              <ShieldCheck />
              <div>

              100% Guarantee
              </div>
            </div>
            <div className="flex w-[80%] lg:w-1/3 items-center justify-start lg:justify-center gap-5">
              <Ship />
              <div>

              Free shipping
              </div>
            </div>
            <div className="flex w-[80%] lg:w-1/3 items-center justify-start lg:justify-center gap-5">
              <DollarSign />
              <div>

              Cash on Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
