import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import ViewToggle from "../Components/ProductView";

const ProductsListing = ({ products = [] }) => {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    priceRange: { min: 0, max: 999999 },
    condition: null,
    rating: null
  });

  // Function to update filters
  const updateFilters = (filterType, value) => {
    setFilters(prev => {
      // Handle different filter types differently
      if (filterType === 'priceRange') {
        return { ...prev, priceRange: value };
      }
      if (filterType === 'condition' || filterType === 'rating') {
        return { ...prev, [filterType]: value === prev[filterType] ? null : value };
      }
      
      // For array-based filters (categories, brands, features)
      return {
        ...prev,
        [filterType]: prev[filterType].includes(value)
          ? prev[filterType].filter(item => item !== value)
          : [...prev[filterType], value]
      };
    });
  };

  // Function to apply all filters to products
  const filteredProducts = products.filter(product => {
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }
    
    // Brand filter
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }
    
    // Features filter (product must have all selected features)
    if (filters.features.length > 0) {
      const productFeatures = product.features || [];
      if (!filters.features.every(feature => productFeatures.includes(feature))) {
        return false;
      }
    }
    
    // Price range filter
    if (product.price < filters.priceRange.min || product.price > filters.priceRange.max) {
      return false;
    }
    
    // Condition filter
    if (filters.condition && product.condition !== filters.condition) {
      return false;
    }
    
    // Rating filter (assuming product.rating is a number)
    if (filters.rating && Math.floor(product.rating) !== filters.rating) {
      return false;
    }
    
    return true;
  });
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("featured");
  
  // Sorting logic
  const sortedProducts = useMemo(() => {
    let sortedArray = [...products];

    switch (sortType) {
      case "low-to-high":
        sortedArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "high-to-low":
        sortedArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "a-z":
        sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sortedArray.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "new-to-old":
        sortedArray.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "old-to-new":
        sortedArray.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "best-selling":
        sortedArray.sort((a, b) => b.orders - a.orders);
        break;
      default:
        break;
    }
    return sortedArray;
  }, [sortType, products]);

  // Pagination Logic
  const productsPerPage = view === "grid" ? 9 : 4;
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [view, totalPages, currentPage]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
  const StarRating = () => {
    const [rating, setRating] = useState(0);
    useEffect(() => {
      setRating((Math.random() * 2 + 3).toFixed(1));
    }, []);

    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar 
            key={index} 
            className={`text-orange-500 ${index < Math.round(rating) ? "filled" : "opacity-50"}`} 
          />
        ))}
        <span className="text-orange-500 text-sm ml-1">{rating}</span>
      </div>
    );
  };

  return (
    <div className="mx-auto p-4 sm:p-6 max-w-full">
      <ViewToggle 
        view={view} 
        setView={setView} 
        itemCount={sortedProducts.length} 
        sortType={sortType} 
        setSortType={setSortType} 
      
      />

      <main className="w-full">
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:container md:mx-auto sm:gap-6 w-full">
            {currentProducts.map(({ id, image, name, price, discount, orders }) => (
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
                    <StarRating />
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
            {currentProducts.map(({ id, image, name, price, discount, orders, description }) => (
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
                    <StarRating />
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
    </div>
  );
};

export default ProductsListing;