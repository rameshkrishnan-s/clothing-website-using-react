import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, src: '/nov_launch_web.webp', alt: 'Slide 1' },
    { id: 2, src: '/nov_launch_web.webp', alt: 'Slide 2' },
    { id: 3, src: '/nov_launch_web.webp', alt: 'Slide 3' },
    { id: 4, src: '/nov_launch_web.webp', alt: 'Slide 4' },
    { id: 5, src: '/nov_launch_web.webp', alt: 'Slide 5' },
  ];

  const products = [
    { id: 1, name: 'Product 1', price: '$29.99', sizes: ['S', 'M', 'L' ,'XL','XXL'], imgSrc: '/DSC05472.webp' },
    { id: 2, name: 'Product 2', price: '$39.99', sizes: ['S', 'M', 'L' ,'XL','XXL'], imgSrc: '/DSC05472.webp' },
    { id: 3, name: 'Product 3', price: '$49.99', sizes: ['S', 'M', 'L' ,'XL','XXL'], imgSrc: '/DSC05472.webp' },
    { id: 4, name: 'Product 4', price: '$29.99', sizes: ['S', 'M', 'L' ,'XL','XXL'], imgSrc: '/DSC05472.webp' },
  ];

  const circleImages = [
    { id: 1, src: '/DSC05472.webp', label: 'Organza' },
    { id: 2, src: '/DSC05472.webp', label: 'New Arrivals' },
    { id: 3, src: '/DSC05472.webp', label: 'Best Sellers' },
    { id: 4, src: '/DSC05472.webp', label: 'Dresses' },
    { id: 5, src: '/DSC05472.webp', label: 'Casual Wears' },
    { id: 6, src: '/DSC05472.webp', label: 'Maternity' },
    { id: 7, src: '/DSC05472.webp', label: 'Stay Comfort' },
  ];

  const totalSlides = slides.length;
  const goToNextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goToPrevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Clothing</div>
        <div className="top-icons">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <a href="#login"><span>Login</span></a>
          <a href="#cart"><span>Cart</span></a>
        </div>
      </header>

      <div className="hero">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        <button className="prev-slide" onClick={goToPrevSlide}>❮</button>
        <button className="next-slide" onClick={goToNextSlide}>❯</button>
      </div>

      <section className="circle-images">
        {circleImages.map((image) => (
          <div key={image.id} className="circle-image-container">
            <img src={image.src} alt={image.label} className="circle-image" />
            <p>{image.label}</p>
          </div>
        ))}
      </section>

      <section className="product-section">
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imgSrc} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <div className="product-sizes">
                  {product.sizes.map((size) => (
                    <span key={size} className="product-size">{size}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2023 Ramesh Clothing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
