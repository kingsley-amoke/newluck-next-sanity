"use client";

import { fullProduct } from "@/lib/types";
import { calculateRatings, productPrice } from "@/lib/utils";
import { ArrowLeft, ArrowRight, HeartIcon, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Product = ({ product }: { product: fullProduct }) => {
  const [like, setLike] = useState(false);
  const [qty, setQty] = useState(1);

  const productRating = product?.ratings?.map((rating) =>
    parseFloat(rating.rating)
  )!;

  const averageRating = Array.from(
    { length: calculateRatings(productRating) },
    (value, index) => index
  );

  const allRatings = product.ratings?.length || 0

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full md:w-1/2">
        <div className="mx-5 lg:mx-50 my-10 flex flex-col lg:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <Image
              src={product.imageUrl}
              className="contain-size"
              width={500}
              height={500}
              alt={product.name}
            />
            <div>other images and quantity</div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div>
              <div className="flex justify-between items-center">
                <h2 className="font-bold text-2xl">{product.name}</h2>

                <HeartIcon
                  size={38}
                  fill={like ? "green" : "white"}
                  color="gray"
                  onClick={() => setLike(!like)}
                />
              </div>
              <div className="my-5 flex gap-5 items-center">
                <div className="flex items-center gap-2">
                  { product.ratings && averageRating.map((rating, index) => (
                    <Star color="green" key={index} />
                  ))}
                  ({allRatings})
                </div>
                <Link href="#reviews">Write a review </Link>
              </div>
              <div>
                <p className="font-bold text-xl">
                  {productPrice.format(product.price)}
                </p>
              </div>
            </div>
            <div className="my-5">
              <p>{product.description}</p>
            </div>
            <div className="flex items-center gap-3">
              Qty
              <div className="bg-gray-200 py-2 px-4 flex gap-5 items-center">
                <ArrowLeft
                  color={qty < 2 ? "gray" : "black"}
                  onClick={qty < 1 ? () => {} : () => setQty(qty - 1)}
                />
                {qty}
                <ArrowRight
                  color={qty == product.quantity ? "gray" : "black"}
                  onClick={
                    qty == product.quantity ? () => {} : () => setQty(qty + 1)
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-5">
          <h4 className="font-semibold">Product Specifications</h4>
          <div>
            Colors:{" "}
            {product.variants.map((variant) => (
              <span className="text-md ml-1 font-serif" key={variant}>{variant}</span>
            ))}
          </div>
        </div>
        <div className="mx-5">specs</div>
        <div className="mx-5">images</div>
        <div id="reviews" className="mx-5">
          <h4 className="font-semibold my-5">Ratings and Reviews</h4>
          <div className="flex justify-between">
            {
              product.ratings ? (

                <div>
              <h5>Overall Rating</h5>
              <div className="flex gap-3 my-5">
                <p className="font-semibold text-3xl">{calculateRatings(productRating)}</p>
                <div>

                <div className="flex items-center gap-1">
                  {averageRating.map((rating, index) => (
                      <Star color="green" key={index} />
                    ))}
                  
                    </div>
                    ({product.ratings?.length} {product.ratings?.length > 1 ? "reviews": "review"})
                </div>
              </div>
            </div>
              ) : null
            }
            <div>
              <h5>Rate this product</h5>
              <div className="flex gap-3 my-5">

              <div className="border border-slate-500 p-2 rounded-sm">
                <Star color="gray" size={30} />
                </div>
                <div className="border border-slate-500 p-2 rounded-sm">
                <Star color="gray" size={30} />
                </div>
                <div className="border border-slate-500 p-2 rounded-sm">
                <Star color="gray" size={30} />
                </div>
                <div className="border border-slate-500 p-2 rounded-sm">
                <Star color="gray" size={30} />
                </div>
                <div className="border border-slate-500 p-2 rounded-sm">
                <Star color="gray" size={30} />
                </div>
              </div>
            </div>
          </div>

          <div>
            {product.reviews?.map((review, index) => {
              const userRating = product.ratings.filter(
                (rating) => rating.user === review.user
              );

              const averageRating = Array.from(
                { length: parseInt(userRating[0].rating) },
                (value, index) => index
              );

              return (
                <div className="w-full border border-slate-400 py-2 px-5 rounded-md flex flex-col gap-3 my-7" key={index}>
                  <p className="flex gap-1">
                    {averageRating.map((rating, index) => (
                      <Star color="green" key={index} size={20} />
                    ))}
                  </p>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-base font-semi-bold">{review.review}</p>
                  <p className="text-sm font-thin">
                    Reviewed by{" "}
                    <span className="font-normal">{review.user}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
