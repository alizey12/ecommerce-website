import React from 'react'
import { FaCheck } from "react-icons/fa";
const EcommerceListing = () => {
  return (
    <div>
  

    <div className="flex flex-col w-full">
      {/* Breadcrumbs */}
      <nav className="text-sm p-4 border-b bg-white">
        Home &gt; Clothing &gt; Men's wear &gt; Summer clothing
      </nav>

      <div className="flex">
        {/* Sidebar Filters */}
        <aside className="w-1/4 p-4 border-r bg-white">
          <h2 className="font-bold text-lg mb-2">Category</h2>
          <ul className="space-y-2">
            <li className="text-blue-500 cursor-pointer font-semibold">Mobile Accessories</li>
            <li className="cursor-pointer">Electronics</li>
            <li className="cursor-pointer">Smartphones</li>
            <li className="cursor-pointer">Modern Tech</li>
          </ul>

          <h2 className="font-bold text-lg mt-6">Brands</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer flex items-center gap-2"><FaCheck className="text-blue-500" /> Samsung</li>
            <li className="cursor-pointer flex items-center gap-2"><FaCheck className="text-blue-500" /> Apple</li>
            <li className="cursor-pointer flex items-center gap-2">GoPro</li>
            <li className="cursor-pointer flex items-center gap-2">Pavco</li>
          </ul>
        </aside>

        {/* Product List */}
        <main className="w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">12,871 Items in Mobile Accessories</h2>
            <div className="flex gap-4">
              <button className="border px-4 py-1 rounded bg-blue-100 text-blue-700">Verified only</button>
              <button className="border px-4 py-1 rounded bg-gray-100">Featured</button>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Sample Product */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="border p-4 flex gap-4 bg-white rounded-lg shadow">
                <div className="w-1/5 bg-gray-200 h-32"></div>
                <div className="w-4/5">
                  <h3 className="font-bold">GoPro HERO8 4K Action Camera - Black</h3>
                  <p className="text-yellow-500">★★★★★ 7.5k orders</p>
                  <p className="text-lg font-bold">$998.00</p>
                  <p className="text-green-500">Free Shipping</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="mt-2 text-blue-500">View Details</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button className="px-4 py-2 border rounded">Previous</button>
            <span>Page 1 of 3</span>
            <button className="px-4 py-2 border rounded">Next</button>
          </div>
        </main>
      </div>
    </div>
  

    </div>
  )
}

export default EcommerceListing
