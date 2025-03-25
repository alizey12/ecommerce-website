import { FiGrid, FiList } from "react-icons/fi";
import React, { useState } from "react";

import { FaStar } from "react-icons/fa";
import { FaTh, FaBars } from "react-icons/fa";
const ProductsListing = ({ products }) => {
    const [view, setView] = useState("grid");

  return (

    <> 
    
    <main className="m">
      {/* View Toggle */}
     

      {/* Products Grid */}
      <div className={`grid  ${view === "grid" ? "grid-cols-3 " : "grid-cols-1"} gap-6`}>
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg bg-white shadow-md">
            <img
              src={product.image}
              alt={`Image of ${product.name}`}
              className="h-40 w-full object-cover mb-3"
            />
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
            <button className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </main>
    </>
  );
};

export default ProductsListing;
