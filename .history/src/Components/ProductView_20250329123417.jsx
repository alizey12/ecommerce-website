import { useMemo, useState } from "react";
import { FaTh, FaBars } from "react-icons/fa";

const ViewToggle = ({ view, setView, itemCount, products = [], sortType, setSortType }) => {
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  // Sorting function
  const sortProducts = (array, type) => {
    return array.slice().sort((a, b) => {
      switch (type) {
        case "low-to-high":
          return (parseFloat(a.price?.replace(/[^0-9.]/g, "") || 0)) - 
                 (parseFloat(b.price?.replace(/[^0-9.]/g, "") || 0));
        case "high-to-low":
          return (parseFloat(b.price?.replace(/[^0-9.]/g, "") || 0)) - 
                 (parseFloat(a.price?.replace(/[^0-9.]/g, "") || 0));
        case "new-arrivals":
          return new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0);
        case "top-rated":
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });
  };

  const sortedProducts = useMemo(() => sortProducts(products, sortType), [sortType, products]);

  // Determine category from all products
  const category = products.length > 0 ? products[0]?.category || "Unknown Category" : "No Products";

  return (
    <div className="flex w-full justify-between bg-white p-4 border-b shadow-sm mb-4">
      <h2 className="text-lg font-semibold">
        {itemCount} items in {category}
      </h2>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            checked={verifiedOnly}
            onChange={() => setVerifiedOnly((prev) => !prev)}
          />
          <span className={`w-5 h-5 flex items-center justify-center border rounded 
                          ${verifiedOnly ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
            {verifiedOnly && "✔"}
          </span>
          Verified only
        </label>

        <select
          className="border px-3 py-1 rounded-md focus:outline-none"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="new-arrivals">Newest Arrivals</option>
          <option value="top-rated">Top Rated</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setView("grid")}
          aria-label="Grid View"
          className={`p-2 rounded-md ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          <FaTh size={18} />
        </button>
        <button
          onClick={() => setView("list")}
          aria-label="List View"
          className={`p-2 rounded-md ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          <FaBars size={18} />
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
