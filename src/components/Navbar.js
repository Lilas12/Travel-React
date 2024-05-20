import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef();
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
          <img src="/logo/logo.png" alt="Logo" />
        </Link>
      </div>
      <nav ref={navRef} className={isOpen ? "responsive_nav" : ""}>
        <ul>
          {/* <li>
            <Link to="/om-oss" onClick={handleLinkClick}>
              Om-Oss
            </Link>
          </li> */}

          <li>
            <Link to="/Destination" onClick={handleLinkClick}>
              Destination
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
