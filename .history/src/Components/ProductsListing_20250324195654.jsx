import { FaStar, FaTh, FaBars } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const ProductsListing = ({ products }) => {
  const [view, setView] = useState("grid");
  const [sortType, setSortType] = useState("featured");
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    if (!Array.isArray(products)) return;
    let sortedArray = [...products];

    switch (sortType) {
      case "low-to-high":
        sortedArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "high-to-low":
        sortedArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "new-arrivals":
        sortedArray.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      default:
        sortedArray = [...products];
        break;
    }
    setSortedProducts(sortedArray);
  }, [sortType, products]);

  return (
    <>
      <div className="flex items-center justify-between bg-white p-4 border-b shadow-sm">
        <p className="text-lg font-medium">{sortedProducts.length} Products</p>
        <div className="flex items-center gap-4">
          <select
            className="border px-3 py-1 rounded-md focus:outline-none"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="new-arrivals">Newest Arrivals</option>
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
        <div className={`${view === "list" ? "flex flex-col gap-3" : "grid grid-cols-3 gap-6"} w-full`}>
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className={`border p-4 rounded-lg bg-white shadow-md w-full ${view === "list" ? "flex gap-6" : ""}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`${view === "list" ? "w-40 h-40" : "w-full h-60"} object-cover mb-3`}
              />
              <div className="flex flex-col justify-between flex-1">
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description || "No description available"}</p>
                <p className="text-gray-700 font-semibold">${product.price}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-yellow-500 flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                    ({product.rating})
                  </span>
                  <span className="text-gray-500">{product.orders} Orders</span>
                  <span className={`font-bold ${product.shipping === "Free" ? "text-green-500" : "text-red-500"}`}>
                    {product.shipping} Shipping
                  </span>
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
