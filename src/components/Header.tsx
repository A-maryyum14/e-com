import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import SignIn from './SignIn';
import SignUp from './Singup';

interface Props {
    onCartClick: () => void;
}

export default function Header({ onCartClick }: Props) {
    let [isCartOpen, setCartState] = useState(false);
    let [isSignUpFormOpen, setSignUpForm] = useState(false);
    let [isSearchOpen, setSearchState] = useState(false);
    let [isSigninFormOpen, setSigninState] = useState(false);

    return (
        <>
            <div className="bg-gray-900 text-gray-300 text-xs w-full p-2">
                <div className="max-w-5xl mx-auto flex items-center">
                    <div className="text-center flex-grow">Get free delivery on orders over $100</div>
                    <div className="space-x-4 flex items-center">
                        <button className="border-r-2 border-gray-700 px-4 hover:bg-gray-800 py-0.5 rounded" onClick={() => setSignUpForm(!isSignUpFormOpen)}>Create an account</button>
                        <button className="hover:bg-gray-800 py-0.5 px-4 rounded" onClick={() => setSigninState(!isSigninFormOpen)}>Sign in</button>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded w-full p-4 sticky">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <div className="font-bold text-xl">Products</div>
                    <div>
                        <button className="text-gray-400 hover:text-black focus:outline-none" onClick={() => setSearchState(!isSearchOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button className="text-gray-400 border-r-2 border-gray-300 px-6 hover:text-black focus:outline-none" onClick={() => setSigninState(!isSigninFormOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </button>
                        <button className="hover:text-black focus:outline-none px-6 text-gray-400" onClick={onCartClick}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Transition appear show={isSignUpFormOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setSignUpForm(false)}
                >
                    <div className="min-h-screen px-4 text-center">
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
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">Create an Account</Dialog.Title>

                                <SignUp />
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}