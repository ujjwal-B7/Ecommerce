import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./userComponent/Product";

import { Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      
    </div>
  );
}

export default App;
