import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


//calculate procuct ratings

export const calculateRatings = (ratingsArray: Array<number>) => {
  if (!ratingsArray || ratingsArray.length === 0) {
    return 0;
  }

  const sum = ratingsArray.reduce((acc, curr) => acc + curr, 0);
  const average = sum / ratingsArray.length;

  return Math.ceil(average);
}

//format product price

export const productPrice = new Intl.NumberFormat('en-NG', {
  currency: 'NGN',
  style: 'currency'
})