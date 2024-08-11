import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronRight, FaAngleLeft } from "react-icons/fa";
import "../trylerlar/css.css";
import { message } from "antd";

interface SliderItem {
  img: string;
}

const TREYLERLAR = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState<SliderItem[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    axios
      .get("https://6d548820c3f18dbd.mokky.dev/treylerSlder")
      .then((res) => {
        setSliderData(res.data);
      })
      .catch(() => {
        console.log("Slayder maʼlumotlarini olishda xatolik yuz berdi");
        showError("Slayder maʼlumotlarini olishda xatolik yuz berdi");
      });
  }, []);

  const showError = (errorMsg: string) => {
    messageApi.open({
      type: "error",
      content: errorMsg,
      style: {
        marginTop: "10px",
        marginRight: "10px",
        textAlign: "right",
      },
    });
  };

  const totalCards = sliderData.length;
  const visibleCards = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Intervalni sekinroq qilish uchun 5 sekund qiling

    return () => clearInterval(interval);
  }, [totalCards]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalCards - visibleCards ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - visibleCards : prevIndex - 1
    );
  };

  const visibleSliderData = sliderData.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  return (
    <div className="flex justify-center">
      <div className="container py-5">
        {contextHolder}
        <div className=" flex items-center justify-between ">
          <h2 className=" text-start mb-4">YANGI MAVSUM - TREYLERLAR</h2>
          <div className=" flex items-center gap-4">
            <FaAngleLeft
              className="text-blue-400 cursor-pointer"
              onClick={handlePrev}
              size={26}
            />
            <FaChevronRight
              className=" text-blue-400 cursor-pointer"
              onClick={handleNext}
              size={26}
            />
          </div>
        </div>
        <div className="border"></div>
        {/* Slider */}
        <div className="flex items-center gap-4 justify-between p-0 m-0">
          <div className="slider flex space-x-4 mx-auto">
            {visibleSliderData.map((slide, index) => (
              <div
                key={index}
                className="slider-card transition-all duration-500 ease-in-out transform hover:scale-105"
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "ease-in-out",
                    cursor: "pointer",
                  }}
                  src={slide.img}
                  alt="anime"
                  className="slider-image"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="border mt-5"></div>
      </div>
    </div>
  );
};

export default TREYLERLAR;
