import { useState } from "react";
import { FaStar, FaRegHeart, FaFilter } from "react-icons/fa";
import { FiGrid, FiList } from "react-icons/fi";
import Hea from './Header';

const products = [
  {
    id: 1,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: "$998.00",
    image: "https://via.placeholder.com/150",
    rating: 4.5,
    orders: 154,
    shipping: "Free Shipping"
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    image: "https://via.placeholder.com/150",
    rating: 4.2,
    orders: 154,
    shipping: "Free Shipping"
  }
];

export default function EcommerceListing() {
  const [view, setView] = useState("grid");

  return (
    <div className="container mx-auto px-4 py-6 flex">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 border-r hidden lg:block">
        <h3 className="text-lg font-bold mb-2">Category</h3>
        <ul className="space-y-1 text-gray-600">
          <li>Mobile Accessory</li>
          <li>Electronics</li>
          <li>Smartphones</li>
          <li>Modern Tech</li>
        </ul>
      </aside>

      {/* Product Listing */}
      <main className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">12,911 items in Mobile Accessory</h2>
          <div className="flex gap-2">
            <button onClick={() => setView("grid")}>
              <FiGrid size={20} />
            </button>
            <button onClick={() => setView("list")}>
              <FiList size={20} />
            </button>
          </div>
        </div>

        <div className={`grid ${view === "grid" ? "grid-cols-3" : "grid-cols-1"} gap-4`}>
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg bg-white shadow">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <p className="text-sm text-green-600">{product.shipping}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-sm ml-2">({product.orders} orders)</span>
              </div>
              <button className="mt-2 px-4 py-1 text-blue-500 border rounded">View Details</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
