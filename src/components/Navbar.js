import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const nav = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    closeNavbar();
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/">
          <img src="/logo/logo3.png" alt="Logo3" />
        </Link>
      </div>
      <nav ref={nav} className={isOpen ? "responsive_nav" : ""}>
        <ul>
          <li>
            <Link to="/search" onClick={handleLinkClick}>
              Search
            </Link>
          </li>

          <li>
            <Link to="/Destination" onClick={handleLinkClick}>
              Destination
            </Link>
          </li>

          <li>
            <Link to="/CarRental" onClick={handleLinkClick}>
              CarRental
            </Link>
          </li>

          <li>
            <Link to="/Quiz" onClick={handleLinkClick}>
              Quiz
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
