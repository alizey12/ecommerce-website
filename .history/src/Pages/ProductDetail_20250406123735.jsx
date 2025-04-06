import { FaStar, FaHeart, FaShoppingCart, FaShareAlt, FaChevronLeft, FaChevronRight, FaRegCreditCard } from "react-icons/fa";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import productsData from "../Pages/Products";
import Footer from "./Footer";
import Header from "./Header";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // Find the product by ID from productsData
  const product = productsData.allProducts.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </button>
      </div>
    );
  }

  // Handle missing images safely
  const productImages = product.images?.length ? product.images : [product.image || '/placeholder-product.jpg'];

  // Get related products from the same category
  const relatedProducts = productsData.allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, Math.min(100, prev + change)));
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || productImages[0],
      quantity: quantity,
      description: product.description,
      seller: product.seller || "Generic Seller"
    });
    
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    
    setTimeout(() => {
      setIsAddingToCart(false);
      navigate('/cart');
    }, 2000);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image || productImages[0],
      quantity: quantity,
      description: product.description,
      seller: product.seller || "Generic Seller"
    });
    navigate('/cart');
  };

  const handleAddToWishlist = () => {
    toast.info("Added to wishlist!");
  };

const handleShareProduct = () => {
  if (navigator.share) {
    navigator
      .share({
        title: product.name,
        text: `Check out this ${product.name} on our store!`,
        url: window.location.href,
      })
      .catch((error) => {
        console.error("Share failed:", error);
        toast.error("Error sharing product");
      });
  } else {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  }
};

  return (
    <> 
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-6 flex items-center">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link 
            to={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} 
            className="hover:text-blue-600 transition-colors"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 h-96 flex items-center justify-center">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain p-4"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/placeholder-product.jpg';
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((img, index) => (
                <button 
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`bg-gray-100 rounded-lg h-20 flex items-center justify-center transition-all ${
                    selectedImage === index ? "ring-2 ring-blue-500" : "hover:ring-1 hover:ring-gray-300"
                  }`}
                  aria-label={`View product image ${index + 1}`}
                >
                  <img 
                    src={img} 
                    alt={`Product view ${index + 1}`} 
                    className="max-w-full max-h-full object-contain p-1" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/placeholder-product.jpg';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="border-b pb-6 mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4 flex-wrap gap-2">
                <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-yellow-400 ${i < Math.round(product.rating) ? "opacity-100" : "opacity-30"}`} 
                    />
                  ))}
                  <span className="text-yellow-600 text-sm ml-1">{product.rating.toFixed(1)}</span>
                </div>
                <span className="text-gray-500 text-sm">• {product.orders} orders</span>
                <span className="text-green-600 text-sm font-medium">• Free Shipping</span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Price:</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.discount && (
                      <>
                        <span className="text-gray-500 line-through text-lg">${product.discount.toFixed(2)}</span>
                        <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-0.5 rounded">
                          {Math.round((1 - product.price/product.discount) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <h3 className="font-medium text-gray-900">{key}:</h3>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}

                {product.features?.length > 0 && (
                  <div>
                    <h3 className="font-medium text-gray-900">Features:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <FaChevronLeft size={12} />
                </button>
                <span className="px-4 py-2 w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
                  disabled={quantity >= 100}
                  aria-label="Increase quantity"
                >
                  <FaChevronRight size={12} />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                  isAddingToCart ? "bg-green-500" : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
                aria-label="Add to cart"
              >
                {isAddingToCart ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Added!
                  </>
                ) : (
                  <>
                    <FaShoppingCart /> Add to Cart
                  </>
                )}
              </button>
              
              <button 
                onClick={handleBuyNow}
                className="flex-1 py-3 px-6 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                aria-label="Buy now"
              >
                <FaRegCreditCard /> Buy Now
              </button>
            </div>

            {/* Additional Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button 
                onClick={handleAddToWishlist}
                className="flex-1 border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                aria-label="Add to wishlist"
              >
                <FaHeart className="text-red-500" /> 
                <span className="hidden sm:inline">Wishlist</span>
              </button>
              
              <button 
                onClick={handleShareProduct}
                className="flex-1 border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                aria-label="Share product"
              >
                <FaShareAlt /> 
                <span className="hidden sm:inline">Share</span>
              </button>
            </div>

            {/* Delivery Info */}
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-1">Free Delivery</h4>
                  <p className="text-sm text-blue-600">
                    Enter your postal code for delivery availability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 border-b">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("description")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "description" 
                  ? "border-blue-500 text-blue-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-label="View product description"
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "reviews" 
                  ? "border-blue-500 text-blue-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-label="View product reviews"
            >
              Reviews ({product.reviews?.length || 0})
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === "shipping" 
                  ? "border-blue-500 text-blue-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              aria-label="View shipping information"
            >
              Shipping & Returns
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === "description" && (
            <div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              {product.specifications && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Specifications</h3>
                    <table className="w-full text-sm text-left text-gray-600">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key} className="border-b">
                            <td className="py-2 font-medium">{key}</td>
                            <td className="py-2">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {product.features?.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg mb-4">Key Features</h3>
                      <ul className="space-y-2 text-gray-600">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          
          {activeTab === "reviews" && (
            <div>
              <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>
              {product.reviews?.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map(review => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mr-4">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={`text-yellow-400 ${i < review.rating ? "opacity-100" : "opacity-30"}`} 
                            />
                          ))}
                        </div>
                        <span className="font-medium">{review.author}</span>
                        <span className="text-gray-500 text-sm ml-4">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-gray-100 inline-block p-4 rounded-full mb-4">
                    <FaStar className="text-gray-400 text-2xl" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">No reviews yet</h4>
                  <p className="text-gray-600 mb-4">Be the first to review this product!</p>
                  <button 
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    aria-label="Write a review"
                  >
                    Write a Review
                  </button>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "shipping" && (
            <div>
              <h3 className="text-xl font-bold mb-6">Shipping & Returns</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4 text-lg">Delivery Options</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Standard Shipping</h5>
                        <p className="text-gray-600 text-sm">Free on all orders over $50</p>
                        <p className="text-gray-500 text-xs mt-1">Estimated delivery: 3-5 business days</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium">Express Shipping</h5>
                        <p className="text-gray-600 text-sm">$9.99 for orders under $50</p>
                        <p className="text-gray-500 text-xs mt-1">Estimated delivery: 1-2 business days</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-lg">Return Policy</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>30-day easy returns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free returns for store credit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Refund to original payment method</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">You may also like</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {relatedProducts.map(relatedProduct => (
                <Link 
                  to={`/product/${relatedProduct.id}`} 
                  key={relatedProduct.id} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                  aria-label={`View ${relatedProduct.name}`}
                >
                  <div className="p-4">
                    <div className="w-full h-40 bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="max-w-full max-h-full object-contain p-2" 
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = '/placeholder-product.jpg';
                        }}
                      />
                    </div>
                    <h3 className="text-sm font-medium line-clamp-2 mb-1">{relatedProduct.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-md font-bold text-gray-900">${relatedProduct.price.toFixed(2)}</span>
                      {relatedProduct.discount && (
                        <span className="text-xs text-gray-500 line-through">${relatedProduct.discount.toFixed(2)}</span>
                      )}
                    </div>
                    {relatedProduct.discount && (
                      <span className="text-xs text-green-600 font-medium">
                        Save {Math.round((1 - relatedProduct.price/relatedProduct.discount) * 100)}%
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Promo Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-center text-white">
          <h3 className="text-lg font-bold mb-2">Super discount on more than 100 USD</h3>
          <p className="text-blue-100">Free shipping on all orders over $100</p>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default ProductDetail;