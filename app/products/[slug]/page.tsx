import { getAllProducts } from "@/lib/query"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const Product = async ({params}: {params: {slug:string}}) => {

  const products = await getAllProducts()

  const product = products.find((p) => p.slug === params.slug) || null;

  return (
    <div>
      {
        product && (
          <>
          <div>
            image and details
          </div>
          <div>
            other images and quantity
          </div>
          <div>
            name and reviews
          </div>
          <div>
            specs
          </div>
          <div>
            images
          </div>
          <div>
            ratings
          </div>
          <div>
            reviews
          </div>
          </>
          
        )
      }
      </div>
  )
}

export default Product