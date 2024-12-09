import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [offers, setOffers] = useState([]);
    const [bestOffer, setBestOffer] = useState(null);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await fetch('http://localhost:5000/offers', {
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const data = await response.json();
                setOffers(data.bestPriceList || []);
                setBestOffer(data.bestPrice || null);
            } catch (error) {
                console.error('Fetch Error:', error.message);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className="App">
            <h1>Offers and Discounts</h1>
            {bestOffer && (
                <div className="best-offer">
                    <h2>Best Offer</h2>
                    <p><strong>Coupon Code:</strong> {bestOffer.couponCode}</p>
                    <p><strong>Discount:</strong> {bestOffer.couponDiscount}</p>
                    <p><strong>Price:</strong> MRP: Rs.{bestOffer.price.mrp}, Discounted: Rs.{bestOffer.price.discounted}</p>
                    <p><strong>Applicable on:</strong> {bestOffer.applicableOn}</p>
                </div>
            )}
            <hr />
            <h2>All Offers</h2>
            <div className="offer-list">
                {offers.map((offer, index) => (
                    <div key={index} className="offer-card">
                        <p><strong>Coupon Code:</strong> {offer.couponCode}</p>
                        <p><strong>Discount:</strong> {offer.couponDiscount}</p>
                        <p><strong>Price:</strong> MRP: Rs.{offer.price.mrp}, Discounted: Rs.{offer.price.discounted}</p>
                        <p><strong>Applicable on:</strong> {offer.applicableOn}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
