import { FaTh, FaBars } from "react-icons/fa";

const ViewToggle = ({ view, setView, itemCount, products = [] , category = "Mobile Accessories"}) => {
  const category = products.length > 0 ? products[0].category : "Unknown Category";

  return (
    <div className="flex w-full justify-between bg-white p-4 border-b shadow-sm mb-4">
      <h2 className="text-lg font-semibold">{itemCount} items in {category}</h2>
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
