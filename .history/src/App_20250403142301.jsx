import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout";
import EcommerceListing from './Pages/EcomListing'
import ProductsListing from "./Components/ProductsListing";
import ProductDetail from "./Pages/ProductDetail";
function App() {
  return (
  
      <div className='bg-slate-100'>
        <Routes>
          <Route path="/" element={<Layout />} />  
          <Route path="/EcomListing" element={<EcommerceListing />} /> {/* Listings Page */}
          <Route path="/products" element={<ProductsListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
   
  );
}

export default App;
