import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ViewToggle from "../Components/ProductView";

const StarRating = ({ rating = 4 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-orange-500" : "text-gray-300"}
      >
        ★
      </span>
    ))}
    <span className="text-orange-500 text-sm ml-1">{rating}.0</span>
  </div>
);

const ProductsListing = ({ products = [], category = "Mobile Accessories", manualRating = 4 }) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination logic
  const productsPerPage = view === "grid" ? 9 : 5;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  // Adjust current page when switching views
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [view, totalPages, currentPage]);

  // Pagination handlers
  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* View toggle component */}
      <ViewToggle
        view={view}
        setView={setView}
        itemCount={products.length}
        category={category}
      />

      <main className="w-full">
        {/* Render products based on view type */}
        <div className={`grid ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" : "flex flex-col gap-4"}`}>
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100 p-4 flex flex-col transition-all duration-200"
            >
              <div className="w-full h-48 mb-3 flex items-center justify-center bg-gray-50 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name || "Product image"}
                  className="max-w-full max-h-full object-contain p-2"
                  onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback for broken images
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.discount && (
                    <span className="text-gray-500 line-through text-sm">${product.discount.toFixed(2)}</span>
                  )}
                </div>
                <div className="mt-2">
                  <StarRating rating={product.rating || manualRating} />
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {product.orders} orders • <span className="text-green-600">Free Shipping</span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-auto pt-3 inline-block"
                  aria-label={`View details for ${product.name}`}
                >
                  View details
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-md ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-8 h-8 rounded-md transition ${currentPage === number ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              aria-label={`Page ${number}`}
            >
              {number}
            </button>
          ))}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-md ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
            aria-label="Next page"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

ProductsListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number,
      discount: PropTypes.number,
      orders: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  category: PropTypes.string,
  manualRating: PropTypes.number,
};

export default ProductsListing;
