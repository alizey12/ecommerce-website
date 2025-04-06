import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaChevronLeft, FaChevronRight, FaShoppingBasket } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";

const CartPage = ({ cartItems, updateCartItem, removeFromCart, clearCart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const taxRate = 0.14;
  const tax = subtotal * taxRate;

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cartItems]);

  const handleApplyCoupon = () => {
    if (coupon === "SAVE60") {
      setDiscount(60);
      setIsCouponApplied(true);
    } else {
      setDiscount(0);
      setIsCouponApplied(false);
    }
  };

  const handleRemoveCoupon = () => {
    setCoupon("");
    setDiscount(0);
    setIsCouponApplied(false);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 100) {
      updateCartItem(id, newQuantity);
    }
  };

  const total = subtotal - discount + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20 flex flex-col items-center justify-center">
        <FaShoppingBasket className="text-gray-300 text-6xl mb-6" />
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet</p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Shopping Cart ({cartItems.length})</h2>

        {/* Cart Items */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                <div className="w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                      <p className="text-sm text-gray-400 mt-1">Seller: {item.seller}</p>
                    </div>
                    <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        <FaChevronLeft size={12} />
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                        disabled={item.quantity >= 100}
                      >
                        <FaChevronRight size={12} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
                    >
                      <FaTrashAlt /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between items-center pt-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
              >
                <FaChevronLeft size={14} />
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-red-600 flex items-center gap-2 hover:text-red-800"
              >
                <FaTrashAlt /> Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit sticky top-6">
            <h3 className="font-semibold text-xl mb-6">Order Summary</h3>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium flex items-center gap-2">
                  <MdDiscount className="text-purple-500" /> 
                  Apply Coupon
                </h4>
                {isCouponApplied && (
                  <button 
                    onClick={handleRemoveCoupon}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>
              
              {!isCouponApplied ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 border px-4 py-2 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Apply
                  </button>
                </div>
              ) : (
                <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
                  Coupon <span className="font-bold">{coupon}</span> applied successfully!
                </div>
              )}
              
              {coupon && !isCouponApplied && (
                <p className="text-xs text-gray-500 mt-2">
                  Try <span className="font-mono bg-gray-100 px-1">SAVE60</span> for $60 discount
                </p>
              )}
            </div>
            
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span className="font-medium">-${discount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span>Tax ({taxRate * 100}%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t pt-3 mt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors shadow-md">
              Proceed to Checkout
            </button>
            
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Free shipping on orders over $100</p>
              <p>30-day return policy</p>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Secure Payment</h4>
              <p className="text-xs text-blue-600">
                All transactions are secure and encrypted. We never store your credit card information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;