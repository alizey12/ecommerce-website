import { FaStar, FaHeart, FaShoppingCart, FaShareAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { CheckCircle, Star, MessageCircle, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className="container mx-auto px-4 bg-emerald-300 py-8 max-w-7xl">
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white shadow rounded-xl max-w-6xl mx-auto">
      {/* Left: Thumbnails */}
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mb-4">
          {thumbnails.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`thumb-${index}`}
              className="w-14 h-14 border rounded cursor-pointer object-cover"
            />
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="space-y-4">
        <p className="text-green-600 font-semibold flex items-center">
          <FaCheckCircle className="mr-2" /> In stock
        </p>
        <h1 className="text-2xl font-bold leading-tight">
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </h1>

        {/* Ratings */}
        <div className="flex items-center text-yellow-500 space-x-2">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-orange-500 font-semibold">9.3</span>
          <span className="text-gray-500">· 32 reviews</span>
          <span className="text-gray-500">· 154 sold</span>
        </div>

        {/* Pricing tiers */}
        <div className="grid grid-cols-3 gap-4 bg-orange-50 p-4 rounded">
          {prices.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-red-600 text-lg font-bold">{item.price}</p>
              <p className="text-sm text-gray-500">{item.range}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Price:</strong> Negotiable</p>
          <p><strong>Type:</strong> Classic shoes</p>
          <p><strong>Material:</strong> Plastic material</p>
          <p><strong>Design:</strong> Modern nice</p>
          <p><strong>Customization:</strong> Customized logo and design custom packages</p>
          <p><strong>Protection:</strong> Refund Policy</p>
          <p><strong>Warranty:</strong> 2 years full warranty</p>
        </div>
      </div>

      {/* Supplier Box */}
      <div className="col-span-1 md:col-span-2 md:flex justify-between items-start mt-6">
        <div className="bg-gray-50 p-4 rounded border w-full md:w-1/3 space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-lg font-bold text-blue-800">
              R
            </div>
            <div>
              <p className="font-semibold">Supplier</p>
              <p className="text-sm text-gray-600">Guanjoi Trading LLC</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FiMapPin className="mr-2" />
            Germany, Berlin
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FaShieldAlt className="mr-2" />
            Verified Seller
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <BsFillSendFill className="mr-2" />
            Worldwide shipping
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full mt-2 hover:bg-blue-700 transition">
            Send inquiry
          </button>
          <button className="text-blue-600 underline w-full text-center">
            Seller’s profile
          </button>
        </div>

        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <button className="text-gray-600 border px-4 py-2 rounded hover:text-blue-600">
            ❤️ Save for later
          </button>
        </div>
      </div>
    </div>

          {/* Product Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-white rounded-2xl shadow-lg">
      {/* Left: Image Gallery */}
      <div className="col-span-1 flex flex-col items-center gap-2">
        <img
          src="https://via.placeholder.com/300x300"
          alt="Main Product"
          className="w-full rounded-xl"
        />
        <div className="flex gap-2 overflow-x-auto pt-2">
          {[...Array(6)].map((_, idx) => (
            <img
              key={idx}
              src="https://via.placeholder.com/60"
              alt="Thumb"
              className="w-14 h-14 rounded-md border border-gray-300"
            />
          ))}
        </div>
      </div>

      {/* Center: Product Info */}
      <div className="col-span-1 md:col-span-1 space-y-2">
        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <CheckCircle size={18} /> In stock
        </div>
        <h2 className="text-xl font-bold leading-tight">
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </h2>

        <div className="flex items-center gap-2 text-orange-500 text-sm">
          <Star size={16} /> 9.3
          <span className="text-gray-500">|</span>
          <span className="text-gray-600">32 reviews</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-600">154 sold</span>
        </div>

        <div className="bg-orange-50 border rounded-md p-3 space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-red-600">$98.00</span>
            <span>50-100 pcs</span>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>$90.00</span>
            <span>100-700 pcs</span>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>$78.00</span>
            <span>700+ pcs</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-1 pt-3">
          <div><strong>Price:</strong> Negotiable</div>
          <div><strong>Type:</strong> Classic shoes</div>
          <div><strong>Material:</strong> Plastic material</div>
          <div><strong>Design:</strong> Modern nice</div>
          <div><strong>Customization:</strong> Customized logo and design custom packages</div>
          <div><strong>Protection:</strong> Refund Policy</div>
          <div><strong>Warranty:</strong> 2 years full warranty</div>
        </div>
      </div>

      {/* Right: Supplier Info */}
      <div className="col-span-1 border rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-teal-100 text-teal-800 font-bold w-10 h-10 rounded-full flex items-center justify-center">
            R
          </div>
          <div>
            <div className="font-semibold">Supplier</div>
            <div className="text-sm text-gray-500">Guanjoi Trading LLC</div>
          </div>
        </div>
        <div className="text-sm text-gray-600 space-y-1 pt-2">
          <div>🇩🇪 Germany, Berlin</div>
          <div>✅ Verified Seller</div>
          <div>🌍 Worldwide shipping</div>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-xl">
          Send inquiry
        </Button>
        <button className="w-full text-blue-600 text-sm font-medium underline">Seller’s profile</button>
        <div className="text-center pt-2">
          <button className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600">
            <Heart size={16} /> Save for later
          </button>
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
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
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