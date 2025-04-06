import { FaStar, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from "react";
import ViewToggle from "../Components/ProductView";

const ProductsListing = ({ products = [], category = "Mobile Accessories" }) => {
  const [view, setView] = useState("list"); // Default to list view
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = view === "grid" ? 9 : 5;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-6xl mx-auto p-5">
      <ViewToggle 
        view={view} 
        setView={setView} 
        itemCount={products.length} 
        category={category} 
      />

      <main>
        {view === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ height: "calc(3 * (theme => theme.spacing[96]))" }}>
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border p-4 h-full flex flex-col"
              >
                <div className="w-full h-48 mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {product.discount && (
                      <span className="text-gray-500 line-through text-sm">${product.discount}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"} />
                    ))}
                    <span className="text-orange-500 text-sm">{product.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {product.orders} orders • <span className="text-green-600">Free Shipping</span>
                  </div>
                  <a href="#" className="text-blue-600 font-medium text-sm mt-auto pt-2">
                    View details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border p-4 flex items-start gap-4 w-full"
                style={{ minWidth: "100%" }}
              >
                <div className="w-40 h-40 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xl font-bold text-gray-900">${product.price}</span>
                        {product.discount && (
                          <span className="text-gray-500 line-through text-sm">${product.discount}</span>