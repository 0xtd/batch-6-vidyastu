import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";

const ProductCard = ({ title, description, discountedPrice, originalPrice, imageUrl  }) => {
  return (
    <div className='container mx-auto'>
      <div
        className='w-[300px] h-[650px] border border-zinc-500 flex flex-col items-center p-2'
      >
        <img src={imageUrl} alt={title} className='w-[300px] h-[200px]'/>
        <h2 className='text-2xl font-bold uppercase mt-2'>{title}</h2>
        <p className='text-zinc-500'>{description}</p>
        <p className='flex flex-row my-3 text-xl'>Discounted Price:{" "}
          <span
            className='flex flex-row items-center'
          >
            <FaIndianRupeeSign /> {discountedPrice}
          </span>
        </p>
        <p className='flex flex-row my-3 text-lg text-zinc-500'>Original Price:{" "}
          <span
            className='flex flex-row items-center line-through'
          >
            <FaIndianRupeeSign /> {originalPrice}
          </span>
        </p>
        <div
          className='flex flex-row gap-10 '
        >
          <button className='bg-yellow-300 p-3 cursor-pointer'>Add to Cart</button>
          <button className='bg-amber-500 p-3 cursor-pointer'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard