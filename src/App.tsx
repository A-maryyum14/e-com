import React, { Fragment, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline';
import Header from './components/Header';
import { XIcon } from '@heroicons/react/outline';
import { Dialog, Transition } from '@headlessui/react';

let products = [
  { id: 1, name: 'Blue Shirt - Medium', price: 2, image: 'https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcShxqfanJ0ztwBQz_j58ZxsMi0lvG3bNK7XMQ&usqp=CAU' },
  { id: 2, name: 'Brown Belt', price: 1, image: 'https://media.istockphoto.com/photos/brown-leather-belt-isolated-on-white-background-picture-id454363033?k=6&m=454363033&s=612x612&w=0&h=_SeqlMEUl40OZah8bxWah86BIeg3E6ex0nuuGQ8Y1As=' },
  { id: 3, name: 'Sport Shoes', price: 4, image: 'https://img.freepik.com/free-photo/green-sneakers-sport-running-shoe-isolated-white-background_39665-135.jpg' },
  { id: 4, name: 'Watch with leather belt', price: 4, image: 'https://www.colourbox.com/preview/4041294-cheap-mechanical-wrist-watch-isolated-on-the-white-background.jpg' },
  { id: 5, name: 'Denim Cap', price: 1, image: 'https://theelegance.pk/wp-content/uploads/2021/04/denim-cap-in-pakistan-scaled-1-1024x1024.jpg' },
  { id: 6, name: 'Shades', price: 1, image: 'https://d26hhearhq0yio.cloudfront.net/content/misterspex/produkte/grafiken/6774658_a2.jpg' },
];

function App() {
  let [isCartOpen, setCartState] = useState(false);
  let [cart, setCart] = useState<{ id: number, quantity: number }[]>([]);

  let [isAccountOpen, setAccountState] = useState(false);

  let [isSearchOpen, setSearchState] = useState(false);

  let [isSigninOpen, setSigninState] = useState(false);

  function addToCart(productId: number, quantity = 1) {
    let items = cart.find((product) => product.id == productId);
    if (items) {
      items.quantity += quantity;
    } else {
      cart.push({ id: productId, quantity });
    }
    setCart([...cart]);
  }

  function resetCart() {
    setCart([]);
  }

  return (
    <div>
      <Header onCartClick={() => setCartState(!isCartOpen)} />

      <div className="p-8">
        <div className="container max-w-3xl mx-auto space-y-4">
          <div className="gap-4 grid grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded p-6 space-y-2">
                <div className="border border-gray-200 rounded py-2 px-2">
                  <img className="w-full h-36 object-cover" src={product.image} />
                </div>
                <div className="text-gray-800 text-center">{product.name}</div>
                <div className="text-red-600 font-semibold text-center">{product.price}$</div>
                <button className="border border-black rounded text-sm font-semibold py-2 w-full hover:bg-gray-100" onClick={() => addToCart(product.id)}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Transition appear show={isCartOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10" onClose={() => setCartState(false)}>
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
                  <button className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 focus:outline-none" onClick={() => setCartState(false)}>
                    <XIcon className="h-4 w-4"/>
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
                    <tbody className="text-sm">
                      {cart.map((product) => {
                        let { name, price } = products.find((p) => product.id == p.id) || {};
                        return (
                          <tr key={product.id}>
                            <td>{name}</td>
                            <td className="text-center px-1 py-2">{product.quantity}</td>
                            <td className="text-center px-1 py-2">{(price || 0) * product.quantity}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  <div className="flex items-center justify-between">
                    <span>Sub-Total</span>
                    <input type="number" name="amount" className="border border-black rounded py-2 px-2 w-20" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tax</span>
                    <input type="number" name="amount" className="border border-black rounded py-2 px-2 w-20" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Voucher-Code</span>
                    <input type="code" name="voucher-code" className="border border-black rounded py-2 px-2 w-20" />
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <span>Total</span>
                    <input type="number" name="amount" className="border border-black rounded py-2 px-2 w-20" />
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="bg-gray-900 text-gray-200 rounded py-3 px-8 hover:bg-gray-800" onClick={() => resetCart()}>Clear Cart</button>
                    <button className="border border-black rounded py-3 px-8 hover:bg-gray-100">Check Out</button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {isSearchOpen &&
        <div className="absolute top-12 bottom-0 right-96">
          <input type="text" name="name" placeholder="Search here" className="border border-gray-200 rounded py-2 px-3 focus:outline-none" />
        </div>}

      {isSigninOpen &&
        <div className="border border-gray-200 rounded p-8 bg-white w-96 space-y-2 absolute right-0 top-[99px] bottom-0">
          <div className="space-y-1">
            <span>Username</span>
            <input type="text" name="name" placeholder="Enter username" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
          </div>
          <div className="space-y-1">
            <span>Password</span>
            <input type="password" name="Password" placeholder="Enter your password" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
          </div>
        </div>}
    </div>
  )
}

export default App
