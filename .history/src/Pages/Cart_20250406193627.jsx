import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTrashAlt,
  FaChevronLeft,
  FaChevronRight,
  FaShoppingBasket,
  FaShoppingCart,
  FaRegCreditCard,
} from "react-icons/fa";
import { MdDiscount, MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { useCart } from "../contexts/CartContext";

const CartPage = () => {
  const { 
    cartItems, 
    updateCartItem, 
    removeFromCart, 
    clearCart,
    cartCount,
    cartTotal
  } = useCart();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const taxRate = 0.14;
  const tax = cartTotal * taxRate;
  const shippingFee = cartTotal > 100 ? 0 : 9.99;
  const total = cartTotal - discount + tax + (cartTotal > 0 ? shippingFee : 0);

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
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
      navigate('/checkout/success');
    }, 2000);
  };

  if (cartCount === 0 && !isCheckingOut) {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
          <FaShoppingCart className="mr-2" /> Shopping Cart ({cartCount})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row border-b border-gray-200 py-6 last:border-0">
                    <div className="flex-shrink-0 mb-4 sm:mb-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow sm:pl-6">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                      <p className="text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <FaChevronLeft className="w-3 h-3" />
                          </button>
                          <span className="px-4 py-1 border-t border-b border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                            disabled={item.quantity >= 100}
                            aria-label="Increase quantity"
                          >
                            <FaChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-lg font-medium text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 font-medium"
                  aria-label="Clear cart"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg p-6 sticky top-8">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${cartTotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax ({taxRate * 100}%)</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600 flex items-center">
                    <MdLocalShipping className="mr-1" /> Shipping
                  </span>
                  <span className="text-gray-900">
                    {shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>

                {isCouponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span className="flex items-center">
                      <MdDiscount className="mr-1" /> Discount
                    </span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {!isCouponApplied ? (
                  <div className="mt-6">
                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                      Coupon Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="coupon"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Enter coupon code"
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                      />
                      <button
                        onClick={handleApplyCoupon}
                        className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="Apply coupon"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 p-3 bg-green-50 rounded-md flex justify-between items-center">
                    <span className="text-green-700 flex items-center">
                      <MdDiscount className="mr-2" /> Coupon applied!
                    </span>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-green-700 hover:text-green-900 text-sm font-medium"
                      aria-label="Remove coupon"
                    >
                      Remove
                    </button>
                  </div>
                )}

                <div className="mt-6">
                  <button
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Proceed to checkout"
                  >
                    {isCheckingOut ? (
                      "Processing..."
                    ) : (
                      <>
                        <FaRegCreditCard className="mr-2" /> Proceed to Checkout
                      </>
                    )}
                  </button>
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <RiSecurePaymentLine className="mr-2 text-gray-400" />
                  Secure checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;