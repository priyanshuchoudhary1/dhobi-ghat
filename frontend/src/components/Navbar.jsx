import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🧺</span>
          <span className="logo-text">Dhobi Ghat</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-link">About Us</NavLink></li>
          {/* <li><NavLink to="/services" activeClassName="active-link">Services</NavLink></li> */}
          <li className="cart-link">
            <NavLink to="/cart" activeClassName="active-link">
              <FaShoppingCart className="nav-icon" />
              <span className="cart-count">0</span>
            </NavLink>
          </li>
          {/* <li><NavLink to="/track-order" activeClassName="active-link">Track Order</NavLink></li> */}
          <li><NavLink to="/account" activeClassName="active-link"><FaUser className="nav-icon" /></NavLink></li>
          <li><NavLink to="/login" activeClassName="active-link" className="login-btn">Login</NavLink></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;