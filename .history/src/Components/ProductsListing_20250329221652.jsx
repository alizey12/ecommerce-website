import { useState, useEffect, useMemo, memo } from "react";
import { FaTh, FaBars, FaHeart, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "low-to-high", label: "Price: Low to High" },
  { value: "high-to-low", label: "Price: High to Low" },
  { value: "a-z", label: "Alphabet A-Z" },
  { value: "z-a", label: "Alphabet Z-A" },
  { value: "new-to-old", label: "Date: New to Old" },
  { value: "old-to-new", label: "Date: Old to New" },
  { value: "best-selling", label: "Best Selling" }
];

const ProductListing = ({ products = [] }) => {
  // State management
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState("featured");

  // ViewToggle component merged
  const ViewToggle = () => {
    const handleSortChange = (e) => {
      setSortType(e.target.value);
      setCurrentPage(1);
    };

    return (
      <div className="flex flex-col md:flex-row w-full justify-between bg-white p-4 border-b shadow-sm mb-4 gap-4 md:gap-0">
        <h2 className="text-lg font-semibold">{sortedProducts.length} items</h2>
        
        <div className="flex items-center justify-center md:justify-start">
          <select
            className="border px-3 py-1 rounded-md focus:outline-none w-full md:w-auto"
            value={sortType}
            onChange={handleSortChange}
            aria-label="Sort products"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex gap-2 justify-center md:justify-end">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-md transition-colors ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            aria-label="Grid view"
            aria-pressed={view === "grid"}
          >
            <FaTh size={18} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-md transition-colors ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
            aria-label="List view"
            aria-pressed={view === "list"}
          >
            <FaBars size={18} />
          </button>
        </div>
      </div>
    );
  };

  // ProductCard components merged
  const ProductCard = ({ product }) => {
    const rating = product.rating || (Math.random() * 2 + 3).toFixed(1);
    
    if (view === "grid") {
      return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 p-4 flex flex-col h-full transition-shadow duration-200">
          <div className="w-full h-48 mb-3 flex items-center justify-center bg-gray-50 rounded-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain p-2" 
              loading="lazy"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between items-start">
              <h3 className="text-md font-medium line-clamp-2">{product.name}</h3>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <FaHeart size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              {product.discount && <span className="text-gray-500 line-through text-sm">${product.discount}</span>}
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar 
                    key={index} 
                    className={`text-orange-500 ${index < Math.round(Number(rating)) ? "opacity-100" : "opacity-50"}`} 
                    size={14}
                  />
                ))}
                <span className="text-orange-500 text-sm ml-1">{rating}</span>
              </div>
              <div className="text-sm text-gray-600 mt-2">
                {product.orders} orders • <span className="text-green-600">Free Shipping</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-auto pt-3 inline-block">
                View details
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 py-4 px-6 flex flex-col sm:flex-row items-start gap-6 transition-shadow duration-200">
          <div className="w-full sm:w-40 h-40 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain p-2" 
              loading="lazy"
              width={160}
              height={160}
            />
          </div>
          <div className="flex flex-col justify-between flex-grow w-full">
            <div className="flex justify-between items-start w-full">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {product.discount && <span className="text-gray-500 line-through text-sm">${product.discount}</span>}
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500 ml-2 transition-colors">
                <FaHeart size={20} />
              </button>
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar 
                    key={index} 
                    className={`text-orange-500 ${index < Math.round(Number(rating)) ? "opacity-100" : "opacity-50"}`} 
                    size={14}
                  />
                ))}
                <span className="text-orange-500 text-sm ml-1">{rating}</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              {product.description || "No description available"}
            </p>
            <div className="text-sm text-gray-600 mt-2">
              {product.orders} orders • <span className="text-green-600">Free Shipping</span>
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-3 inline-block">
              View details
            </a>
          </div>
        </div>
      );
    }
  };

  // PaginationControls component merged
  const PaginationControls = () => {
    const handlePageChange = (page) => {
      const validPage = Math.max(1, Math.min(page, totalPages));
      setCurrentPage(validPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (totalPages <= 1) return null;

    return (
      <div className="flex justify-center items-center mt-8 gap-1 sm:gap-2">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1} 
          className={`p-2 rounded-md transition-colors ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
          aria-label="Previous page"
        >
          <FaChevronLeft />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button 
            key={number} 
            onClick={() => handlePageChange(number)} 
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md transition-colors ${currentPage === number ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
            aria-label={`Go to page ${number}`}
          >
            {number}
          </button>
        ))}
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} 
          className={`p-2 rounded-md transition-colors ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
          aria-label="Next page"
        >
          <FaChevronRight />
        </button>
      </div>
    );
  };

  // Sorting logic
  const sortedProducts = useMemo(() => {
    const productsCopy = [...products];
    
    switch(sortType) {
      case "low-to-high":
        return productsCopy.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      case "high-to-low":
        return productsCopy.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      case "a-z":
        return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
      case "z-a":
        return productsCopy.sort((a, b) => b.name.localeCompare(a.name));
      case "new-to-old":
        return productsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "old-to-new":
        return productsCopy.sort((a, b) => new Date(a.date) - new Date(b.date));
      case "best-selling":
        return productsCopy.sort((a, b) => b.orders - a.orders);
      default:
        return productsCopy;
    }
  }, [sortType, products]);

  // Pagination logic
  const productsPerPage = view === "grid" ? 9 : 4;
  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / productsPerPage));
  
  useEffect(() => {
    setCurrentPage(1);
  }, [sortType, view]);

  const currentProducts = useMemo(() => {
    const startIdx = (currentPage - 1) * productsPerPage;
    return sortedProducts.slice(startIdx, startIdx + productsPerPage);
  }, [currentPage, productsPerPage, sortedProducts]);

  return (
    <div className="mx-auto p-4 sm:p-6 max-w-full">
      <ViewToggle />

      <main className="w-full">
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:container md:mx-auto sm:gap-6 w-full">
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            {currentProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <PaginationControls />
    </div>
  );
};

export default memo(ProductListing);