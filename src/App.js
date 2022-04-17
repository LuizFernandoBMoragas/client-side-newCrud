import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [foodType, setFoodType] = useState("");
  const [foodOrigin, setFoodOrigin] = useState("");
  const [foodDrink, setFoodDrink] = useState("");

  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/read").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const addToMenu = () => {
    Axios.post("http://localhost:8080/insert", {
      foodName: foodName,
      days: days,
      foodType: foodType,
      foodOrigin: foodOrigin,
      foodDrink: foodDrink,
    });
  };

  return (
    <div className="App">
      <h1>Food Menu Model</h1>

      <label>Food Name:</label>
      <input
        type="text"
        onChange={(event) => {
          setFoodName(event.target.value);
        }}
      />
      <label>Expiration Date(days after made):</label>
      <input
        type="number"
        onChange={(event) => {
          setDays(event.target.value);
        }}
      />
      <label>Type Of Food(Sweet or Salty):</label>
      <input
        type="text"
        onChange={(event) => {
          setFoodType(event.target.value);
        }}
      />
      <label>Country Of Origin:</label>
      <input
        type="text"
        onChange={(event) => {
          setFoodOrigin(event.target.value);
        }}
      />
      <label>Best Choose To Drink With:</label>
      <input
        type="text"
        onChange={(event) => {
          setFoodDrink(event.target.value);
        }}
      />

      <button onClick={addToMenu}>Add to Menu Model</button>

      <h1> Food List </h1>

      {foodList.map((val, key) => {
        return (
          <div key={key}>
            <h2>{val.foodName}</h2>
            <h3>{val.expirationDate}</h3>
            <h3>{val.typeOfFood}</h3>
            <h3>{val.countryOfOrigin}</h3>
            <h3>{val.bestDrinkAsASideDish}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
