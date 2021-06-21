import { Dialog, Transition } from '@headlessui/react';
import React, { useState, Fragment } from 'react';

export default function SignUp() {
    let [isSignUpFormOpen, setSignUpForm] = useState(false);
    return (
        <div>
            <div className="space-y-1">
                <span>Name</span>
                <input type="text" name="name" placeholder="Enter your name" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <div className="space-y-1">
                <span>Email Address</span>
                <input type="email" name="Email" placeholder="Enter your email address" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <div className="space-y-1">
                <span>Password</span>
                <input type="password" name="Password" placeholder="Enter password" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <div className="space-y-1">
                <span>Confirm Password</span>
                <input type="password" name="Confirm-Password" placeholder="Confirm your password" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <button className="bg-gray-900 text-gray-300 py-3 px-6 rounded hover:bg-gray-800">Sign Up</button>
        </div>

    )
}

function setSignUpForm(arg0: boolean): void {
    throw new Error('Function not implemented.');
}
