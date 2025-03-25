import { FaStar, FaHeart, FaTh, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";

const ProductsListing = ({ products = [] }) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Always show 9 products (3 rows × 3 columns) in grid view
  const productsPerPage = view === "grid" ? 9 : 5;
  const totalPages = Math.ceil(products.length / productsPerPage);

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
            /</div>
          </div>
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
      <main>
        {/* Grid View - Fixed 3 rows */}
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ height: "calc(3 * (theme => theme.spacing[96]))" }}>
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border p-4 h-full flex flex-col"
              >
                {/* Image Section */}
                <div className="w-full h-48 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {product.discount && (
                      <span className="text-gray-500 line-through text-sm">${product.discount}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                    <span className="text-orange-500 text-sm">{product.rating}</span>
                  </div>

                  <div className="text-sm text-gray-600 mt-2">
                    {product.orders} orders • <span className="text-green-600">Free Shipping</span>
                  </div>

                  <a href="#" className="text-blue-600 font-medium text-sm mt-auto pt-2">
                    View details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="flex flex-col gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex items-start gap-4"
              >
                {/* Image Section */}
                <div className="w-40 h-40 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                        {product.discount && (
                          <span className="text-gray-500 line-through text-sm">${product.discount}</span>
                        )}
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 ml-2">
                      <FaHeart size={20} />
                    </button>
                  </div>

                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                    <span className="text-orange-500 text-sm">{product.rating}</span>
                  </div>

                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="text-sm text-gray-600 mt-2">
                    {product.orders} orders • <span className="text-green-600">Free Shipping</span>
                  </div>

                  <a href="#" className="text-blue-600 font-medium text-sm mt-2">
                    View details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
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