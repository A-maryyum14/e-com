import React from 'react';
import { XIcon } from '@heroicons/react/outline';

interface Props {
    onCloseClicked: () => void;
}
export default function SignIn(props: Props) {
    return (
        <div className="space-y-4">
            <div>
                <button className="bg-gray-100 p-2 rounded-full focus:outline-none hover:bg-gray-200 absolute right-4 top-4" onClick={props.onCloseClicked}>
                    <XIcon className="h-4 w-4" />
                </button>
            </div>
            <div className="space-y-1">
                <span>Username</span>
                <input type="text" name="name" placeholder="Enter Username" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <div className="space-y-1">
                <span>Password</span>
                <input type="password" name="Password" placeholder="Enter your Password" className="border border-black py-2 px-3 w-full rounded focus:outline-none" />
            </div>
            <button className="bg-gray-900 rounded py-3 px-6 text-gray-200 hover:bg-gray-800">Sign In</button>
        </div>
    )
}