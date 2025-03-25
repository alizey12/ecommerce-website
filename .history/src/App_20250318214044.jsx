import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout";


function App() {
  return (
    <Router>
      <div className='bg-slate-100'>
        <Routes>
          <Route path="/" element={<Layout />} />  
          <Route path="/ecommerceListing" element={<EcommerceListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
