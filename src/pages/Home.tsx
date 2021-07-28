import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProductItem } from '../models'

interface Props {
  addToCart: (id: number) => void;
}

function HomePage({addToCart}: Props) {
  let [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
          return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  return (
    <div className="p-8">
      <div className="container max-w-3xl mx-auto space-y-4">
        <div className="gap-4 grid grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded p-6 space-y-2 flex flex-col">
              <div className="border border-gray-200 rounded py-2 px-2">
                <img className="object-scale-down h-48 w-full" src={product.image} />
              </div>
              <div className="text-gray-800 text-center flex-grow">
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </div>
              <div className="text-red-600 font-semibold text-center">{product.price}$</div>
              <button className="border border-black rounded text-sm font-semibold py-2 w-full hover:bg-gray-100 focus:outline-none" onClick={() => addToCart(product.id)}>
                Add to cart
                </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
