import React from "react";
import Header from "./components/Header";
import { ImSpoonKnife } from "react-icons/im";
import { MdMenuBook } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { CiCircleChevDown } from "react-icons/ci"; // Import circle icon
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import OrderNow from "./components/OrderNow";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-now" element={<OrderNow />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      {/* Today's Special Section */}
      <div className="container">
        <div className="todays-special">
          <h2>
            <i>
              Today's Special - <ImSpoonKnife />
            </i>
          </h2>

          <marquee
            behavior="scroll"
            direction="down"
            style={{ height: "80vh", overflow: "hidden" }}
            onMouseOver={(e) => e.currentTarget.stop()}
            onMouseOut={(e) => e.currentTarget.start()}
          >
            <ul>
              <li>
                <b>Wood Fired Pizza :- &#8364; 12</b>
                <br /> Wood fire pizzas are cooked in brick ovens that are
                heated directly using wood fire.
              </li>
              <li>
                <b>Lasagna :- &#8364; 14.5</b>
                <br /> Lasagna, pasta dish of Italian origin, made with broad
                often ruffled noodles and a tomato or white sauce.
              </li>
              <li>
                <b>Pasta :- &#8364; 9.5</b>
                <br /> Pasta is believed to have independently originated in
                Italy and is a staple food of Italian cuisine.
              </li>
              <li>
                <b>Risotto :- &#8364; 12.5</b>
                <br /> Risotto is an Italian rice dish cooked with broth until
                it reaches a creamy consistency.
              </li>
              <li>
                <b>Gelato :- &#8364; 14.5</b>
                <br /> It was during the Italian Renaissance when the great
                tradition of Italian gelato began.
              </li>
              <li>
                <b>Arancini :- &#8364; 13.7</b>
                <br /> Arancini are a popular Italian street food made of
                bite-sized breaded and lightly fried spheres of risotto.
              </li>
            </ul>
          </marquee>
        </div>
        <div className="image-container">
          <img src="header.jpg" className="background" alt="header" />
        </div>
      </div>

      {/* Our Menu Heading */}
      <div className="our-menu-section">
        <i>
          <h2 className="our-menu-heading">
            Our Menu <MdMenuBook className="menu-icon" />
          </h2>
        </i>
      </div>

      {/* Dishes Section */}
      <div className="dishes-section">
        <div className="dish">
          <div className="dish-front">
            <img
              src="/Wood-fired-pizza.png"
              alt="Pizza"
              className="dish-image"
            />
            <h3>Wood-Fired Pizza</h3>
            <p>&euro; 8.50</p>
          </div>
          <div className="dish-back">
            <div className="price-box">
              <h3>"Wood-Fired Goodness!"</h3>
              <br />
              <p>Rating: ★★★★☆</p>
              <br />
              <button
                className="order-now-btn"
                onClick={() =>
                  navigate("/order-now", {
                    state: {
                      dish: {
                        dishName: "Wood-Fired Pizza",
                        price: 8.5,
                        image: "/Wood-fired-pizza.png",
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

        <div className="dish">
          <div className="dish-front">
            <img src="/Lasagna.png" alt="Lasagna" className="dish-image" />
            <h3>Lasagna</h3>
            <p>&euro; 7.00</p>
          </div>
          <div className="dish-back">
            <div className="price-box">
              <h3>"Cheesy, Meaty, and Oh-So-Delicious!"</h3>
              <br />
              <p>Rating: ★★★★★</p>
              <br />
              <button
                className="order-now-btn"
                onClick={() =>
                  navigate("/order-now", {
                    state: {
                      dish: {
                        dishName: "Lasagna",
                        price: 7.0,
                        image: "/Lasagna.png",
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

        <div className="dish">
          <div className="dish-front">
            <img src="/pasta.jpg" alt="Pasta" className="dish-image" />
            <h3>Pasta</h3>
            <p>&euro; 7.30</p>
          </div>
          <div className="dish-back">
            <div className="price-box">
              <h3>"Taste The Pasta Magic!"</h3>
              <br />
              <p>Rating: ★★★★☆</p>
              <br />
              <button
                className="order-now-btn"
                onClick={() =>
                  navigate("/order-now", {
                    state: {
                      dish: {
                        dishName: "Pasta",
                        price: 7.3,
                        image: "/pasta.jpg",
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

        <div className="dish">
          <div className="dish-front">
            <img src="/spaghetti.png" alt="Risotto" className="dish-image" />
            <h3>Spaghetti</h3>
            <p>&euro; 12.50</p>
          </div>
          <div className="dish-back">
            <div className="price-box">
              <h3>"Creamy and Satisfying!"</h3>
              <br />
              <p>Rating: ★★★★☆</p>
              <br />
              <button
                className="order-now-btn"
                onClick={() =>
                  navigate("/order-now", {
                    state: {
                      dish: {
                        dishName: "Spaghetti",
                        price: 12.5,
                        image: "/spaghetti.png",
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

        <div className="dish">
          <div className="dish-front">
            <img src="/Gelato.png" alt="Gelato" className="dish-image" />
            <h3>Gelato</h3>
            <p>&euro; 4.00</p>
          </div>
          <div className="dish-back">
            <div className="price-box">
              <h3>"Smart Flavour For Smart People!"</h3>
              <br />
              <p>Rating: ★★★★★</p>
              <br />
              <button
                className="order-now-btn"
                onClick={() =>
                  navigate("/order-now", {
                    state: {
                      dish: {
                        dishName: "Gelato",
                        price: 4.0,
                        image: "/Gelato.png",
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

        <div className="dish">
          <div className="dish-front">
            <img src="/arancini.png" alt="Arancini" className="dish-image" />
            <h3>Arancini</h3>
            <p>&euro; 4.75</p>
          </div>
          <div className="dish-back">
            <div className="price-box">
              <h3>"A Taste Sensation!"</h3>
              <br />
              <p>Rating: ★★★★☆</p>
              <br />
              <button
                className="order-now-btn"
                onClick={() =>
                  navigate("/order-now", {
                    state: {
                      dish: {
                        dishName: "arancini",
                        price: 4.75,
                        image: "/arancini.png",
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
        <div
          className="circle-icon-container"
          onClick={() => navigate("/menu")}
        >
          <CiCircleChevDown className="circle-icon" />
        </div>
      </div>

      {/* Our Organization Section */}
      <div className="our-menu-section">
        <i>
          <h2 className="our-menu-heading">
            Our Organization <FaBuilding className="menu-icon" />
          </h2>
        </i>
      </div>
      <div className="organization-section">
        <div className="restaurant-info">
          <h3>About Caio Bella Cucina</h3>
          <p>
            Welcome to Caio Bella Cucina, where we serve authentic Italian
            flavors with a modern twist. Established in 1990, our restaurant is
            a family-run gem that’s known for its fresh ingredients and
            welcoming atmosphere. Whether you're here for a quick meal or a
            lavish dinner, we promise you an unforgettable dining experience.
          </p>
          <p>
            At Caio Bella Cucina, we believe in offering more than just food –
            we create a warm and inviting environment where friends and family
            can come together to celebrate life’s moments, big or small. Our
            mission is to preserve the rich culinary traditions of Italy while
            infusing them with a contemporary flair, ensuring each customer
            leaves not only satisfied but excited to return.
          </p>
        </div>
        <div className="organization-image">
          <img src="/Hotel.jpg" alt="Our Restaurant" />
        </div>
      </div>
    </>
  );
}

export default App;
