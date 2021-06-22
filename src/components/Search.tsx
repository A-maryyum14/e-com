import React from 'react';
import { XIcon } from '@heroicons/react/outline';

interface Props {
    onCloseClicked: () => void;
}


export default function Search(props: Props) {
return (
    <div className="flex items-center">
        <input type="text" name="name" placeholder="Search here" className="rounded-full py-2 px-6 w-full focus:outline-none" />
        <button className="px-4 focus:outline-none" onClick={props.onCloseClicked}>
            <XIcon className="h-5 w-5 text-gray-400 hover:text-gray-900"/>
        </button>
    </div>
    );
}