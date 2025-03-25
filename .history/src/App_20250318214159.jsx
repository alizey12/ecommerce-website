import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Pages/Layout";

function App() {
  return (
  
      <div className='bg-slate-100'>
        <Routes>
          <Route path="/" element={<Layout />} />  
        </Routes>
      </div>
   
  );
}

export default App;
