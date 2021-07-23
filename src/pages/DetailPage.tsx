import React from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { ShareIcon } from '@heroicons/react/outline';
import { useParams } from 'react-router-dom';

export default function detailpage() {
    let { id } = useParams<{ id?: string }>();

    console.log(id);

    return (
        <div className="w-full p-8 space-x-4 flex items-start justify-evenly">
            <div>image</div>
            <div className="space-y-4">
                <div className="font-semibold">Name
                    <div></div>
                </div>
                <div className="font-semibold">Price
                    <div></div>
                </div>
                <div>
                    <label className="font-semibold pr-4">Quantity</label>
                    <input type="number" name="Quantity" className="border border-black rounded pl-3 px-1 py-3 w-16" />
                </div>
                <button className="bg-gray-900 text-gray-200 rounded py-3 w-96 rounded hover:text-gray-400">Add to Cart</button>
                <div className="font-semibold">Description</div>
                <div>
                    <ul>
                        <li>Size: </li>
                        <li>Color: </li>
                        <li>Type: </li>
                        <li>Other</li>
                    </ul>
                </div>
                <div className="flex items-center justify-evenly pt-10">
                    <button className="flex items-center space-x-2">
                        <label>Add to wish list</label>
                        <HeartIcon className="h-6 w-6" />
                    </button>
                    <button className="flex items-center space-x-2">
                        <label>Share</label>
                        <ShareIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}