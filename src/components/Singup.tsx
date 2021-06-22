import React from 'react';
import { XIcon } from '@heroicons/react/outline';

interface Props {
    onCloseClicked: () => void;
}

export default function SignUp(props: Props) {
    return (
        <div className="space-y-4">
            <div>
                <button className="bg-gray-100 p-2 rounded-full focus:outline-none hover:bg-gray-200 absolute right-4 top-4" onClick={props.onCloseClicked}>
                    <XIcon className="h-4 w-4"/>
                </button>
            </div>
            <div className="space-y-1">
                <span>Name</span>
                <input type="text" name="name" placeholder="Enter your Name" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <div className="space-y-1">
                <span>Email Address</span>
                <input type="email" name="Email" placeholder="Enter Email Address" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <div className="space-y-1">
                <span>Password</span>
                <input type="password" name="Password" placeholder="Enter Password" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
                <p className="text-xs text-gray-500">Your password must be more than 8 characters.</p>
            </div>
            <div className="space-y-1">
                <span>Confirm Password</span>
                <input type="password" name="Confirm-Password" placeholder="Confirm Password" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <button className="bg-gray-900 text-gray-300 py-3 px-6 rounded hover:bg-gray-800">Sign Up</button>
        </div>

    )
}
