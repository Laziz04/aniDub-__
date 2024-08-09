import { Route, Routes, useLocation } from "react-router-dom";
import Animation from "./Pages/animation/Animation";
import Cards from "./Pages/cards/Cards";
import Filter from "./Pages/filterButton/Filter";
import Footer from "./Pages/footer/Footer";
import Navbar from "./Pages/Menu_layout/Layout";
import NewsCard from "./Pages/newsCard/Newcard";
import News from "./Pages/News/News";
import AnidubDashboard from "./Pages/Dashbard/Dashboard";

const Main = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      {!isDashboard && <Navbar />}
      {!isDashboard && <Animation />} {/* Tugatilgan */}
      {!isDashboard && <Filter />} {/* Islom */}
      {!isDashboard && <NewsCard />} {/* Islom */}
      {!isDashboard && <Cards />} {/* Abdulaziz */}
      {!isDashboard && <News />} {/* Asilbek */}
      {!isDashboard && <Footer />} {/* Lobar */}
      <Routes>
        <Route path="/dashboard" element={<AnidubDashboard />} />
        {/* Qo'shimcha routelarni shu yerga qo'shishingiz mumkin */}
      </Routes>
    </>
  );
};

export default Main;
