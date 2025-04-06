import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaTrashAlt, 
  FaChevronLeft, 
  FaChevronRight, 
  FaShoppingBasket,
  FaShoppingCart,
  FaRegCreditCard
} from "react-icons/fa";
import { MdDiscount, MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const CartPage = ({ cartItems, updateCartItem, removeFromCart, clearCart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const taxRate = 0.14;
  const tax = subtotal * taxRate;
  const shippingFee = subtotal > 100 ? 0 : 9.99;
  const total = subtotal - discount + tax + (subtotal > 0 ? shippingFee : 0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cartItems]);

  const handleApplyCoupon = () => {
    if (coupon.toUpperCase() === "SAVE60") {
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

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="text-center max-w-md">
          <FaShoppingBasket className="mx-auto text-6xl text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaChevronLeft className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            <FaShoppingCart className="inline mr-2 text-blue-600" />
            Shopping Cart ({cartItems.length})
          </h1>
          <button
            onClick={clearCart}
            className="flex items-center text-sm text-red-600 hover:text-red-800"
          >
            <FaTrashAlt className="mr-1" />
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                        <p className="text-xs text-gray-400 mt-1">Seller: {item.seller}</p>
                      </div>
                      <p className="text-lg font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center border rounded-lg w-fit">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <FaChevronLeft size={12} />
                        </button>
                        <span className="px-4 py-1 text-center w-12">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                          disabled={item.quantity >= 100}
                        >
                          <FaChevronRight size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center text-sm text-red-500 hover:text-red-700"
                      >
                        <FaTrashAlt className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 flex justify-between items-center">
              <Link
                to="/"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaChevronLeft className="mr-1" />
                Continue Shopping
              </Link>
              <span className="text-sm text-gray-500">
                Total items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit sticky top-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            {/* Coupon Section */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium text-gray-900 flex items-center">
                  <MdDiscount className="text-purple-500 mr-2" />
                  Apply Coupon
                </h3>
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
                    placeholder="Coupon code"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
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

            {/* Order Breakdown */}
            <div className="space-y-3 text-gray-700 mb-6">
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
                <span className="flex items-center">
                  <MdLocalShipping className="mr-1" />
                  Shipping
                </span>
                <span className="font-medium">
                  {shippingFee === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `$${shippingFee.toFixed(2)}`
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Tax ({taxRate * 100}%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>

              <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-colors ${
                isCheckingOut ? "bg-green-700" : "bg-green-600 hover:bg-green-700"
              } flex items-center justify-center`}
            >
              {isCheckingOut ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <FaRegCreditCard className="mr-2" />
                  Proceed to Checkout
                </>
              )}
            </button>

            {/* Additional Info */}
            <div className="mt-4 text-center text-xs text-gray-500">
              <p>Free shipping on orders over $100</p>
              <p>30-day hassle-free returns</p>
            </div>

            {/* Secure Payment */}
            <div className="mt-6 p-3 bg-blue-50 rounded-lg flex items-start">
              <RiSecurePaymentLine className="text-blue-600 text-xl mr-3 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800 mb-1">Secure Payment</h4>
                <p className="text-xs text-blue-600">
                  All transactions are encrypted and secure. We never store your payment details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProvider, useCart}, CartPage;