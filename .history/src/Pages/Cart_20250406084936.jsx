import { FaTrashAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "T-shirts with multiple colors, for men and lady",
      price: 78.99,
      quantity: 9,
      image: "/path/to/shirt1.jpg",
      seller: "Artel Market",
      size: "medium",
      color: "blue",
      material: "Plastic",
    },
    {
      id: 2,
      name: "T-shirts with multiple colors, for men and lady",
      price: 39.0,
      quantity: 3,
      image: "/path/to/shirt2.jpg",
      seller: "Best factory LLC",
      size: "medium",
      color: "blue",
      material: "Plastic",
    },
    {
      id: 3,
      name: "T-shirts with multiple colors, for men and lady",
      price: 170.5,
      quantity: 1,
      image: "/path/to/shirt3.jpg",
      seller: "Artel Market",
      size: "medium",
      color: "blue",
      material: "Plastic",
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 60;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-6">My cart ({cartItems.length})</h2>

      {/* Cart List */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-4 border">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-contain bg-gray-100 rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  Size: {item.size}, Color: {item.color}, Material: {item.material}
                </p>
                <p className="text-sm text-gray-400">Seller: {item.seller}</p>
                <div className="mt-2 flex items-center gap-4">
                  <select
                    className="border rounded px-2 py-1 text-sm"
                    defaultValue={item.quantity}
                  >
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Qty: {i + 1}
                      </option>
                    ))}
                  </select>
                  <button className="text-red-500 hover:underline text-sm">Remove</button>
                  <button className="text-blue-500 hover:underline text-sm">Save for later</button>
                </div>
              </div>
              <div className="text-right font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <Link to="/" className="text-blue-600 flex items-center gap-2 hover:underline">
              <FaArrowLeft /> Back to shop
            </Link>
            <button className="text-red-500 hover:underline text-sm flex items-center gap-1">
              <FaTrashAlt /> Remove all
            </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-sm p-6 space-y-4 border">
          <div>
            <label className="block text-sm font-medium mb-1">Have a coupon?</label>
            <div className="flex">
              <input
                type="text"
                className="border rounded-l px-3 py-2 flex-1 text-sm"
                placeholder="Add coupon"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r text-sm hover:bg-blue-700">
                Apply
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-600 space-y-2 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="text-gray-900 font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount:</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-500">
              <span>Tax:</span>
              <span>+${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-black border-t pt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600">
            Checkout
          </button>

          <div className="flex justify-center gap-2 mt-2">
            <img src="/img/visa.png" alt="Visa" className="h-6" />
            <img src="/img/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/img/paypal.png" alt="PayPal" className="h-6" />
            {/* Add more icons as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
