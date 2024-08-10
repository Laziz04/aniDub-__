import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import logo from "../imgs/aniDub_logo.png";
import bars from "../imgs/bars.png";
import user from "../imgs/user.png";
import exit from "../imgs/off.png";
import { toast, ToastContainer } from "react-toastify";
import "./menu.css";
import { RiSearchLine } from "react-icons/ri";
import axios from "axios";
import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import { Button } from "antd";
import { css } from "@emotion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSignModal, setOpenSignModal] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const navigate = useNavigate();

  interface SearchResult {
    name: string;
    img: string;
  }
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== "") {
      try {
        const response = await axios.get<SearchResult[]>(
          `https://6d548820c3f18dbd.mokky.dev/Cards`,
          {
            params: { name: query },
          }
        );
        setResults(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  const openSignUpModal = () => setOpenSignModal(true);
  const closeSignUpModal = () => {
    setOpenSignModal(false);
    setName("");
    setPhone("+998");
    setPassword("");
    setRepeatPassword("");
  };

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedPhone = localStorage.getItem("phone");

    if (storedName && storedPhone) {
      setName(storedName);
      setPhone(storedPhone);
      setIsLoggedIn(true);
    }
  }, []);

  const openProfile = () => setOpenProfileModal(true);
  const closeProfile = () => setOpenProfileModal(false);

  const handleSubmit = async () => {
    if (
      name.trim() &&
      phone.length >= 10 &&
      password &&
      password === repeatPassword
    ) {
      try {
        const Profilimg = localStorage.getItem("selectedProfilImage");

        const requestBody = {
          name,
          phone,
          password,
          Profilimg,
        };

        const response = await fetch(
          "https://6d548820c3f18dbd.mokky.dev/access",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Save user data to localStorage
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("password", password);
        localStorage.setItem("selectedProfilImage", Profilimg || ""); // Save Profilimg in localStorage

        // Update state and close modal
        setIsLoggedIn(true);
        closeSignUpModal();
      } catch (error) {
        toast.error("Failed to fetch data");
        closeSignUpModal();
      }
    } else {
      toast.error(
        "Iltimos, haqiqiy ism, telefon raqamini kiriting va parollar mos kelishiga ishonch hosil qiling."
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    setIsLoggedIn(false);
    setName("");
    setPhone("+998");
    closeProfile();
    navigate("/");
  };

  const goToProfile = () => {
    closeProfile();
    navigate("/profil");
  };

  return (
    <nav className="">
      <div className=" px-4">
        <div className="respons flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              onClick={() => navigate("/Menu")}
              className="w-32 cursor-pointer"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative flex gap-10 items-center">
              <RiSearchLine
                className="text-teal-500 text-2xl cursor-pointer transition-transform hover:scale-105"
                onClick={() => setShowSearchInput(!showSearchInput)}
              />
              {showSearchInput && (
                <input
                  type="text"
                  className="search_input absolute right-7 mt-2 w-48 border rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Search..."
                  style={{
                    transition: "width 0.3s ease-in-out",
                    width: "200px",
                  }}
                />
              )}
            </div>
            {!isLoggedIn ? (
              <button
                style={{
                  backgroundImage: `url('https://i.pinimg.com/originals/ab/39/43/ab394303fe32175912ee20eae0e23cc5.gif')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  width: "140px",
                }}
                onClick={openSignUpModal}
                className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-teal-500 rounded-lg shadow-lg hover:bg-teal-600 transition-colors"
              >
                Kirish
                <TbLogin2 className="text-xl" />
              </button>
            ) : (
              <button
                onClick={openProfile}
                className="flex items-center gap-2 px-4 py-2 text-teal-500 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
              >
                <img className="w-5 h-5" src={user} alt="Profile" />
                Profil
              </button>
            )}
          </div>
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img className="w-10 h-10" src={bars} alt="Menu" />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0  bg_fg_flter z-30 w-64 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease-out" }}
      >
        <div className="p-4">
          {!isLoggedIn ? (
            <button
              className="w-full px-4 py-2 text-white  shadow-lg hover:bg-teal-600 transition-colors relative overflow-hidden"
              onClick={openSignUpModal}
              style={{
                backgroundImage: `url('https://i.pinimg.com/originals/ab/39/43/ab394303fe32175912ee20eae0e23cc5.gif')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "30px",
              }}
            >
              <div className="absolute inset-0 transition-transform transform scale-100 hover:scale-110" />
              Kirish
            </button>
          ) : (
            <button
              onClick={openProfile}
              className="w-full flex items-center gap-2 px-4 py-2 text-teal-500 bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 transition-colors"
            >
              <FaUser />
              Profil
            </button>
          )}
        </div>
        <div className="relative flex items-center p-4">
          <RiSearchLine
            className="text-teal-500 text-2xl cursor-pointer transition-transform hover:scale-105"
            onClick={toggleSearchInput}
          />
          {showSearchInput && (
            <div className="relative flex items-center p-0 ">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                className="border search_input px-4 py-2 pl-10 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Search..."
                style={{ transition: "width 0.3s ease-in-out", width: "200px" }}
              />
              <RiSearchLine
                className="absolute right-6 text-teal-500 text-xl cursor-pointer"
                onClick={toggleSearchInput}
              />
              {searchQuery && (
                <div
                  className={`absolute top-full left-0 mt-2 transition-all duration-300 ease-in-out ${
                    searchQuery ? "opacity-100 h-80" : "opacity-0 w-0 h-0"
                  } bg-white border border-teal-500 shadow-lg`}
                  style={{
                    marginTop: "200px",
                    width: "200px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="relative ps-4 max-h-60 overflow-auto">
                    <ul>
                      {results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-center p-2  search_conytainer"
                        >
                          <img
                            src={result.img}
                            alt={result.name}
                            className="w-12 h-12 rounded-full mr-3"
                          />
                          <span>{result.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
