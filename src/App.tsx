import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Animation from "./Pages/headerAnimation/index";
import Navbar from "./Pages/Menu_layout";
import Filter from "./Pages/filterButton";
import Newcard from "./Pages/newsCard";
import Cards from "./Pages/cards";
import News from "./Pages/animeNews";
import Footer from "./Pages/footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Animation /> {/* Tugatilgan */}
      <Filter /> {/* Islom */}
      <Newcard /> {/* Islom */}
      <Cards /> {/* Abdulaziz */}
      <News /> {/* Asil */}
      <Footer />{/* Lobar */}
    </div>
  );
}

export default App;
