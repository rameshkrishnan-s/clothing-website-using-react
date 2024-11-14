import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Import routing components
import { FaSearch, FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa';
import Home from '../pages/Home';
import NewIn from '../pages/NewIn';
import Topwear from '../pages/Topwear';
import Bottomwear from '../pages/Bottomwear';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [searchVisible, setSearchVisible] = React.useState(false);

  const toggleSearch = () => setSearchVisible(!searchVisible);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">HAY!</Link> {/* Link to Home */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/new-in">New In</Link></li>
        <li><Link to="/topwear">Topwear</Link></li>
        <li><Link to="/bottomwear">Bottomwear</Link></li>
        <li><Link to="/track-order">Track Order</Link></li>
      </ul>
      <div className="navbar-icons">
        <FaSearch onClick={toggleSearch} />
        <FaUser />
        <FaShoppingCart />
      </div>
      {/* Search container */}
      <div className={`search-container ${searchVisible ? 'visible' : ''}`}>
        <input type="text" className="search-input" placeholder="Search..." />
        <FaSearch className="search-icon" />
        <FaTimes className="close-icon" onClick={toggleSearch} />
      </div>

      {/* Define Routes directly inside the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-in" element={<NewIn />} />
        <Route path="/topwear" element={<Topwear />} />
        <Route path="/bottomwear" element={<Bottomwear />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
    </nav>
  );
};

export default Navbar;
