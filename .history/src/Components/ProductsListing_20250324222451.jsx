import { FaStar, FaHeart, FaTh, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useMemo } from "react";

const ProductsListing = ({ products = [] }) => {
  const [view, setView] = useState("grid"); // State for grid or list view
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const [sortType, setSortType] = useState("featured"); // State for sorting

  // Determine products per page based on view type
  const productsPerPage = view === "grid" ? 9 : 5;
  const totalPages = Math.ceil(products.length / productsPerPage); // Calculate total pages

  // Calculate the current products to display based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  
  // Sorting logic using useMemo for better performance
  const sortedProducts = useMemo(() => {
    let sortedArray = [...products];

    switch (sortType) {
      case "low-to-high":
        sortedArray.sort((a, b) => (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0));
        break;
      case "high-to-low":
        sortedArray.sort((a, b) => (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0));
        break;
      case "new-arrivals":
        sortedArray.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        break;
      case "top-rated":
        sortedArray.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }

    return sortedArray;
  }, [sortType, products]);

  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct); // Get the current page's products

  // Pagination handlers
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };
  
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-6xl mx-auto p-5">
      {/* Sorting & View Toggle Section */}
      <div className="flex justify-between bg-white p-4 border-b shadow-sm mb-4">
        <h2 className="text-lg font-semibold">{products.length} items in Mobile Accessories</h2>
        <div className="flex gap-2">
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
          
          {/* View toggle buttons */}
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

      {/* Product Listing */}
      <main>
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md border p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                <div className="flex items-center gap-1 text-yellow-500 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {currentProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md border p-4 flex gap-4">
                <img src={product.image} alt={product.name} className="w-40 h-40 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button onClick={prevPage} disabled={currentPage === 1} className="p-2 rounded-md text-blue-600">
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)} className="p-2 rounded-md text-blue-600">
            {i + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages} className="p-2 rounded-md text-blue-600">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductsListing;
