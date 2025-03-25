import { FaStar, FaTh, FaBars } from "react-icons/fa";
import React, { useState } from "react";

const ProductsListing = ({ products }) => {
  const [view, setView] = useState("grid");
  const [isListView, setIsListView] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-white p-4 border-b shadow-sm">
        <p className="text-lg font-medium">
          12,911 items in <span className="font-bold">Mobile accessory</span>
        </p>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="hidden" checked readOnly />
            <span className="w-5 h-5 flex items-center justify-center border rounded bg-blue-600 text-white">
              ✔
            </span>
            Verified only
          </label>
          <select className="border px-3 py-1 rounded-md focus:outline-none">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={() => { setView("grid"); setIsListView(false); }}
              className={`p-2 border rounded ${view === "grid" ? "bg-gray-200" : ""}`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => { setView("list"); setIsListView(true); }}
              className={`p-2 border rounded ${view === "list" ? "bg-gray-200" : ""}`}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <main className="py-5">
        {/* Products Grid/List View */}
        <div className={`grid ${isListView ? "grid-cols-1 gap-4" : "grid-cols-3 gap-6"}`}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`border p-4 rounded-lg bg-white shadow-md ${isListView ? "flex gap-4" : ""}`}
            >
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className={`${isListView ? "w-4 h-40" : "w-96 h-60"} object-cover mb-3`}
              />
              <div className={`flex flex-col justify-between ${isListView ? "w-full" : ""}`}>
                <h3 className="font-bold">{product.name}</h3>
                {product.price && <p className="text-gray-600">{product.price}</p>}
                {product.discount && <p className="text-red-500">{product.discount}</p>}
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-fit">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProductsListing;
