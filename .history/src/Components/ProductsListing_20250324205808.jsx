import { FaStar, FaTh, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useMemo } from "react";

const ProductsListing = ({ products = [] }) => {
  const [view, setView] = useState("grid");
  const [sortType, setSortType] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Products per page configuration
  const productsPerPage = view === "grid" ? 9 : 5; // 3 rows x 3 columns in grid view

  // Sorting Logic
  const sortedProducts = useMemo(() => {
    let sortedArray = [...products];
    // ... (keep existing sorting logic)
    return sortedArray;
  }, [sortType, products]);

  // Pagination Logic
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 border-b shadow-sm">
        {/* ... (keep existing header content) */}
      </div>

      <main className="py-5">
        <div className={`${view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-4"}`}>
          {currentProducts.map((product) => (
            // ... (keep existing product card rendering)
          ))}
        </div>

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
          Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} products
        </div>
      </main>
    </>
  );
};

export default ProductsListing;