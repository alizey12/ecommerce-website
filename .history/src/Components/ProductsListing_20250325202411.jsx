import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import ViewToggle from "../App";

const ProductsListing = ({ products = [], category = "Mobile Accessories" }) => {
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
      <ViewToggle 
        view={view} 
        setView={setView} 
        itemCount={products.length} 
        category={category} 
      />

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