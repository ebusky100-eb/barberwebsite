
import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar({ searchStyle, setSearchStyle }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
    

  return (
    <nav className="navbar">
      

    
      <div className="nav-container">
        <a href="#home" className="logo">
          BLADE<span>&</span>FADE
        </a>

        <button
          className={`menu-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/Services" onClick={closeMenu}>Services</Link>
          </li>

          <li>
            <Link to="/Gallery" onClick={closeMenu}>Gallery</Link>
          </li>

          <li>
            <Link to="/About" onClick={closeMenu}>About</Link>
          </li>

          <li>
            <Link to="/Booking" onClick={closeMenu}>Booking</Link>
          </li>

          <li>
            <Link to="/Contact" onClick={closeMenu}>Contact</Link>
          </li>

          <li className="wrap">
            <Link to="/Booking"className="nav-book-btn" onClick={closeMenu}>Book Now</Link>
          </li>

          <li className="search-wrapper">
            <input
              type="search"
              className="search-input"
              autoFocus
              placeholder="Search hairstyles..."
              aria-label="Search hairstyles"
              value={searchStyle}
              onChange={(e) => setSearchStyle(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
