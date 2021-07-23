import React from "react";
import { useEffect, useState } from "react"
import { ProductItem } from "../models";

interface Props {
    id: number;
    quantity: number;
}

export default function CartProduct({id, quantity}: Props) {
    let [product, setProduct] = useState<ProductItem>();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <tr>
            <td className="truncate w-full overflow-hidden">{product?.title}</td>
            <td className="text-center px-1 py-2">{quantity}</td>
            <td className="text-center px-1 py-2">{(product?.price ?? 0) * quantity}</td>
        </tr>
    )
} 