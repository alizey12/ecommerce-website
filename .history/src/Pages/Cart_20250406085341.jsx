import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = ({ cartItems, updateCartItem, removeFromCart, clearCart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const tax = 14;

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [cartItems]);

  const handleApplyCoupon = () => {
    if (coupon === "SAVE60") setDiscount(60);
    else setDiscount(0);
  };

  const total = subtotal - discount + tax;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-20">
      <h2 className="text-2xl font-bold mb-6">My cart ({cartItems.length})</h2>

      {/* Cart Items */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow border flex flex-col md:flex-row gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-400">Seller: {item.seller}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                  <button className="text-blue-500 hover:underline text-sm">
                    Save for later
                  </button>
                </div>
              </div>
              <div className="text-right flex flex-col justify-between">
                <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                <select
                  className="border rounded-md px-2 py-1 text-sm mt-2"
                  value={item.quantity}
                  onChange={(e) => updateCartItem(item.id, parseInt(e.target.value))}
                >
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>{`Qty: ${num}`}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <Link
              to="/"
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              ← Back to shop
            </Link>
            <button
              onClick={clearCart}
              className="text-red-600 flex items-center gap-1 text-sm hover:underline"
            >
              <FaTrashAlt /> Remove all
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h3 className="font-semibold text-lg mb-4">Have a coupon?</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Add coupon"
              className="flex-1 border px-3 py-2 rounded-md text-sm"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>Subtotal: <span className="float-right">${subtotal.toFixed(2)}</span></p>
            <p>Discount: <span className="float-right text-red-500">- ${discount.toFixed(2)}</span></p>
            <p>Tax: <span className="float-right text-green-600">+ ${tax.toFixed(2)}</span></p>
            <hr className="my-2" />
            <p className="font-semibold text-lg">Total: <span className="float-right text-black">${total.toFixed(2)}</span></p>
          </div>
          <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
