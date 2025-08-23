import React from 'react'
import ProductCard from '../components/ProductCard'


const Shopping = () => {
  return (
    <div
      className='flex flex-col items-center justify-center'
    >
      <h1 className='text-2xl my-3 font-black'>Shopping Page</h1>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6'
      >
        <ProductCard 
          imageUrl={'https://media.istockphoto.com/id/949118068/photo/books.jpg?s=2048x2048&w=is&k=20&c=84QzSRpNc21wzXu5K7t7z0lSUQ93qIFZOmS84JKdvnI='}
          title={'Book'}
          description={'Text book'}
          discountedPrice={'219'}
          originalPrice={'355'}
        />
        <ProductCard 
          imageUrl={'https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=2048x2048&w=is&k=20&c=ToF4ypeort99bztOWcUOCmlzyPIHkWyVJEDAypeh6vc='}
          title={'Laptop'}
          description={'Lenovo Laptop'}
          discountedPrice={'21999'}
          originalPrice={'35555'}
        />
      </div>
    </div>
  )
}

export default Shopping