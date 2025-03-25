// import React, { useState } from "react";
// import { FiGrid, FiList } from "react-icons/fi"; // Import grid and list icons
// import { FaStar } from "react-icons/fa"; // Import star icon

// const ProductsListing = ({ Products }) => {
//   const [view, setView] = useState("grid"); // State to manage grid/list view

//   return (
//     <div>
//       <main className="w-3/4 p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">12,911 items in Mobile Accessory</h2>
//           <div className="flex gap-2">
//             <button onClick={() => setView("grid")}>
//               <FiGrid size={20} />
//             </button>
//             <button onClick={() => setView("list")}>
//               <FiList size={20} />
//             </button>
//           </div>
//         </div>

//         <div className={`grid ${view === "grid" ? "grid-cols-3" : "grid-cols-1"} gap-4`}>
//           {Products.map((product) => (
//             <div key={product.id} className="border p-4 rounded-lg bg-white shadow">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-32 object-cover mb-2"
//               />
//               <h3 className="font-bold">{product.name}</h3>
//               <p className="text-gray-600">{product.price}</p>
//               {product.shipping && <p className="text-sm text-green-600">{product.shipping}</p>}
//               <div className="flex items-center mt-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     className={i < Math.floor(product.rating || 0) ? "text-yellow-500" : "text-gray-300"}
//                   />
//                 ))}
//                 {product.orders && <span className="text-sm ml-2">({product.orders} orders)</span>}
//               </div>
//               <button className="mt-2 px-4 py-1 text-blue-500 border rounded">
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProductsListing;