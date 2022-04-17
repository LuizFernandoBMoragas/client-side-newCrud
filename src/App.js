import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);
  const [foodType, setFoodType] = useState("");
  const [foodOrigin, setFoodOrigin] = useState("");
  const [foodDrink, setFoodDrink] = useState("");

  const [newFoodDrink, setNewFoodDrink] = useState("");

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

  const updateDrink = (id) => {
    Axios.put("http://localhost:8080/update", {
      id: id,
      newFoodDrink: newFoodDrink,
    });
  };

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:8080/delete/${id}`);
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
          <div key={key} className="container">
            <h2>Food Name: {val.foodName}</h2>
            <h3>Days Until It Expires: {val.expirationDate}</h3>
            <h3>Type Of Food: {val.typeOfFood}</h3>
            <h3>Origin Country: {val.countryOfOrigin}</h3>
            <h3>Best to drink with: {val.bestDrinkAsASideDish}</h3>

            <div className="Update-section">
              <input
                type="text"
                placeholder="New Best Drink"
                className="update-input"
                onChange={(event) => {
                  setNewFoodDrink(event.target.value);
                }}
              />
              <div>
                <button
                  onClick={() => {
                    updateDrink(val._id);
                  }}
                >
                  Update Drink
                </button>
                <button
                  onClick={() => {
                    deleteFood(val._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
