import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/Pages/Layout";
import Home from "../Pages/Home";
import EcommerceListing from "../src/Pages/ecommerceListing";

function App() {
  return (
    <Router>
      <div className="bg-slate-100">
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecommerceListing" element={<EcommerceListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
