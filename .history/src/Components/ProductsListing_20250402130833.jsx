import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import ViewToggle from "../Components/ProductView";
import ListingSidebar from "./ListingSidebar";

const ProductsListing = ({ products = [] }) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("featured");
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    priceRange: { min: 0, max: 999999 },
    condition: "Any",
    ratings: []
  });

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }

    if (filters.brands.length > 0) {
      filtered = filtered.filter(p => filters.brands.includes(p.brand));
    }

    if (filters.features.length > 0) {
      filtered = filtered.filter(p => 
        filters.features.every(f => p.features.includes(f))
      );
    }

    filtered = filtered.filter(p => 
      p.price >= filters.priceRange.min && p.price <= filters.priceRange.max
    );

    if (filters.condition !== "Any") {
      filtered = filtered.filter(p => p.condition === filters.condition);
    }

    if (filters.ratings.length > 0) {
      filtered = filtered.filter(p => 
        filters.ratings.includes(Math.floor(p.rating))
      );
    }

    // Apply sorting
    switch (sortType) {
      case "low-to-high":
        return filtered.sort((a, b) => a.price - b.price);
      case "high-to-low":
        return filtered.sort((a, b) => b.price - a.price);
      case "a-z":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case "z-a":
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      case "new-to-old":
        return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "old-to-new":
        return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "best-selling":
        return filtered.sort((a, b) => b.orders - a.orders);
      default:
        return filtered;
    }
  }, [products, filters, sortType]);

  // Pagination
  const productsPerPage = view === "grid" ? 6 : 4;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Star Rating Component
  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={`text-orange-500 ${i < Math.round(rating) ? "opacity-100" : "opacity-30"}`} 
        />
      ))}
      <span className="text-orange-500 text-sm ml-1">{rating.toFixed(1)}</span>
    </div>
  );

  return (
    <div className="flex">
      <ListingSidebar onFilterChange={setFilters} />
      
      <div className="mx-auto p-4 sm:p-6 max-w-full">
        <ViewToggle 
          view={view} 
          setView={setView} 
          itemCount={filteredProducts.length} 
          sortType={sortType} 
          setSortType={setSortType} 
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl font-medium">No products match your filters</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters to see more results</p>
          </div>
        ) : (
          <>
            {/* Maintain your original product listing orientation */}
            <main className="w-full">
              {view === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:container md:mx-auto sm:gap-6 w-full">
                  {currentProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 p-4 flex flex-col transition-all duration-200 h-full">
                      <div className="w-full h-48 mb-3 flex items-center justify-center bg-gray-50 rounded-lg">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="max-w-full max-h-full object-contain p-2" 
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-start">
                          <h3 className="text-md font-medium line-clamp-2">{product.name}</h3>
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <FaHeart size={20} />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                          {product.discount && (
                            <span className="text-gray-500 line-through text-sm">${product.discount.toFixed(2)}</span>
                          )}
                        </div>
                        <div className="mt-2">
                          <StarRating rating={product.rating} />
                          <div className="text-sm text-gray-600 mt-2">
                            {product.orders} orders • <span className="text-green-600">Free Shipping</span>
                          </div>
                          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-auto pt-3 inline-block">
                            View details
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4 w-full">
                  {currentProducts.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 py-4 px-6 sm:px-8 flex flex-col sm:flex-row items-start gap-6 transition-all duration-200">
                      <div className="w-full sm:w-40 h-40 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="max-w-full max-h-full object-contain p-2" 
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-grow w-full">
                        <div className="flex justify-between items-start w-full">
                          <div>
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                              {product.discount && (
                                <span className="text-gray-500 line-through text-sm">${product.discount.toFixed(2)}</span>
                              )}
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-red-500 ml-2 transition-colors">
                            <FaHeart size={20} />
                          </button>
                        </div>
                        <div className="mt-2">
                          <StarRating rating={product.rating} />
                        </div>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="text-sm text-gray-600 mt-2">
                          {product.orders} orders • <span className="text-green-600">Free Shipping</span>
                        </div>
                        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-3 inline-block">
                          View details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>

            {/* Pagination - Maintain your original implementation */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-1 sm:gap-2">
                <button 
                  onClick={() => paginate(currentPage - 1)} 
                  disabled={currentPage === 1} 
                  className={`p-2 rounded-md ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
                >
                  <FaChevronLeft />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button 
                    key={number} 
                    onClick={() => paginate(number)} 
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md ${currentPage === number ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    {number}
                  </button>
                ))}
                <button 
                  onClick={() => paginate(currentPage + 1)} 
                  disabled={currentPage === totalPages} 
                  className={`p-2 rounded-md ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsListing;