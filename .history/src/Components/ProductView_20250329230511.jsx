import { FaTh, FaBars } from "react-icons/fa";

const ViewToggle = ({ view, setView, itemCount, sortType, setSortType }) => {
  return (
    <div className="flex w-full justify-between bg-white p-4 border-b shadow-sm mb-4">
      <h2 className="text-lg font-semibold">{itemCount} items</h2>
      
      <div className="flex items-center gap-4">
        <select
          className="border px-3 py-1 rounded-md focus:outline-none"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="featured">Featured</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="a-z">Alphabet A-Z</option>
          <option value="z-a">Alphabet Z-A</option>
          <option value="new-to-old">Date: New to Old</option>
          <option value="old-to-new">Date: Old to New</option>
          <option value="best-selling">Best Selling</option>
        </select>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={() => setView("grid")}
          className={`p-2 rounded-md ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          <FaTh size={18} />
        </button>
        <button
          onClick={() => setView("list")}
          className={`p-2 rounded-md ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          <FaBars size={18} />
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
