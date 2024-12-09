import React, { useEffect, useState } from 'react';

const App = () => {
  const [offerData, setOfferData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  useEffect(() => {
    fetch('http://localhost:5000/offers')
      .then((response) => response.json())
      .then((data) => {
        setOfferData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <h1>Best Offers</h1>

      {/* Display Best Price */}
      <div className="best-price">
        <h2>Best Price: {offerData.bestPrice.couponCode}</h2>
        <p>Discount: {offerData.bestPrice.couponDiscount}</p>
        <p>Price: ₹{offerData.bestPrice.price.discounted} (MRP: ₹{offerData.bestPrice.price.mrp})</p>
        <p>Applicable On: {offerData.bestPrice.applicableOn}</p>
      </div>

      {/* Display Best Price List */}
      <div className="best-price-list">
        <h2>Other Offers</h2>
        <ul>
          {offerData.bestPriceList.map((offer, index) => (
            <li key={index}>
              <p>{offer.couponCode} - {offer.couponDiscount}</p>
              <p>Discounted Price: ₹{offer.price.discounted} (MRP: ₹{offer.price.mrp})</p>
              <p>Applicable On: {offer.applicableOn}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Related Products */}
      <div className="related-products">
  <h2>Similar Products</h2>
  {offerData.related.map((related, index) => (
    <div key={index}>
      <h3>{related.type}</h3>
      <div className="product">
        {related.products.map((product) => (
          <div key={product.id} className="product-item">
            <a href={product.landingPageUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={product.defaultImage.secureSrc}
                alt={product.name}
                className="product-image"
              />
              <h4>{product.name}</h4>
            </a>
            <p>Price: ₹{product.price.discounted} (MRP: ₹{product.price.mrp})</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default App;
