import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommendations from the backend
    fetch("http://localhost:5000/api/recommendations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setRecommendations(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recommendation Widget</h1>
        <div className="recommendation-widget">
          {recommendations.map((item) => (
            <div key={item.id} className="recommendation-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <a href={item.link}>Buy Now</a>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
