import React from 'react';

export default function CheckOut() {

    return (
        <div className="w-full space-x-4 flex items-start justify-evenly p-6">
            <div>image</div>
            <div className="bg-white p-8 rounded">
                <div className="text-lg font-bold">Payment Details</div>
                <p className="text-sm text-gray-500 mb-8">Complete your purchase by providing following payment details.</p>
                <div className="space-y-4">
                    <div className="space-y-3">
                        <span className="font-semibold">Email Address</span>
                        <input type="email" name="Email" placeholder="Enter your email address" className="border border-gray-500 py-2 px-3 w-full rounded focus:outline-none" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-semibold">Card Details</span>
                        <input type="Accountnumber" name="Account Number" placeholder="Enter your account number" className="border border-gray-500 py-2 px-3 w-full rounded focus:outline-none" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-semibold">Owner's Name</span>
                        <input type="name" name="name" placeholder="Enter cardholder name" className="border border-gray-500 py-2 px-3 w-full rounded focus:outline-none" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-semibold">Address</span>
                        <input type="address" name="address" placeholder="Enter your detail address here" className="border border-gray-500 py-2 px-3 w-full rounded focus:outline-none" />
                    </div>
                    <div className="space-y-3">
                        <span className="font-semibold">VAT Number</span>
                        <input type="VATnumber" name="VATnumber" placeholder="Enter your VAT number" className="border border-gray-500 py-2 px-3 w-full rounded focus:outline-none" />
                    </div>
                    <div className="flex justify-between">
                        <div className="col-span-2 px-1 py-2 font-semibold">Subtotal</div>
                        <div></div>
                    </div>
                    <div className="flex justify-between">
                        <div className="col-span-2 px-1 py-2 font-semibold">VAT (20%)</div>
                        <div></div>
                    </div>
                    <div className="flex justify-between">
                        <div className="col-span-2 px-1 py-2 font-semibold">Total</div>
                        <div></div>
                    </div>
                    <button className="bg-gray-900 text-gray-200 py-2 w-full rounded font-semibold">Pay</button>
                    <p className="text-gray-400 text-sm text-center">Payments are secure and encrypted</p>
                </div>
            </div>
        </div>


    )
}
