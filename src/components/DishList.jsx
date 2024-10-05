import React, { useEffect, useState } from "react";

function DishList() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch Italian dishes from TheMealDB API
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
      .then((response) => response.json())
      .then((data) => {
        setDishes(data.meals);
      })
      .catch((error) => console.error("Error fetching dishes:", error));
  }, []);

  return (
    <div className="dishes-container">
      {dishes &&
        dishes.map((dish) => (
          <div key={dish.idMeal} className="dish-card">
            <img
              src={dish.strMealThumb}
              alt={dish.strMeal}
              className="dish-image"
            />
            <h2 className="dish-name">{dish.strMeal}</h2>
          </div>
        ))}
    </div>
  );
}

export default DishList;
