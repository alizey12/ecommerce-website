import { FaStar, FaHeart } from "react-icons/fa";
import React, { useState } from "react";

const ProductsListing = ({ products = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5; // Matching the reference image layout

  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="max-w-5xl mx-auto py-5">
      {currentProducts.map((product) => (
        <div
          key={product.id}
          className="flex bg-white rounded-lg shadow-md overflow-hidden border p-4 mb-4"
        >
          {/* Image Section */}
          <div className="w-40 h-40 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col justify-between px-4 flex-grow">
            <h3 className="text-lg font-semibold">{product.name}</h3>

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              {product.discount && (
                <span className="text-gray-500 line-through text-sm">${product.discount}</span>
              )}
            </div>

            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} />
              ))}
              <span className="text-orange-500 text-sm">{product.rating}</span>
            </div>

            <div className="text-sm text-gray-600">
              {product.orders} orders • <span className="text-green-600">Free Shipping</span>
            </div>

            <p className="text-gray-500 text-sm">{product.description}</p>

            <a href="#" className="text-blue-600 font-medium text-sm">
              View details
            </a>
          </div>

          {/* Wishlist Icon */}
          <div className="flex items-start">
            <button className="text-gray-400 hover:text-red-500">
              <FaHeart size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsListing;
