import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
// import AboutUs from "./pages/AboutUs.js";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import Destination from "./pages/Destination";
import Egypten from "./pages/Egypten.js";
import Dubai from "./pages/Dubai.js";
import Grekland from "./pages/Grekland.js";
import Italien from "./pages/Italien.js";
import Spanien from "./pages/Spanien.js";
import Turkiet from "./pages/Turkiet.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/om-oss" element={<AboutUs />} /> */}
        <Route path="/contact" element={<Contact />} />

        <Route path="/quiz" element={<Quiz />} />
        <Route path="/Destination" element={<Destination />} />

        <Route path="/Egypten/" element={<Egypten />} />
        <Route path="/Dubai/" element={<Dubai />} />
        <Route path="/Grekland/" element={<Grekland />} />
        <Route path="/Italien/" element={<Italien />} />
        <Route path="/Spanien/" element={<Spanien />} />
        <Route path="/Turkiet/" element={<Turkiet />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
