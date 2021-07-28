import React from "react";
import { useEffect, useState } from "react"
import { ProductItem } from "../models";

interface Props {
    id: number;
    quantity: number;
    setProductPrice: (id: number, price: number) => void;
}

export default function CartProduct({id, quantity, setProductPrice}: Props) {
    let [product, setProduct] = useState<ProductItem>();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setProductPrice(id, data.price * quantity);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="truncate" title={product?.title}>{product?.title}</div>
            <div className="text-center px-1 py-2">{quantity}</div>
            <div className="text-right px-1 py-2">{(product?.price ?? 0) * quantity}</div>
        </>
    )
} 