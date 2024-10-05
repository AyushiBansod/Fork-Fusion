import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner"; // Import the Spinner component

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const usedSlogans = new Set(); // Set to track used slogans
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch dishes");
        }
        const data = await response.json();
        const mealsWithPrices = data.meals.map((meal) => ({
          ...meal,
          price: (Math.random() * (10 - 5) + 5).toFixed(2), // Random price between 5 and 20 euros
        }));
        setDishes(mealsWithPrices);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  // Helper function to generate a random star rating (between 3 and 5 stars)
  const getRandomRating = () => {
    const stars = Math.floor(Math.random() * 3) + 3; // Ensures rating is 3, 4, or 5 stars
    return "★".repeat(stars) + "☆".repeat(5 - stars);
  };

  // Helper function to generate a random slogan/description for each dish without repetition
  const generateUniqueDescription = () => {
    const flavors = [
      "Rich and flavorful",
      "Delightfully light",
      "Savory and indulgent",
      "A burst of freshness",
      "Hearty and delicious",
      "Perfectly balanced",
    ];

    const textures = [
      "smooth and creamy",
      "crispy and golden",
      "tender and juicy",
      "soft and pillowy",
      "light and flaky",
      "chewy and satisfying",
    ];

    const styles = [
      "a traditional Italian masterpiece",
      "a fusion of classic and modern",
      "a taste of Mediterranean charm",
      "an authentic culinary experience",
      "inspired by Italy's finest",
      "a timeless recipe with a twist",
    ];

    // Keep trying to generate a unique slogan
    while (true) {
      const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
      const randomTexture =
        textures[Math.floor(Math.random() * textures.length)];
      const randomStyle = styles[Math.floor(Math.random() * styles.length)];

      const slogan = `${randomFlavor}, ${randomTexture}, ${randomStyle}.`;

      // If the slogan hasn't been used yet, return it and add it to the set of used slogans
      if (!usedSlogans.has(slogan)) {
        usedSlogans.add(slogan);
        return slogan;
      }
    }
  };

  if (loading) return <Spinner />; // Show the spinner while loading
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="menu-wrapper">
      <div
        className="menu-header"
        style={{ marginTop: "-2%", paddingBottom: "-4%" }}
      >
        <h2 style={{ paddingBottom: "18px" }}>Our Menu</h2>
      </div>
      <div className="menu-grid">
        {dishes.length > 0 ? (
          dishes.map((dish) => {
            const dishName = dish.strMeal || "Unknown Dish"; // Ensure dish name is read properly
            const price = `€ ${dish.price}`;
            const description = generateUniqueDescription(); // Generate unique slogan

            return (
              <div className="menu-card" key={dish.idMeal}>
                <div className="item">
                  {/* Front Side */}
                  <div className="item-front">
                    <img
                      src={dish.strMealThumb}
                      alt={dishName}
                      className="item-image"
                    />
                    <h3>{dishName}</h3>
                    <p className="price">Price: {price}</p>
                  </div>

                  {/* Back Side */}
                  <div className="item-back">
                    <div className="rating-box">
                      <p
                        className="dish-description"
                        style={{
                          color: "#ebebeb",
                          filter:
                            "drop-shadow(0 0 5px #FFFFFF) drop-shadow(0 0 2px rgba(255, 255, 255, 0.1))",
                          fontSize: "1.8rem",
                          marginBottom: "5px",
                          fontStyle: "italic",
                        }}
                      >
                        {description}
                      </p>
                      <br />
                      <p className="rating">Rating: {getRandomRating()}</p>
                      <button
                        className="order-btn"
                        onClick={() =>
                          navigate("/order-now", {
                            state: {
                              dish: {
                                dishName: dish.strMeal,
                                price: dish.price,
                                image: dish.strMealThumb,
                              },
                            },
                          })
                        }
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No dishes available</div>
        )}
      </div>
    </div>
  );
};

export default Menu;
