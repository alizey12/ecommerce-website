import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ViewToggle from "../Components/ProductView";

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-orange-500" : "text-gray-300"}
        size={14}
      />
    ))}
    <span className="text-orange-500 text-sm ml-1">{rating.toFixed(1)}</span>
  </div>
);

const ProductsListing = ({ products = [], category = "Mobile Accessories", defaultRating = 4.0, isLoading = false }) => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState(new Set());

  const productsPerPage = view === "grid" ? 9 : 5;
  const totalPages = Math.ceil(products.length / productsPerPage) || 1;
  const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  useEffect(() => setCurrentPage(1), [view, products.length]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const updatedFavorites = new Set(prev);
      updatedFavorites.has(productId) ? updatedFavorites.delete(productId) : updatedFavorites.add(productId);
      return updatedFavorites;
    });
  };

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isLoading) return <div className="text-center py-12">Loading...</div>;
  if (!products.length) return <div className="text-center py-12">No products found</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <ViewToggle view={view} setView={setView} itemCount={products.length} category={category} />
      <div className={`grid ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-4"}`}>
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4 border relative">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
            <button onClick={() => toggleFavorite(product.id)} className="absolute top-2 right-2">
              <FaHeart className={favorites.has(product.id) ? "text-red-500" : "text-gray-400 hover:text-red-500"} size={18} />
            </button>
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            {product.discount && <p className="text-sm text-gray-500 line-through">${product.discount.toFixed(2)}</p>}
            <StarRating rating={product.rating ?? defaultRating} />
            <p className="text-sm text-gray-600">{product.orders} orders • <span className="text-green-600">Free Shipping</span></p>
            <a href={`/products/${product.id}`} className="text-blue-600 hover:text-blue-800 text-sm">View details</a>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 items-center gap-2">
          <button onClick={() => changePage(currentPage - 1)} disabled={currentPage === 1} className="p-2">
            <FaChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button key={number} onClick={() => changePage(number)} className={`p-2 ${currentPage === number ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}>{number}</button>
          ))}
          <button onClick={() => changePage(currentPage + 1)} disabled={currentPage === totalPages} className="p-2">
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
  defaultRating: PropTypes.number,
  isLoading: PropTypes.bool,
};

export default ProductsListing;
