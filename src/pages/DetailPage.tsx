import React, { useEffect, useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { ShareIcon } from '@heroicons/react/outline';
import { useParams } from 'react-router-dom';

export default function detailpage() {
    let { id } = useParams<{ id?: string }>();
    const [product, setProduct] = useState<any>();
    console.log(product);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProduct(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="w-full p-8 space-x-4 flex items-start bg-white justify-evenly">
            <div className="h-96 w-80">
                <img src={product?.image}/>
            </div>
            <div className="space-y-6 max-w-md">
                <div className="font-semibold text-lg">{product?.title}</div>
                <div className="flex space-x-4 items-centre justify-between">
                    <div className="font-semibold">${product?.price}</div>
                    <div className="text-sm text-gray-400">{product?.reviews}
                    <button className="text-sm text-gray-400 hover:underline hover:text-gray-900">See all</button>
                    </div>   
                </div>
                <div className="font-semibold">{product?.colour}</div>
                <div className="flex items-center space-x-4">
                    <div className="font-semibold py-2">Size</div>
                    <div className="space-x-2">
                        <button className="border border-gray-700 rounded px-3 py-2 hover:bg-gray-200">S</button>
                        <button className="border border-gray-700 rounded px-3 py-2 hover:bg-gray-200">M</button>
                        <button className="border border-gray-700 rounded px-3 py-2 hover:bg-gray-200">L</button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="font-semibold">Quantity</div>
                    <input type="number" name="Quantity" className="border border-gray-700 rounded py-2 px-3 w-16" />
                </div>
                <button className="bg-gray-900 text-gray-200 rounded py-3 w-96 rounded hover:text-gray-400">Add to Cart</button>
                <div>
                    <div  className="font-semibold text-gray-800 hover:underline">Description</div>
                    <div className="text-sm text-gray-600 py-2">{product?.description}</div>
                    <button className="font-semibold text-gray-800 hover:underline">Delivery & Returns</button>
                </div>
                <div className="flex items-center justify-evenly pt-10">
                    <button className="flex items-center space-x-2 hover:underline">
                        <span>Add to wish list</span>
                        <HeartIcon className="h-6 w-6" />
                    </button>
                    <button className="flex items-center space-x-2 hover:underline">
                        <span>Share</span>
                        <ShareIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}