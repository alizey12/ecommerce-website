import { useState } from "react";
import { FaStar, FaRegHeart, FaFilter } from "react-icons/fa";
import { FiGrid, FiList } from "react-icons/fi";
import Header from './Header';
import Footer from './Footer'

const products = [

  {
    id: 1,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: "$998.00",
    image: "src/assets/sofa.png",
    rating: 4.5,
    orders: 154,
    shipping: "Free Shipping"
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: "$998.00",
    image: "src/assets/tablet.png",
    rating: 4.2,
    orders: 154,
    shipping: "Free Shipping"
  }
];
const categories = [
  "Mobile Accessory",
  "Electronics",
  "Smartphones",
  "Modern Tech",
  "Laptops",
  "Tablets",
  "Wearables",
  "Audio",
  "Cameras",
  "Gaming",
];
export default function EcommerceListing() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Data
 
  const [view, setView] = useState("grid");

  return (
    <>
    <Header />
    

<nav class="flex m-6 px-16" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center ">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Flowbite</span>
      </div>
    </li>
  </ol>
</nav>

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
    <Footer />
    </>
  );
}
