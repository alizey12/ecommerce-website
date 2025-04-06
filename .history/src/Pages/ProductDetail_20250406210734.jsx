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
  FaPaperPlane
} from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
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

          {/* Product Info */}
          <div className="w-full lg:w-1/2 space-y-4">
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
              <utton className="flex-1 bg-blue-600 hover:bg-blue-700">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </utton>
              <Button variant="outline" className="flex-1">
                <FaHeart className="mr-2" /> Wishlist
              </Button>
            </div>

            {/* Share Button */}
            <div className="pt-2">
              <button className="text-blue-600 flex items-center text-sm">
                <FaShareAlt className="mr-2" /> Share this product
              </button>
            </div>

            {/* Supplier Info */}
            <div className="border-t pt-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 text-blue-800 font-bold w-10 h-10 rounded-full flex items-center justify-center">
                  {product.supplier?.charAt(0) || 'S'}
                </div>
                <div>
                  <div className="font-semibold">Supplier</div>
                  <div className="text-sm text-gray-500">{product.supplier || 'Generic Supplier'}</div>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <FaMapMarkerAlt className="mr-2" />
                {product.location || 'Worldwide'}
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <FaShieldAlt className="mr-2" />
                Verified Seller
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <FaPaperPlane className="mr-2" />
                Worldwide shipping
              </div>
              <Button className="w-full mt-3 bg-blue-600 hover:bg-blue-700">
                Contact Supplier
              </Button>
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
                  
                  <div>
                    <h3 className="font-bold text-lg mb-4">Key Features</h3>
                    <ul className="space-y-2 text-gray-600">
                      {product.features?.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheckCircle className="text-green-500 mr-2 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {activeTab === "reviews" && (
            <div>
              <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map(review => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center mr-4">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
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
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
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
                        <FaCheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-medium">Standard Shipping</h5>
                        <p className="text-gray-600 text-sm">Free on all orders over $50</p>
                        <p className="text-gray-500 text-xs mt-1">Estimated delivery: 3-5 business days</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <FaCheckCircle className="h-4 w-4 text-green-600" />
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
                        <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>30-day easy returns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Free returns for store credit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <FaCheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
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
              {relatedProducts.map(product => (
                <Link 
                  to={`/product/${product.id}`} 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <div className="w-full h-40 bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="max-w-full max-h-full object-contain p-2" 
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-md font-bold text-gray-900">${product.price.toFixed(2)}</span>
                      {product.discount && (
                        <span className="text-xs text-gray-500 line-through">${product.discount.toFixed(2)}</span>
                      )}
                    </div>
                    {product.discount && (
                      <span className="text-xs text-green-600 font-medium">
                        Save {Math.round((1 - product.price/product.discount) * 100)}%
                      </span>
                    )}
                    <div className="flex items-center mt-1 text-yellow-500">
                      <FaStar className="text-sm" />
                      <span className="text-xs ml-1 text-gray-600">{product.rating?.toFixed(1) || '4.5'}</span>
                    </div>
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
    </>
  );
};

export default ProductDetail;