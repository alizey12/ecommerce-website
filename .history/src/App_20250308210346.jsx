
import './App.css'
import Header from "./Components/Header";
function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  );
};


export default App
