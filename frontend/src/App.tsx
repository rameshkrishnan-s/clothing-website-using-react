import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa';
import ProductPage from './pages/Productpage'; 
import Home from './pages/Home';
import NewIn from './pages/NewIn';
import Topwear from './pages/Topwear';
import Bottomwear from './pages/Bottomwear';
import TrackOrder from './pages/Trackerorder';
import './App.css';

const App: React.FC = () => {
  const [searchVisible, setSearchVisible] = React.useState(false);

  const toggleSearch = () => setSearchVisible(!searchVisible);

  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <div className="logo">Ramesh</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new-in">New In</Link>
            <Link to="/topwear">Topwear</Link>
            <Link to="/bottomwear">Bottomwear</Link>
            <Link to="/track-order">Track Order</Link>
          </nav>
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
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-in" element={<NewIn />} />
            <Route path="/topwear" element={<Topwear />} />
            <Route path="/bottomwear" element={<Bottomwear />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/product/:id" element={<ProductPage />} />  {/* Product Page */}

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
