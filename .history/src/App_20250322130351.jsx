import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout";
import moduleName from './Pages/'
function App() {
  return (
  
      <div className='bg-slate-100'>
        <Routes>
          <Route path="/" element={<Layout />} />  
          <Route path="/ecommerceListing" element={<EcommerceListing />} /> {/* Listings Page */}

        </Routes>
      </div>
   
  );
}

export default App;
