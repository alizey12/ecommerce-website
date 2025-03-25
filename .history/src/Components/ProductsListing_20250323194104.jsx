import React, { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import ProductsData from "../Pages/Products"; // Ensure correct import

const ProductsListing = ({ products }) => { // Renamed prop to avoid conflicts
//   const [view, setView] = useState("grid");
 
  return (
    <div>
       // <main className="w-3/4 p-4">
    //   <div className="flex justify-between items-center mb-4">
    //     <h2 className="text-xl font-bold">{products.length} items in Mobile Accessory</h2>
    //     <div className="flex gap-2">
    {/* //       <button
    //         onClick={() => setView("grid")}
    //         className={`p-2 ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    //       >
    //         <FiGrid size={20} />
    //       </button>
    //       <button
    //         onClick={() => setView("list")}
    //         className={`p-2 ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
    //       >
    //         <FiList size={20} />
    //       </button>
    //     </div>
    //   </div>

    //   <div className={`grid ${view === "grid" ? "grid-cols-3" : "grid-cols-1"} gap-4`}>
    //     {Products.map((product) => (
    //       <div key={product.id} className="border p-4 rounded-lg bg-white shadow">
    //         <img
    //           src={product.image}
    //           alt={`Image of ${product.name}`}
    //           className="w-full h-32 object-cover mb-2"
    //         />
    //         <h3 className="font-bold">{product.name}</h3>
    //         <p className="text-gray-600">{product.price}</p>
    //         {product.shipping && <p className="text-sm text-green-600">{product.shipping}</p>}
    //         <div className="flex items-center mt-2">
    //           {[...Array(5)].map((_, i) => (
    //             <FaStar
    //               key={i}
    //               className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"}
    //             />
    //           ))}
    //           {product.orders && <span className="text-sm ml-2">({product.orders} orders)</span>}
    //         </div>
    //         <button className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
    //           View Details
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </main> */}
    </div>
  );
};


export default ProductsListing;
