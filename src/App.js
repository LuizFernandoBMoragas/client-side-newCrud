import React, { useState } from "react";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [foodType, setFoodType] = useState("");
  const [foodOrigin, setFoodOrigin] = useState("");
  const [foodDrink, setFoodDrink] = useState("");

  return (
    <div className="App">
      <h1>Food Menu Model</h1>

      <label>Food Name:</label>
      <input type="text" />
      <label>Expiration Date(days after made):</label>
      <input type="number" />
      <label>Type Of Food(Sweet or Salty):</label>
      <input type="text" />
      <label>Country Of Origin:</label>
      <input type="text" />
      <label>Best Choose To Drink With:</label>
      <input type="text" />

      <button>Add to Menu Model</button>
    </div>
  );
}

export default App;
