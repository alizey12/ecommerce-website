import { FaStar, FaHeart, FaTh, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";

const ProductsListing = ({ products = [] }) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = view === "grid" ? 9 : 5;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-6xl mx-auto p-5">
      {/* View Toggle */}
      <div className="flex justify-between bg-white p-4 border-b shadow-sm mb-4">
        <h2 className="text-lg font-semibold">{products.length} items in Mobile Accessories</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            <FaTh size={18} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            <FaBars size={18} />
          </button>
        </div>
      </div>

      {/* Products Display */}
      <main className={`${view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}`}>
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden border ${
              view === "list" ? "flex p-4" : "p-4"
            }`}
          >
            {/* Image Section - Fixed for both views */}
            <div className={`${
              view === "list" 
                ? "w-1/4 min-w-[150px] h-40 mr-4 flex-shrink-0" 
                : "w-full h-48 mb-3"
            }`}>
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full object-contain ${
                  view === "list" ? "rounded" : "rounded-lg"
                }`}
              />
            </div>

            {/* Product Details */}
            <div className={`flex flex-col ${
              view === "list" ? "flex-grow" : ""
            }`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {product.discount && (
                      <span className="text-gray-500 line-through text-sm">${product.discount}</span>
                    )}
                  </div>
                </div>
                {/* Wishlist Icon - Moved here for better layout */}
                <button className="text-gray-400 hover:text-red-500 ml-2">
                  <FaHeart size={20} />
                </button>
              </div>

              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} 
                    size={14}
                  />
                ))}
                <span className="text-orange-500 text-sm ml-1">{product.rating}</span>
              </div>

              {view === "list" && (
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
              )}

              <div className="text-sm text-gray-600 mb-3">
                {product.orders} orders • <span className="text-green-600">Free Shipping</span>
              </div>

              <a 
                href="#" 
                className={`text-blue-600 font-medium text-sm ${
                  view === "list" ? "mt-auto" : ""
                }`}
              >
                View details
              </a>
            </div>
          </div>
        ))}
      </main>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
        >
          <FaChevronLeft />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`w-10 h-10 rounded-md ${currentPage === number ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Items per page info */}
      <div className="text-center text-sm text-gray-500 mt-2">
        Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} products
      </div>
    </div>
  );
};

export default ProductsListing;