import React from 'react'
import { useState } from "react";
const ListingSidebar = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [showAllBrands, setShowAllBrands] = useState(false);
    const [showAllFeatures, setShowAllFeatures] = useState(false);
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
    
      const brands = ["Samsung", "Apple", "Huawei", "Pocoo", "Lenovo", "Xiaomi", "OnePlus", "Google"];
    
      const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory", "Waterproof", "Wireless Charging"];
    
      const initialCount = 4;
    

  return (
    <div>
      

{/* Sidebar Selections   */}

<aside className="w-1/6 ml-20 p-4 border-r hidden lg:block">
      {/* Category Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Category</h3>
        <ul className="space-y-1 text-gray-600">
          {(showAllCategories ? categories : categories.slice(0, initialCount)).map(
            (category, index) => (
              <li key={index}>{category}</li>
            )
          )}
        </ul>
        {categories.length > initialCount && (
          <button
            className="text-blue-500 mt-2 hover:underline focus:outline-none"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            {showAllCategories ? "See Less" : "See All"}
          </button>
        )}
      </div>
<hr/>
      {/* Brands Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Brands</h3>
        <ul className="space-y-1 text-gray-600">
          {(showAllBrands ? brands : brands.slice(0, initialCount)).map((brand, index) => (
            <li key={index}>{brand}</li>
          ))}
        </ul>
        {brands.length > initialCount && (
          <button
            className="text-blue-500 mt-2 hover:underline focus:outline-none"
            onClick={() => setShowAllBrands(!showAllBrands)}
          >
            {showAllBrands ? "See Less" : "See All"}
          </button>
        )}
      </div>
      import React, { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi"; // Import grid and list icons
import { FaStar } from "react-icons/fa"; // Import star icon

const ProductsListing = ({ Products }) => {
  const [view, setView] = useState("grid"); // State to manage grid/list view

  return (
    <div>
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
          {Products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg bg-white shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover mb-2"
              />
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              {product.shipping && <p className="text-sm text-green-600">{product.shipping}</p>}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
                {product.orders && <span className="text-sm ml-2">({product.orders} orders)</span>}
              </div>
              <button className="mt-2 px-4 py-1 text-blue-500 border rounded">
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsListing;
      {/* Features Section */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-2">Features</h3>
        <ul className="space-y-1 text-gray-600">
          {(showAllFeatures ? features : features.slice(0, initialCount)).map(
            (feature, index) => (
              <li key={index}>{feature}</li>
            )
          )}
        </ul>
        {features.length > initialCount && (
          <button
            className="text-blue-500 mt-2 hover:underline focus:outline-none"
            onClick={() => setShowAllFeatures(!showAllFeatures)}
          >
            {showAllFeatures ? "See Less" : "See All"}
          </button>
        )}
      </div>
    </aside>

    </div>
  )
}

export default ListingSidebar
