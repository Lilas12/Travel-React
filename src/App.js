import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchFunction from "./components/SearchFunction";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Quiz from "./pages/Quiz";
import Destination from "./pages/Destination";
import Egypten from "./pages/Egypten.js";
import CarRental from "./pages/CarRental.js";

import Dubai from "./pages/Dubai.js";
import Grekland from "./pages/Grekland.js";
import Turkiet from "./pages/Turkiet.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchFunction />} />

        <Route path="/Destination" element={<Destination />} />

        <Route path="/CarRental" element={<CarRental />} />

        <Route path="/Egypten/" element={<Egypten />} />
        <Route path="/Dubai/" element={<Dubai />} />
        <Route path="/Grekland/" element={<Grekland />} />

        <Route path="/Turkiet/" element={<Turkiet />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
