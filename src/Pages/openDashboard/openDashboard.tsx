import React, { useState } from "react";
import { FaHome, FaUser, FaBell, FaCog, FaShoppingCart } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import logo from "../imgs/aniDub_logo.png";
import home from "../imgs/home.png";
import settings from "../imgs/set.png";
import shop from "../imgs/shop.png";
import message from "../imgs/mes.png";
import user from "../imgs/user.png";
import qon from "../imgs/qon.png";

import { Drawer, Input } from "antd";
import "../openDashboard/opendashboar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const showDrawer = () => setDrawerOpen(true);
  const onClose = () => setDrawerOpen(false);

  return (
    <nav className="text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-4" />
      </div>

      <div className="relative">
        <Input
          style={{
            borderRadius: "20px",
            padding: "7px",
            width: "500px",
            paddingLeft: "15px",
          }}
          placeholder="aniDub"
        />
        <CiSearch
          style={{
            position: "absolute",
            top: "18px",
            right: "0",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            color: "grey",
            cursor: "pointer",
          }}
        />
      </div>

      <div className="hidden md:flex items-center space-x-4">
        {[home, settings, shop, message, user, qon].map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="w-8 h-8 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            style={{
              width: `${
                index === 0
                  ? "30px"
                  : index === 1
                  ? "40px"
                  : index === 2
                  ? "35px"
                  : index === 3
                  ? "40px"
                  : index === 4
                  ? "25px"
                  : "50px"
              }`,
              height: `${
                index === 0
                  ? "45px"
                  : index === 1
                  ? "40px"
                  : index === 2
                  ? "30px"
                  : index === 3
                  ? "30px"
                  : index === 4
                  ? "25px"
                  : "35px"
              }`,
            }}
          />
        ))}
        <div className="flex justify-center items-center cursor-pointer border border-blue-500 rounded-full w-12 h-12 p-1">
          <img
            onClick={showDrawer}
            src="https://i.pinimg.com/736x/5d/b2/cd/5db2cdd843a4c226e8c62363682b82f4.jpg"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-xl">
          <HiOutlineBars3BottomRight />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-gray-800 p-4 rounded-lg shadow-lg w-48">
          <div className="flex flex-col space-y-4">
            {[home, settings, shop, message, user, qon].map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="w-8 h-8 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
              />
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Profile
            </button>
          </div>
        </div>
      )}

      <Drawer title="Basic Drawer" onClose={onClose} open={drawerOpen}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </nav>
  );
};

export default Navbar;
