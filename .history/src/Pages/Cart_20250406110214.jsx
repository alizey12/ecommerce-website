// src/pages/CartPage.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const { cartItems, updateCartItem, removeFromCart, clearCart } = useCart();

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
    // Keep your existing JSX UI code from your current CartPage here
    // Only change was using the context values from `useCart()`
    // So just paste the remaining UI here if you haven't changed it
    <div>Your cart page UI here (you already have it)</div>
  );
};

export default CartPage;
