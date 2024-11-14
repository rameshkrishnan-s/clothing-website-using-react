import React, { useState } from 'react';
import './ProductPage.css';
import image1 from '../assets/DSC05472.webp';
import image2 from '../assets/DSC05472.webp';
import image3 from '../assets/DSC05472.webp';
import image4 from '../assets/DSC05472.webp';

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = [image1, image2, image3, image4];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="product-page">
      <div className="product-content">
        
        {/* Product Rating and Heading */}
        <div className="product-header">
          <h2>Product Rating</h2>
          <div className="star-rating">
            {'★'.repeat(5)}
          </div>
        </div>

        <div className="product-gallery">
          <div className="image-container">
            <button className="prev-button" onClick={prevImage}>‹</button>
            <img
              src={images[currentImageIndex]}
              alt="Main Product"
              className="main-image"
            />
            <button className="next-button" onClick={nextImage}>›</button>
          </div>
          <div className="thumbnail-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Thumbnail ${index + 1}`}
                className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <h2>Color Burst</h2>
          <p className="price">Rs. 1,399.00 <span>Tax included.</span></p>
          <p className="tag">IN CERTIFIED</p>

          <div className="product-color">
            <span>Multi Color</span>
          </div>

          <div className="product-size">
            <h4>Size</h4>
            <div className="size-options">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="size-help">Help about your size</p>
          </div>

          <div className="product-quantity">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>

          <div className="product-actions">
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY IT NOW</button>
          </div>

          <div className="product-description">
            <p>
              Chic and graceful, this flowy umbrella-style dress is crafted from soft, breathable viscose fabric, 
              ensuring a comfortable fit with a charming and artistic floral print. The pastel tones of pink, blue, 
              and olive green create a soothing, fresh look, perfect for casual outings or relaxed gatherings. 
              Featuring a square neckline and gently puffed elbow sleeves, this dress offers a timeless and feminine silhouette.
            </p>
          </div>
        </div>
      </div>

      {/* Suggested Products Section */}
      <div className="suggested-products">
        <h3>Suggested Products</h3>
        <div className="suggested-products-list">
          <div className="suggested-product">
            <img src={image1} alt="Random Collage" />
            <h4>Random Collage - M</h4>
            <p>Rs. 1,199.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="suggested-product">
            <img src={image2} alt="Shady Blooms" />
            <h4>Shady Blooms</h4>
            <p>Rs. 1,299.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="suggested-product">
            <img src={image3} alt="Happy Humming" />
            <h4>Happy Humming</h4>
            <p>Rs. 1,399.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="additional-info">
        <div className="features">
          <div className="feature-item">
            <img src="exchange-icon.png" alt="Easy exchange" />
            <p>Easy exchange</p>
            <span>Hassle free exchange process</span>
          </div>
          <div className="feature-item">
            <img src="cod-icon.png" alt="Cash on Delivery" />
            <p>Cash on Delivery</p>
            <span>COD available on all orders</span>
          </div>
          <div className="feature-item">
            <img src="secure-payment-icon.png" alt="Secure Payment" />
            <p>Secure Payment</p>
            <span>Fully trusted payment gateway</span>
          </div>
          <div className="feature-item">
            <img src="liva-icon.png" alt="LIVA Certified" />
            <p>LIVA Certified</p>
            <span>Premium Soft Fluidic Viscose fabric</span>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="customer-reviews">
          <h3>Customer Reviews</h3>

          {/* Sample Reviews */}
          <div className="review">
            <div className="star-rating">★★★★☆</div>
            <p><strong>Rhea Kapoor</strong> - "Love the design! The fabric is really soft and comfortable, and the colors are vibrant. Highly recommend it!"</p>
          </div>

          <div className="review">
            <div className="star-rating">★★★★★</div>
            <p><strong>Aman Singh</strong> - "Absolutely loved it. Perfect for summer days, and the fit is spot on. Will buy more from this brand."</p>
          </div>

          <div className="review">
            <div className="star-rating">★★★☆☆</div>
            <p><strong>Neha Desai</strong> - "It's a nice dress, but the color was slightly different than the pictures. Overall, still a good buy."</p>
          </div>

          <button className="review-button">Write a review</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
