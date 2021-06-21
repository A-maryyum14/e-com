import React from 'react';

export default function SignIn() {
    return (
        <div className="border border-gray-200 rounded p-8 bg-white w-96 space-y-2 right-0 top-[99px] bottom-0">
            <div className="space-y-1">
                <span>Username</span>
                <input type="text" name="name" placeholder="Enter username" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <div className="space-y-1">
                <span>Password</span>
                <input type="password" name="Password" placeholder="Enter your password" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <button className="bg-gray-900 rounded py-3 px-6 text-gray-200 hover:bg-gray-800">Sign In</button>
        </div>
    )
}