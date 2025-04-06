import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import productsByCategory from "../Pages/Products";
import ViewToggle from "../Components/ProductView";

const ProductsListing = ({ products = [], }) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
<ViewToggle view={view} setView={setView} itemCount={products.length} products={products} />

  // Pagination Logic
  const productsPerPage = view === "grid" ? 9 : 4;
  const totalPages = Math.ceil(products.length / productsPerPage);
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [view, totalPages]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth"});
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

  // Star Rating Component with Random Ratings
  const StarRating = () => {
    const [rating, setRating] = useState(0);
    useEffect(() => {
      setRating((Math.random() * 2 + 3).toFixed(1)); // Generates rating between 3.0 - 5.0
    }, []);
      const [view, setView] = useState("grid");

    const [sortType, setSortType] = useState("featured");
    const [sortedProducts, setSortedProducts] = useState([...products]);
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
    <div className="mx-auto p-4 sm:p-6  max-w-full">
      <ViewToggle 
        view={view} 
        setView={setView} 
        itemCount={productsByCategory.allProducts.length} 
        products={productsByCategory.allProducts} 
        sortType={sortType} 
        setSortType={setSortType} 
        setSortedProducts={setSortedProducts}
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
    <button 
      className="text-gray-400 hover:text-red-500 transition-colors" 
      aria-label="Add to favorites"
    >
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
    <a 
      href="#" 
      className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-auto pt-3 inline-block"
    >
      View details
    </a>
  </div>
</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col  gap-4 w-full">
            {currentProducts.map(({ id, image, name, price, discount, orders, description }) => (
              <div 
                key={id} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 py-4 px-20  flex flex-col sm:flex-row items-start gap-9 transition-all duration-200"
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
                    <button className="text-gray-400 hover:text-red-500 ml-2 transition-colors" aria-label="Add to favorites">
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
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-3 inline-block"
                  >
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
            className={`p-2 rounded-md transition-colors ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
            aria-label="Previous page"
          >
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button 
              key={number} 
              onClick={() => paginate(number)} 
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md transition-colors ${currentPage === number ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              aria-label={`Page ${number}`}
            >
              {number}
            </button>
          ))}
          <button 
            onClick={nextPage} 
            disabled={currentPage === totalPages} 
            className={`p-2 rounded-md transition-colors ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-blue-600 hover:bg-blue-50"}`}
            aria-label="Next page"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsListing;
