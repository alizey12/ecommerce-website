import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import PropTypes from 'prop-types';
import ViewToggle from "../Components/ProductView";

const StarRating = ({ rating }) => {
  const stars = useMemo(() => 
    [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`${index < rating ? "text-orange-500" : "text-gray-300"} inline-block`}
        size={14}
      />
    ))
  , [rating]);

  return (
    <div className="flex items-center gap-1">
      {stars}
      <span className="text-orange-500 text-sm ml-1">{rating.toFixed(1)}</span>
    </div>
  );
};

const ProductsListing = ({ 
  products = [], 
  category = "Mobile Accessories", 
  defaultRating = 4.0,
  isLoading = false
}) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());

  // Calculate pagination based on current view
  const productsPerPage = view === "grid" ? 9 : 5;
  const totalPages = Math.max(1, Math.ceil(products.length / productsPerPage));

  // Reset to page 1 when view changes or products array changes
  useEffect(() => {
    setCurrentPage(1);
  }, [view, products.length]);

  // Memoized pagination calculations
  const { currentProducts, hasNextPage, hasPrevPage } = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    return {
      currentProducts,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1
    };
  }, [currentPage, products, productsPerPage, totalPages]);

  const toggleFavorite = useCallback((productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  }, []);

  const paginate = useCallback((pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [totalPages]);

  const nextPage = useCallback(() => {
    if (hasNextPage) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hasNextPage]);

  const prevPage = useCallback(() => {
    if (hasPrevPage) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hasPrevPage]);

  const renderProductGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
      {currentProducts.map((product) => (
        <div 
          key={product.id} 
          className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 p-4 flex flex-col transition-all duration-200 h-full"
          data-testid="product-card"
        >
          <div className="relative w-full h-48 mb-3 flex items-center justify-center bg-gray-50 rounded-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain p-2" 
              loading="lazy"
            />
            <button 
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all"
              aria-label={favorites.has(product.id) ? "Remove from favorites" : "Add to favorites"}
            >
              <FaHeart 
                size={18} 
                className={favorites.has(product.id) ? "text-red-500" : "text-gray-400 hover:text-red-500"} 
              />
            </button>
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
              <StarRating rating={product.rating ?? defaultRating} />
            </div>
            <div className="text-sm text-gray-600 mt-2">
              {product.orders} orders • <span className="text-green-600">Free Shipping</span>
            </div>
            <a 
              href={`/products/${product.id}`} 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-auto pt-3 inline-block"
            >
              View details
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProductList = () => (
    <div className="flex flex-col gap-4 w-full">
      {currentProducts.map((product) => (
        <div 
          key={product.id} 
          className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden border border-gray-100 p-4 flex flex-col sm:flex-row items-start gap-4 transition-all duration-200"
          data-testid="product-card"
        >
          <div className="relative w-full sm:w-40 h-40 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain p-2" 
              loading="lazy"
            />
            <button 
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-all"
              aria-label={favorites.has(product.id) ? "Remove from favorites" : "Add to favorites"}
            >
              <FaHeart 
                size={18} 
                className={favorites.has(product.id) ? "text-red-500" : "text-gray-400 hover:text-red-500"} 
              />
            </button>
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
            </div>
            <div className="mt-2">
              <StarRating rating={product.rating ?? defaultRating} />
            </div>
            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
              {product.description || "No description available"}
            </p>
            <div className="text-sm text-gray-600 mt-2">
              {product.orders} orders • <span className="text-green-600">Free Shipping</span>
            </div>
            <a 
              href={`/products/${product.id}`} 
              className="text-blue-600 hover:text-blue-800 font-medium text-sm mt-3 inline-block"
            >
              View details
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPagination = () => (
    <div className="flex justify-center mt-8 items-center gap-2">
      <button
        onClick={prevPage}
        disabled={!hasPrevPage}
        className={`p-2 rounded-md ${hasPrevPage ? 'hover:bg-gray-100 text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}
        aria-label="Previous page"
      >
        <FaChevronLeft />
      </button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`w-10 h-10 rounded-md ${currentPage === number ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-700'}`}
        >
          {number}
        </button>
      ))}
      
      <button
        onClick={nextPage}
        disabled={!hasNextPage}
        className={`p-2 rounded-md ${hasNextPage ? 'hover:bg-gray-100 text-gray-700' : 'text-gray-400 cursor-not-allowed'}`}
        aria-label="Next page"
      >
        <FaChevronRight />
      </button>
    </div>
  );

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-96"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <ViewToggle 
        view={view} 
        setView={setView} 
        itemCount={products.length} 
        category={category} 
      />

      <main className="w-full">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        ) : view === "grid" ? renderProductGrid() : renderProductList()}
      </main>

      {products.length > 0 && totalPages > 1 && renderPagination()}
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
      description: PropTypes.string,
    })
  ),
  category: PropTypes.string,
  defaultRating: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default ProductsListing;