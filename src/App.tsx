import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Animation from "./Pages/headerAnimation/Animation";
import Navbar from "./Pages/Menu_layout/Layout";
import Filter from "./Pages/filterButton/Filter";
import Newcard from "./Pages/newsCard/Newcard";
import Cards from "./Pages/cards/Cards";
import News from "./Pages/animeNews/News";
import Footer from "./Pages/footer/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Animation /> {/* Tugatilgan */}
      <Filter /> {/* Islom */}
      <Newcard /> {/* Islom */}
      <Cards /> {/* Abdulaziz */}
      <News /> {/* Asilbek */}
      <Footer /> {/* Lobar */}
    </div>
  );
}

export default App;
