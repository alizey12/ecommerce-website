import { FaStar, FaTh, FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import moduleName from '../Pages/Products'
const ProductsListing = ({ products }) => {
  const [view, setView] = useState("grid");
  const [sortType, setSortType] = useState("featured");
  const [sortedProducts, setSortedProducts] = useState([...products]);

  // Sorting Logic
  useEffect(() => {
    let sortedArray = [...products];

    switch (sortType) {
      case "low-to-high":
        sortedArray.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        });
        break;
      case "high-to-low":
        sortedArray.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
          return priceB - priceA;
        });
        break;
      case "new-arrivals":
        sortedArray.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        break;
      case "top-rated":
        sortedArray.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Featured (default) - no sorting needed
        break;
    }

    setSortedProducts(sortedArray);
  }, [sortType, products]);

  return (
    <>
      <div className="flex items-center justify-between bg-white p-4 border-b shadow-sm">
        <p className="text-lg font-medium">
          {products.length} items in <span className="font-bold">Mobile accessory</span>
        </p>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="hidden" checked readOnly />
            <span className="w-5 h-5 flex items-center justify-center border rounded bg-blue-600 text-white">
              ✔
            </span>
            Verified only
          </label>
          <select
            className="border px-3 py-1 rounded-md focus:outline-none"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="new-arrivals">Newest Arrivals</option>
            <option value="top-rated">Top Rated</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 border rounded ${view === "grid" ? "bg-gray-200" : ""}`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 border rounded ${view === "list" ? "bg-gray-200" : ""}`}
            >            
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <main className="py-5">
        {/* Products Grid/List View */}
        <div className={`${view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "flex flex-col gap-4"}`}>
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className={`border p-4 rounded-lg bg-white shadow-md ${view === "list" ? "flex gap-6 items-start" : ""}`}
            >
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className={`${view === "list" ? "w-40 h-40" : "w-full h-48"} object-cover rounded`}
              />
              <div className={`${view === "list" ? "flex-1" : "mt-3"}`}>
                <h3 className="font-bold text-lg">{product.name}</h3>
                {product.description && <p className="text-gray-600 text-sm mt-1">{product.description}</p>}
                
                <div className="flex items-center justify-between mt-2">
                  <div>
                    {product.price && <p className="text-gray-800 font-semibold">{product.price}</p>}
                    {product.discount && (
                      <div className="flex items-center gap-2">
                        <span className="text-red-500 line-through">{product.originalPrice}</span>
                        <span className="text-red-500">{product.discount}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm">{product.rating || '4.5'}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>{product.orders || '100+'} orders</span>
                  <span>{product.shipping || 'Free shipping'}</span>
                </div>
                
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full">
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