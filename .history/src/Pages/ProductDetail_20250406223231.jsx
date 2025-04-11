import { useState } from "react";
import { 
  FaStar, 
  FaHeart, 
  FaShoppingCart, 
  FaShareAlt, 
  FaChevronLeft, 
  FaChevronRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaPaperPlane,
  FaBox,
  FaGlobeAmericas,
  FaEnvelope,
  FaUserAlt,
  FaRegBookmark
} from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import productsByCategory from "../Pages/Products";
import Footer from "./Footer";
import Header from "./Header";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Find the product by ID
  const product = productsByCategory.allProducts.find(p => p.id === parseInt(id));
  
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

  // Use product.images if available, otherwise fallback to default images
  const productImages = product.images || [product.image];

  // Get related products from the same category
  const relatedProducts = productsByCategory.allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 100) {
      setQuantity(newQuantity);
    }
  };

  return (
    <> 
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6 flex items-center">
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
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-xl shadow">
          {/* Product Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-96 mb-4">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-contain rounded-lg"
              />
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                onClick={() => setSelectedImage(prev => (prev - 1 + productImages.length) % productImages.length)}
              >
                <FaChevronLeft className="text-gray-700" />
              </button>
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                onClick={() => setSelectedImage(prev => (prev + 1) % productImages.length)}
              >
                <FaChevronRight className="text-gray-700" />
              </button>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index}`}
                  className={`w-16 h-16 border rounded cursor-pointer object-cover ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Product Details (3/5 width) */}
            <div className="lg:col-span-3 space-y-4">
              <p className="text-green-600 font-semibold flex items-center">
                <FaCheckCircle className="mr-2" /> In stock
              </p>
              <h1 className="text-2xl font-bold leading-tight">
                {product.name}
              </h1>

              {/* Ratings */}
              <div className="flex items-center text-yellow-500 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < (product.rating || 4) ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
                <span className="text-orange-500 font-semibold">{product.rating?.toFixed(1) || '4.5'}</span>
                <span className="text-gray-500">· {product.reviews?.length || 0} reviews</span>
                <span className="text-gray-500">· {product.sold || 0} sold</span>
              </div>

              {/* Price */}
              <div className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
                {product.discount && (
                  <span className="text-sm text-gray-500 line-through ml-2">${product.discount.toFixed(2)}</span>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    disabled={quantity >= 100}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center">
                  <FaShoppingCart className="mr-2" /> Add to Cart
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100 flex items-center justify-center">
                  <FaHeart className="mr-2" /> Wishlist
                </button>
              </div>

              {/* Share Button */}
              <div className="pt-2">
                <button className="text-blue-600 flex items-center text-sm">
                  <FaShareAlt className="mr-2" /> Share this product
                </button>
              </div>
            </div>

            {/* Supplier Info (2/5 width) - Wider container box */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <FaBox className="text-gray-500 mr-3 text-lg" />
                    <h3 className="text-lg font-semibold">Supplier Information</h3>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Verified
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="relative w-5 h-5">
                        <div className="absolute top-0 w-full h-1/3 bg-black"></div>
                        <div className="absolute top-1/3 w-full h-1/3 bg-red-600"></div>
                        <div className="absolute bottom-0 w-full h-1/3 bg-yellow-400"></div>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{product.supplier?.name || 'Generic Supplier'}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        {product.supplier?.location || 'Worldwide'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center text-sm">
                      <FaShieldAlt className="text-green-500 mr-2" />
                      <span className="font-medium">Trusted Seller</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-500">2+ years on platform</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm">
                    <FaGlobeAmericas className="text-gray-500 mr-2" />
                    <span>Ships to {product.supplier?.shipping || '100+ countries'}</span>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors">
                      <FaEnvelope className="mr-2" />
                      Contact Supplier
                    </button>
                    <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center transition-colors">
                      <FaUserAlt className="mr-2" />
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {/* ... */}
      </div>
        {/* Promo Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-center text-white">
          <h3 className="text-lg font-bold mb-2">Super discount on more than 100 USD</h3>
          <p className="text-blue-100">Free shipping on all orders over $100</p>
        </div>
      
      <Footer />
    </>
  );
};

export default ProductDetail;