import { FaStar, FaRegHeart, FaFilter } from "react-icons/fa";
import { FiGrid, FiList } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import ListingSidebar from "../Components/ListingSidebar";
import ProductListing from "../Components/ProductsListing";
import productsByCategory from "../Pages/Products";

const EcomListing = () => {
  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <nav className="flex m-6 px-20" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-1 text-gray-400">/</span>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Products
              </a>
            </div>
          </li>
        </ol>
      </nav>

      <div className="flex bg-orange-200 mx-20">
        <ListingSidebar />
        <div>
          
        </div>
        <ProductListing className="col-span-3" products={productsByCategory.allProducts} />
      </div>

      <Footer />
    </>
  );
};

export default EcomListing;
