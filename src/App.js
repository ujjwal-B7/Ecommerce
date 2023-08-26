import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import { Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
