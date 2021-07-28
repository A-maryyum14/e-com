import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";
import {CartItem} from '../models';
import CartProduct from "./CartProduct";

interface Props {
  cart: CartItem[];
  isCartOpen: boolean;
  closeCart: () => void;
  resetCart: () => void;
}

export default function CartAside({cart, isCartOpen, closeCart, resetCart}: Props) {
  const [prices, setPrices] = useState({});
  
  function setProductPrice(id: number, price: number) {
    console.log(id, price);
    console.log(prices, {...prices, [id]: price});
    setPrices((state) => ({...state, [id]: price}));
  }
  
  return (
    <Transition appear show={isCartOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10" onClose={closeCart}>
        <div className="min-h-screen text-right">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="inline-block h-screen max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl">
              <div className="flex items-center justify-between">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 py-2">Cart</Dialog.Title>
                <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 focus:outline-none" onClick={closeCart}>
                  <XIcon className="h-4 w-4"/>
                </button>
              </div>
              <div>
                <div className="grid gap-x-4 mb-4" style={{gridTemplateColumns: 'auto auto auto'}}>
                  <div className="font-semibold px-1 py-2 text-left">Items</div>
                  <div className="font-semibold text-center px-1 py-2">Quantity</div>
                  <div className="font-semibold text-right px-1 py-2">Price ($)</div>
                  
                  {cart.map((product) => <CartProduct key={product.id} {...product} setProductPrice={setProductPrice} />)}

                  <div className="col-span-3 h-px bg-gray-300 my-4"></div>

                  <div className="col-span-2 px-1 py-2 font-semibold">Total</div>
                  <div className="font-semibold text-right px-1 py-2">{(Object.values(prices).reduce((a: number, v: any) => a + v, 0) as number).toFixed(2)}</div>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <button className="border border-black rounded py-3 px-7 focus:outline-none hover:bg-gray-100" onClick={resetCart}>Clear Cart</button>
                  <button className="bg-gray-900 text-gray-200 rounded py-3 px-7 focus:outline-none hover:bg-gray-800">Check Out</button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}