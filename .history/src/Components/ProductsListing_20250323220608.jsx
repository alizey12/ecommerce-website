import { useState } from "react";
import { FaTh, FaBars, FaRegHeart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: "$998.00",
    oldPrice: "$1128.00",
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    image: "https://via.placeholder.com/100",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    image: "https://via.placeholder.com/100",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    id: 3,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    rating: 7.5,
    orders: 154,
    shipping: "Free Shipping",
    image: "https://via.placeholder.com/100",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
  },
];

export default function ProductFilterBar() {
  const [view, setView] = useState("grid");

  return (
    <div>
      <div className="flex items-center justify-between bg-white p-4 border-b shadow-sm">
        <p className="text-lg font-medium">
          12,911 items in <span className="font-bold">Mobile accessory</span>
        </p>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="hidden" checked readOnly />
            <span className="w-5 h-5 flex items-center justify-center border rounded bg-blue-600 text-white">✔</span>
            Verified only
          </label>
          <select className="border px-3 py-1 rounded-md focus:outline-none">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 border rounded ${view === "grid" ? "bg-gray-200" : ""}`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 border rounded ${view === "list" ? "bg-gray-200" : ""}`}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="flex border p-4 rounded-md shadow-sm bg-white">
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="ml-4 flex-1">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-xl font-bold">{product.price} <span className="text-gray-500 line-through">{product.oldPrice}</span></p>
              <p className="text-yellow-500">⭐⭐⭐⭐⭐ {product.rating} • {product.orders} orders • <span className="text-green-500">{product.shipping}</span></p>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <a href="#" className="text-blue-500 mt-2 inline-block">View details</a>
            </div>
            <button className="p-2 border rounded-full text-gray-500 hover:text-red-500">
              <FaRegHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
