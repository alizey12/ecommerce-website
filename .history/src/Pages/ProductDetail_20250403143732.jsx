import { FaStar, FaHeart, FaShoppingCart, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
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
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Return to Home
        </button>
      </div>
    );
  }

  // Use product.images if available, otherwise fallback to default images
  const productImages = product.images || [
    product.image,
    "/src/assets/product-alt1.jpg",
    "/src/assets/product-alt2.jpg",
    "/src/assets/product-alt3.jpg"
  ];

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
    <div className="container mx-auto px-4 py-8">
     <Header
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link> &gt; 
        <Link to={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-600"> {product.category}</Link> &gt; 
        <span className="text-gray-900"> {product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4 h-96 flex items-center justify-center">
            <img 
              src={productImages[selectedImage]} 
              alt={product.name} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {productImages.map((img, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`bg-gray-100 rounded-md h-20 flex items-center justify-center ${selectedImage === index ? "ring-2 ring-blue-500" : ""}`}
              >
                <img src={img} alt={`Product view ${index + 1}`} className="max-w-full max-h-full object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <div className="border-b pb-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`text-orange-500 ${i < Math.round(product.rating) ? "opacity-100" : "opacity-30"}`} 
                  />
                ))}
                <span className="text-orange-500 text-sm ml-1">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-gray-500 text-sm ml-2">{product.orders} orders</span>
              <span className="text-green-600 text-sm ml-2">Free Shipping</span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Price:</h3>
                <div className="mt-1">
                  <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.discount && (
                    <span className="text-gray-500 line-through text-lg ml-2">${product.discount.toFixed(2)}</span>
                  )}
                </div>
              </div>

              {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <h3 className="font-medium text-gray-900">{key}:</h3>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}

              <div>
                <h3 className="font-medium text-gray-900">Features:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quantity and Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button 
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md flex-1 flex items-center justify-center gap-2">
              <FaShoppingCart /> Add to Cart
            </button>
            
            <button className="border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-md flex items-center justify-center gap-2">
              <FaHeart className="text-red-500" /> Wishlist
            </button>
            
            <button className="border border-gray-300 hover:bg-gray-50 py-2 px-4 rounded-md flex items-center justify-center gap-2">
              <FaShareAlt /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 border-b">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === "description" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === "reviews" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
          >
            Reviews ({product.reviews?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === "shipping" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
          >
            Shipping
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
                            className={`text-orange-500 ${i < review.rating ? "opacity-100" : "opacity-30"}`} 
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
              <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
            )}
          </div>
        )}
        
        {activeTab === "shipping" && (
          <div>
            <h3 className="text-xl font-bold mb-6">Shipping Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Delivery Options</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free standard shipping on all orders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Express shipping available for $9.99</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>International shipping available</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Estimated Delivery Times</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Standard: 3-5 business days</li>
                  <li>Express: 1-2 business days</li>
                  <li>International: 7-14 business days</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Related products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {relatedProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="w-full h-40 bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-w-full max-h-full object-contain p-2" 
                    />
                  </div>
                  <h3 className="text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
                  <div className="text-md font-bold text-gray-900">${product.price.toFixed(2)}</div>
                  {product.discount && (
                    <div className="text-xs text-gray-500 line-through">${product.discount.toFixed(2)}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Promo Banner */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-bold text-blue-800 mb-2">Super discount on more than 100 USD</h3>
        <p className="text-gray-600">Free shipping on all orders over $100</p>
      </div>
      
    </div>
  );
};

export default ProductDetail;