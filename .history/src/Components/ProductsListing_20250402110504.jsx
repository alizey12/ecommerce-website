import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import ViewToggle from "../Components/ProductView";
import ListingSidebar from "./ListingSidebar";

const ProductsListing = ({ products = [] }) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("featured");
  
  // Filter states
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    priceRange: { min: 0, max: 999999 },
    condition: "Any",
    ratings: []
  });

  // Handle filter changes from sidebar
  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Apply brand filter
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => 
        filters.brands.includes(product.brand)
      );
    }

    // Apply feature filter
    if (filters.features.length > 0) {
      filtered = filtered.filter(product =>
        filters.features.every(feature => 
          product.features.includes(feature)
        )
      );
    }

    // Apply price range filter
    filtered = filtered.filter(product => 
      product.price >= filters.priceRange.min && 
      product.price <= filters.priceRange.max
    );

    // Apply condition filter
    if (filters.condition !== "Any") {
      filtered = filtered.filter(product => 
        product.condition === filters.condition
      );
    }

    // Apply rating filter
    if (filters.ratings.length > 0) {
      filtered = filtered.filter(product =>
        filters.ratings.some(rating => 
          Math.floor(product.rating) === rating
        )
      );
    }

    // Apply sorting
    switch (sortType) {
      case "low-to-high":
        filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "high-to-low":
        filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "a-z":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "new-to-old":
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "old-to-new":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "best-selling":
        filtered.sort((a, b) => b.orders - a.orders);
        break;
      default:
        break;
    }

    return filtered;
  }, [products, filters, sortType]);

  // Pagination Logic
  const productsPerPage = view === "grid" ? 9 : 4;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [view, totalPages, currentPage]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Star Rating Component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index} 
            className={`text-orange-500 ${index < Math.round(rating) ? "filled" : "opacity-50"}`} 
          />
        ))}
        <span className="text-orange-500 text-sm ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="flex">
      <ListingSidebar onFilterChange={handleFilterChange} />
      
      <div className="mx-auto p-4 sm:p-6 max-w-full flex-1">
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
            <main className="w-full">
              {view === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:container md:mx-auto sm:gap-6 w-full">
                  {currentProducts.map(({ id, image, name, price, discount, orders, rating, category, brand, features: productFeatures }) => (
                    <div 
                      key={id} 
                      className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 p-4 flex flex-col transition-all duration-200 h-full"
                    >
                      <div className="w-full h-48 mb-3 flex items-center justify-center bg-gray-50 rounded-lg">
                        <img 
                          src={image} 
                          alt={name} 
                          className="max-w-full max-h-full object-contain p-2" 
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-start">
                          <h3 className="text-md font-medium line-clamp-2">{name}</h3>
                          <button className="text-gray-400 hover:text-red-500 transition-colors">
                            <FaHeart size={20} />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xl font-bold text-gray-900">${price}</span>
                          {discount && <span className="text-gray-500 line-through text-sm">${discount}</span>}
                        </div>
                        <div className="mt-2">
                          <StarRating rating={rating} />
                          <div className="text-sm text-gray-600 mt-2">
                            {orders} orders • <span className="text-green-600">Free Shipping</span>
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
                  {currentProducts.map(({ id, image, name, price, discount, orders, description, rating, category, brand }) => (
                    <div 
                      key={id} 
                      className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 py-4 px-6 sm:px-8 flex flex-col sm:flex-row items-start gap-6 transition-all duration-200"
                    >
                      <div className="w-full sm:w-40 h-40 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center">
                        <img 
                          src={image} 
                          alt={name} 
                          className="max-w-full max-h-full object-contain p-2" 
                          loading="lazy"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-grow w-full">
                        <div className="flex justify-between items-start w-full">
                          <div>
                            <h3 className="text-lg font-semibold">{name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xl font-bold text-gray-900">${price}</span>
                              {discount && <span className="text-gray-500 line-through text-sm">${discount}</span>}
                            </div>
                          </div>
                          <button className="text-gray-400 hover:text-red-500 ml-2 transition-colors">
                            <FaHeart size={20} />
                          </button>
                        </div>
                        <div className="mt-2">
                          <StarRating rating={rating} />
                        </div>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                          {description || "No description available"}
                        </p>
                        <div className="text-sm text-gray-600 mt-2">
                          {orders} orders • <span className="text-green-600">Free Shipping</span>
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

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-1 sm:gap-2">
                <button 
                  onClick={prevPage} 
                  disabled={currentPage === 1} 
                  className={`p-2 rounded-md ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
                >
                  <FaChevronLeft />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button 
                    key={number} 
                    onClick={() => paginate(number)} 
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md ${currentPage === number ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    {number}
                  </button>
                ))}
                <button 
                  onClick={nextPage} 
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