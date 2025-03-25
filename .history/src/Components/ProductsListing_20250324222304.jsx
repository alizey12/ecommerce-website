import { FaStar, FaHeart, FaTh, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useMemo } from "react"; // Added useMemo import

const ProductsListing = ({ products = [] }) => {
  // State for view mode (grid/list)
  const [view, setView] = useState("grid");
  
  // State for current page number
  const [currentPage, setCurrentPage] = useState(1);
  
  // State for sorting type
  const [sortType, setSortType] = useState("featured");

  // Products per page based on view mode
  const productsPerPage = view === "grid" ? 9 : 5; // 3 rows x 3 columns in grid view
  
  // Calculate total pages needed
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Sorting logic with memoization for performance
  const sortedProducts = useMemo(() => {
    let sortedArray = [...products];

    switch (sortType) {
      case "low-to-high":
        // Sort by price low to high
        sortedArray.sort((a, b) => 
          (parseFloat(a.price?.replace(/[^0-9.]/g, "") || 0) - 
          (parseFloat(b.price?.replace(/[^0-9.]/g, "") || 0)
        );
        break;
      case "high-to-low":
        // Sort by price high to low
        sortedArray.sort((a, b) => 
          (parseFloat(b.price?.replace(/[^0-9.]/g, "") || 0) - 
          (parseFloat(a.price?.replace(/[^0-9.]/g, "") || 0)
        );
        break;
      case "new-arrivals":
        // Sort by newest first
        sortedArray.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        break;
      case "top-rated":
        // Sort by highest rating
        sortedArray.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Default sorting (featured)
        break;
    }

    return sortedArray;
  }, [sortType, products]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  // Function to go to next page
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  
  // Function to go to previous page
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-6xl mx-auto p-5">
      {/* View Toggle and Sorting Controls */}
      <div className="flex flex-col md:flex-row justify-between bg-white p-4 border-b shadow-sm mb-4 gap-4">
        {/* Product count and category */}
        <h2 className="text-lg font-semibold">
          {products.length} items in <span className="font-bold">Mobile Accessories</span>
        </h2>
        
        {/* Controls container */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Verified filter checkbox */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="hidden" checked readOnly />
            <span className="w-5 h-5 flex items-center justify-center border rounded bg-blue-600 text-white">
              ✔
            </span>
            <span>Verified only</span>
          </label>
          
          {/* Sorting dropdown */}
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
          <div className="flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-md ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              aria-label="Grid view"
            >
              <FaTh size={18} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-md ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              aria-label="List view"
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Products Display */}
      <main>
        {/* Grid View - 3 rows (9 products) */}
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border p-4 h-full flex flex-col"
              >
                {/* Product Image */}
                <div className="w-full h-48 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-grow">
                  {/* Product Name */}
                  <h3 className="text-lg font-semibold">{product.name}</h3>

                  {/* Price and Discount */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {product.discount && (
                      <span className="text-gray-500 line-through text-sm">${product.discount}</span>
                    )}
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} 
                      />
                    ))}
                    <span className="text-orange-500 text-sm">{product.rating}</span>
                  </div>

                  {/* Order and Shipping Info */}
                  <div className="text-sm text-gray-600 mt-2">
                    {product.orders} orders • <span className="text-green-600">Free Shipping</span>
                  </div>

                  {/* View Details Link */}
                  <a href="#" className="text-blue-600 font-medium text-sm mt-auto pt-2">
                    View details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View - 5 products per page */
          <div className="flex flex-col gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex flex-col sm:flex-row items-start gap-4"
              >
                {/* Product Image */}
                <div className="w-full sm:w-40 h-40 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between flex-grow w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      {/* Product Name */}
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      
                      {/* Price and Discount */}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                        {product.discount && (
                          <span className="text-gray-500 line-through text-sm">${product.discount}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Wishlist Button */}
                    <button className="text-gray-400 hover:text-red-500 ml-2">
                      <FaHeart size={20} />
                    </button>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} 
                      />
                    ))}
                    <span className="text-orange-500 text-sm">{product.rating}</span>
                  </div>

                  {/* Product Description */}
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Order and Shipping Info */}
                  <div className="text-sm text-gray-600 mt-2">
                    {product.orders} orders • <span className="text-green-600">Free Shipping</span>
                  </div>

                  {/* View Details Link */}
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
        {/* Previous Page Button */}
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`w-10 h-10 rounded-md ${currentPage === number ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
            aria-label={`Page ${number}`}
          >
            {number}
          </button>
        ))}

        {/* Next Page Button */}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
          aria-label="Next page"
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