import { FaStar, FaHeart, FaChevronLeft, FaChevronRight, FaShoppingCart, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import productsByCategory from "../Components/ProductsListing";
import Footer from "../Pages/Footer";
import Header from "module";
const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Find the product by ID
  const product = productsByCategory.allProducts.find(p => p.id === parseInt(id));
  
  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  // Sample images gallery - in a real app, this would come from the product data
  const productImages = [
    product.image,
    "/src/assets/product-alt1.jpg",
    "/src/assets/product-alt2.jpg",
    "/src/assets/product-alt3.jpg"
  ];

  // Related products - in a real app, this would be filtered by category or other criteria
  const relatedProducts = productsByCategory.allProducts.slice(0, 4);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 100) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
    <Header />
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-600 mb-6">
        <Link to="/" className="hover:text-blue-600">Home</Link> &gt; 
        <Link to="/clothing" className="hover:text-blue-600"> Clothing</Link> &gt; 
        <Link to="/clothing/mens-wear" className="hover:text-blue-600"> Mens wear</Link> &gt; 
        <span className="text-gray-900"> Summer clothing</span>
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
              <span className="text-green-600 text-sm ml-2">154 sold</span>
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
                <div className="mt-2 text-sm text-gray-600">
                  <p><span className="font-medium">90-top pcs:</span> $90.00</p>
                  <p><span className="font-medium">100-700 pcs:</span> $78.00</p>
                  <p><span className="font-medium">700+ pcs:</span> $70.00</p>
                  <p className="text-blue-600">Price: Negotiable</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Type:</h3>
                <p className="text-gray-600">Classic shoes</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Material:</h3>
                <p className="text-gray-600">Plastic material</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Design:</h3>
                <p className="text-gray-600">Modern nice</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Customization:</h3>
                <p className="text-gray-600">Customized logo and design custom packages</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Protection:</h3>
                <p className="text-gray-600">Refund Policy</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Warranty:</h3>
                <p className="text-gray-600">2 years full warranty</p>
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
            Reviews
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === "shipping" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
          >
            Shipping
          </button>
          <button
            onClick={() => setActiveTab("seller")}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${activeTab === "seller" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
          >
            About seller
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {activeTab === "description" && (
          <div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <table className="w-full text-sm text-left text-gray-600">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Model</td>
                      <td className="py-2">#8786867</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Style</td>
                      <td className="py-2">Classic style</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Certificate</td>
                      <td className="py-2">ISO-898921212</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Size</td>
                      <td className="py-2">34mm x 450mm x 19mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Memory</td>
                      <td className="py-2">360B RAM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Some great feature name here</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Duis aute irure dolor in reprehenderit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Some great feature name here</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === "reviews" && (
          <div>Reviews content will be displayed here</div>
        )}
        
        {activeTab === "shipping" && (
          <div>Shipping information will be displayed here</div>
        )}
        
        {activeTab === "seller" && (
          <div>Seller information will be displayed here</div>
        )}
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Related products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {relatedProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
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
            </div>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-bold text-blue-800 mb-2">Super discount on more than 100 USD</h3>
        <p className="text-gray-600">Have you ever finally just write dummy info</p>
      </div>
    </div>
  );
};

export default ProductDetail;