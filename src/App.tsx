import React, { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 p-8">
      <div className="container max-w-3xl space-y-4">
        <div className="gap-4 grid grid-cols-3">
          <div className="bg-white border border-gray-200 rounded p-6 space-y-2">
            <div className="border border-gray-200 rounded py-2 px-2">
              <img className="w-full h-36 object-cover" src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcShxqfanJ0ztwBQz_j58ZxsMi0lvG3bNK7XMQ&usqp=CAU" />
            </div>
            <div className="text-gray-800 text-center">Blue Shirt - Medium</div>
            <div className="text-red-600 font-semibold text-center">2$</div>
            <button className="border border-black rounded text-sm font-semibold py-2 w-full hover:bg-gray-100">Add to cart</button>
          </div>
          <div className="bg-white border border-gray-200 rounded p-6 space-y-2">
            <div className="border border-gray-200 rounded py-2 px-2">
              <img className="w-full h-36 object-cover" src="https://media.istockphoto.com/photos/brown-leather-belt-isolated-on-white-background-picture-id454363033?k=6&m=454363033&s=612x612&w=0&h=_SeqlMEUl40OZah8bxWah86BIeg3E6ex0nuuGQ8Y1As=" />
            </div>
            <div className="text-gray-800 text-center">Brown Belt</div>
            <div className="text-red-600 font-semibold text-center">1$</div>
            <button className="border border-black rounded text-sm font-semibold py-2 w-full hover:bg-gray-100">Add to cart</button>
          </div>
          <div className="bg-white border border-gray-200 rounded p-6 space-y-2">
            <div className="border border-gray-200 rounded py-2 px-2">
              <img className="w-full h-36 object-cover" src="https://img.freepik.com/free-photo/green-sneakers-sport-running-shoe-isolated-white-background_39665-135.jpg" />
            </div>
            <div className=" text-gray-800 text-center">Sport Shoes</div>
            <div className="text-red-600 font-semibold text-center">4$</div>
            <button className="border border-black rounded text-sm font-semibold py-2 w-full hover:bg-gray-100">Add to cart</button>
          </div>
          <div className="bg-white border border-gray-200 rounded p-6 space-y-2">
            <div className="border border-gray-200 rounded py-2 px-2">
              <img className="w-full h-36 object-cover" src="https://www.colourbox.com/preview/4041294-cheap-mechanical-wrist-watch-isolated-on-the-white-background.jpg" />
            </div>
            <div className=" text-gray-800 text-center">Watch with leather belt</div>
            <div className="text-red-600 font-semibold text-center">4$</div>
            <button className="border border-black rounded text-sm font-semibold py-2 w-full hover:bg-gray-100">Add to cart</button>
          </div>
          <div className="bg-white border border-gray-200 rounded p-6 space-y-2">
            <div className="border border-gray-200 rounded py-2 px-2">
              <img className="w-full h-36 object-cover" src="https://theelegance.pk/wp-content/uploads/2021/04/denim-cap-in-pakistan-scaled-1-1024x1024.jpg" />
            </div>
            <div className=" text-gray-800 text-center">Denim Cap</div>
            <div className="text-red-600 font-semibold text-center">1$</div>
            <button className="border border-black rounded text-sm font-semibold py-2 w-full hover:bg-gray-100">Add to cart</button>
          </div>
          <div className="bg-white border border-gray-200 rounded p-6 space-y-2">
            <div className="border border-gray-200 rounded py-2 px-2">
              <img className="w-full h-36 object-cover" src="https://d26hhearhq0yio.cloudfront.net/content/misterspex/produkte/grafiken/6774658_a2.jpg" />
            </div>
            <div className=" text-gray-800 text-center">Shades</div>
            <div className="text-red-600 font-semibold text-center">1$</div>
            <button className="border border-black rounded text-sm font-semibold py-2 w-full hover:bg-gray-100">Add to cart</button>
          </div>
        </div>
        <div className="border border-gray-200 rounded p-8 bg-white w-full space-y-2">
          <h1 className="font-bold text-lg">Cart</h1>
          <table className="table-fixed">
            <thead className="text-base font-bold">
              <tr>
                <th className="w-1/2">Items</th>
                <th className="w-1/2">Quantity</th>
                <th className="w-1/2">Price</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between">
            <span>Total</span>
            <input type="number" name="amount" className="border border-black rounded py-2 px-2 w-20"/>
          </div>
          <div className="flex items-center justify-between">
              <span>Voucher</span>
              <input type="code" name="voucher-code" className="border border-black rounded py-2 px-2 w-20"/>
          </div>
          <div className="flex items-center justify-between pb-6">
                <span>Sub-total</span>
                <input type="number" name="amount" className="border border-black rounded py-2 px-2 w-20"/>
          </div>
          <button className="border border-black rounded py-3 px-10 hover:bg-gray-100">Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default App
