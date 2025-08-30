import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'
import axios from 'axios';

const fetchProductData = async () => {
  const res = await axios.get("http://localhost:3000/all-products");
  // console.log(res.data);
  const data = res.data;
  return data;
}

const Shopping = () => {
  const [data, setData] = useState([]);

  const assignData = async () => {
    const fetchedData = await fetchProductData();
    setData(fetchedData);
  }
  useEffect(() => {
    assignData();
  }, []);

  return (
    <div
      className='flex flex-col items-center justify-center'
    >
      <h1 className='text-2xl my-3 font-black'>Shopping Page</h1>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6'
      >
        {data.map((i) => {
          return (
            <ProductCard 
              key={i._id}
              title={i.title}
              description={i.description}
              discountedPrice={i.discountedPrice}
              originalPrice={i.originalPrice}
              imageUrl={i.imageUrl}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Shopping