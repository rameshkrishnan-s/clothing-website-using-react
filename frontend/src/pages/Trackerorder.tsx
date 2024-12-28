import React, { useState } from 'react';
import './Trackerorder.css';

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State to handle loading
  const [orderData, setOrderData] = useState(null); // Store the fetched order data

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
    setError('');  // Clear error on new input
  };

  const handleTrackOrder = (event) => {
    event.preventDefault();
    
    // Basic validation (example, you can adjust this based on your needs)
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number.');
      return;
    }

    setError('');
    setLoading(true); // Start loading
    
    // Example: Fetch tracking info from an API (replace this with actual tracking logic)
    fetch(`/api/track/${trackingNumber}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        // Handle response data
        console.log('Order Tracking Data:', data);
        setOrderData(data); // Store the order data
        setLoading(false); // Stop loading
        alert(`Tracking Order ID: ${trackingNumber}`);
      })
      .catch((error) => {
        console.error('Error tracking order:', error);
        setError('Failed to track order. Please try again.');
        setLoading(false); // Stop loading on error
      });
  };

  return (
    <div className="trackOrderContainer">
      <div className="trackOrderBox">
        <h1 className="trackOrderTitle">Track Your Order</h1>
        <p className="trackOrderSubtitle">Order ID / Tracking Number</p>
        <form onSubmit={handleTrackOrder} className="trackOrderForm">
          <input
            type="text"
            value={trackingNumber}
            onChange={handleInputChange}
            placeholder="Enter Order ID or Tracking Number"
            className="trackOrderInput"
            required
          />
          <button
            type="submit"
            className="trackOrderButton"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Tracking...' : 'Track Order'}
          </button>
        </form>

        {/* Error message */}
        {error && <p className="errorMessage">{error}</p>}

        {/* Display order data (optional, based on your API response) */}
        {orderData && (
          <div className="orderDetails">
            <h2>Order Details</h2>
            <pre>{JSON.stringify(orderData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
