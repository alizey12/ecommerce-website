import { FaStar, FaTh, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";

const ProductsListing = ({ products = [] }) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Products per page configuration
  const productsPerPage = view === "grid" ? 9 : 5; // 3x3 in grid view, 5 in list view

  // Pagination Logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination handlers
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => paginate(Math.min(currentPage + 1, totalPages));
  const prevPage = () => paginate(Math.max(currentPage - 1, 1));

  return (
    <>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 border-b shadow-sm">
        <h2 className="text-xl font-bold">{products.length} items in Mobile Accessory</h2>

        {/* View Toggle Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            <FaTh size={20} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Products Listing */}
      <main className="py-5">
        <div className={`${view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-4"}`}>
          {currentProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg bg-white shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover mb-3"
              />
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              {product.discount && <p className="text-red-500">{product.discount}</p>}

              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} />
                ))}
              </div>

              <button className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
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
        )}

        {/* Items per page info */}
        <div className="text-center text-sm text-gray-500 mt-2">
          Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} products
        </div>
      </main>
    </>
  );
};

export default ProductsListing;
