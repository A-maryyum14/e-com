import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { Fragment } from "react";
import {CartItem} from '../models';
import CartProduct from "./CartProduct";

interface Props {
  cart: CartItem[];
  isCartOpen: boolean;
  closeCart: () => void;
  resetCart: () => void;
}

export default function CartAside({cart, isCartOpen, closeCart, resetCart}: Props) {
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
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
              <div>
                <table className="table-auto border-b border-gray-300">
                  <thead className="text-base font-bold">
                    <tr>
                      <th className="w-full px-1 py-2 text-left">Items</th>
                      <th className="text-center px-1 py-2">Quantity</th>
                      <th className="text-center px-1 py-2">Price&nbsp;($)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm space-y-4">
                    {cart.map((product) => <CartProduct key={product.id} {...product} />)}
                  </tbody>
                </table>
                <div className="space-y-4 py-4 text-sm font-semibold">
                  <div className="flex items-center justify-between">
                    <label>Subtotal</label>
                    <div></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label>Tax</label>
                    <div></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label>Voucher Code</label>
                    <input type="code" name="voucher-Code" className="border border-black rounded py-2 px-3 w-24 focus:outline-none" />
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <label>Total</label>
                    <div></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-gray-900 text-gray-200 rounded py-3 px-8 focus:outline-none hover:bg-gray-800" onClick={resetCart}>Clear Cart</button>
                  <button className="border border-black rounded py-3 px-8 focus:outline-none hover:bg-gray-100">Check Out</button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}