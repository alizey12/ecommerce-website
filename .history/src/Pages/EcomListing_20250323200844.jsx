import { FaFilter } from "react-icons/fa";
import Header from './Header';
import Footer from './Footer';
import ListingSidebar from '../Components/ListingSidebar';
import ProductsListing from '../Components/ProductsListing';
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
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Shop</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Layout */}
      <div className="grid grid-cols-4 gap-4 mx-20">
        <ListingSidebar />
        <div className="col-span-3">
          <ProductsListing products={productsByCategory} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EcomListing;
