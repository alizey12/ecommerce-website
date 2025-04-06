import { FaTh, FaBars } from "react-icons/fa";
import { memo } from "react";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "low-to-high", label: "Price: Low to High" },
  { value: "high-to-low", label: "Price: High to Low" },
  { value: "a-z", label: "Alphabet A-Z" },
  { value: "z-a", label: "Alphabet Z-A" },
  { value: "new-to-old", label: "Date: New to Old" },
  { value: "old-to-new", label: "Date: Old to New" },
  { value: "best-selling", label: "Best Selling" }
];

const ViewToggle = memo(({ view, setView, itemCount, sortType, setSortType }) => {
  const handleViewChange = (newView) => {
    if (view !== newView) setView(newView);
  };

  return (
    <div className="flex flex-col md:flex-row w-full justify-between bg-white p-4 border-b shadow-sm mb-4 gap-4 md:gap-0">
      <h2 className="text-lg font-semibold">{itemCount} items</h2>
      
      <div className="flex items-center justify-center md:justify-start">
        <select
          className="border px-3 py-1 rounded-md focus:outline-none w-full md:w-auto"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          aria-label="Sort products"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex gap-2 justify-center md:justify-end">
        <button
          onClick={() => handleViewChange("grid")}
          className={`p-2 rounded-md transition-colors ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          aria-label="Grid view"
        >
          <FaTh size={18} />
        </button>
        <button
          onClick={() => handleViewChange("list")}
          className={`p-2 rounded-md transition-colors ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          aria-label="List view"
        >
          <FaBars size={18} />
        </button>
      </div>
    </div>
  );
});

export default ViewToggle;