import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout";
import EcommerceListing from './Pages/EcomListing'
function App() {
  return (
  
      <div className='bg-slate-100'>
        <Routes>
          <Route path="/" element={<Layout />} />  
          <Route path="/EcomListing" element={<EcommerceListing />} /> {/* Listings Page */}

        </Routes>
      </div>
   
  );
}

export default App;
