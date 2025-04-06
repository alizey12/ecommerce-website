import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { products, reviews, relatedProducts } from "@/data/db";
import { FaHeart, FaShareAlt } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const defaultImage = "/src/assets/placeholder.jpg";
  const productImages = product?.images?.length
    ? product.images
    : [product.image || defaultImage, defaultImage, defaultImage];

  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [activeTab, setActiveTab] = useState("description");
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const { addToCart, cartItems } = useCart();
  const alreadyInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isAddingToCart || alreadyInCart) return;
    setIsAddingToCart(true);

    setTimeout(() => {
      addToCart(product);
      setIsAddingToCart(false);
    }, 600); // simulate delay
  };

  if (!product) return <div className="text-center mt-20">Product not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Product Images */}
        <div>
          <img
            src={activeImage}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-xl border"
          />
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  activeImage === img ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex gap-2 text-gray-600 text-xl">
              <button aria-label="Add to Wishlist">
                <FaHeart />
              </button>
              <button aria-label="Share Product">
                <FaShareAlt />
              </button>
            </div>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="text-2xl font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </div>

          <div className="text-sm text-gray-500">In stock: {product.stock}</div>

          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart || alreadyInCart}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-60 w-fit"
          >
            {alreadyInCart
              ? "In Cart"
              : isAddingToCart
              ? "Adding..."
              : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-12">
        <div className="flex border-b gap-6">
          {["description", "reviews", "shipping"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize py-2 font-medium border-b-2 transition ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 text-gray-700">
          {activeTab === "description" && <p>{product.description}</p>}
          {activeTab === "shipping" && (
            <ul className="list-disc list-inside space-y-2">
              <li>Free shipping on orders over $100</li>
              <li>Delivered in 5-7 business days</li>
              <li>Return within 30 days of delivery</li>
            </ul>
          )}
          {activeTab === "reviews" && (
            <div className="space-y-4">
              {reviews.map((review, i) => (
                <div key={i} className="border p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800">{review.user}</h4>
                  <p className="text-sm text-gray-600 italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Related Products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {relatedProducts.map((rp) => (
              <div
                key={rp.id}
                className="border rounded-lg p-3 hover:shadow transition"
              >
                <img
                  src={rp.image || defaultImage}
                  alt={rp.name}
                  className="h-32 w-full object-contain mb-2 rounded"
                />
                <h4 className="text-sm font-medium text-gray-700">{rp.name}</h4>
                <span className="text-blue-600 font-bold">${rp.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
