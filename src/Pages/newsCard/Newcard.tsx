import React, { useState, useEffect } from "react";
import axios from "axios";
import "../newsCard/newcard.css";
import { message } from "antd";
import { AiFillLeftCircle } from "react-icons/ai";
import { FaCircleChevronRight } from "react-icons/fa6";
import { TbEye } from "react-icons/tb";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

interface SliderItem {
  id: number;
  img: string;
  eye: string;
  name: string;
  new: string;
}

const NewsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState<SliderItem[]>([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    axios
      .get("https://6d548820c3f18dbd.mokky.dev/news_card")
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
  const visibleCards = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

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
    <div
      style={{
        marginTop: "40px",
      }}
      className="flex justify-center"
    >
      <div className="container py-5">
        {contextHolder}
        <div className=" flex items-center justify-between ">
          <h2 className=" text-start mb-4">YANGI MAVSUM - Animelar</h2>
          <div className=" flex items-center gap-4">
            <AiFillLeftCircle
              className="text-blue-400 cursor-pointer"
              onClick={handlePrev}
              size={31}
            />
            <FaCircleChevronRight
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
            {visibleSliderData.map((item, index) => (
              <div key={index} className="slider-card relative">
                <div
                  key={item.id}
                  className="shadow-lg overflow-hidden bg-white roundeed_respons"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full object-cover img_respons"
                  />

                  <div className="card_body_news">
                    <h2 className="text-sm font-bold mb-1 truncate lg:text-base">
                      {item.name}
                    </h2>
                    <div className="flex justify-between items-center mt-3">
                      <div
                        style={{
                          gap: "100px",
                        }}
                        className="flex items-center"
                      >
                        <div className=" flex gap-2 items-center">
                          <TbEye className="text-md text-[#0b95ff]" />
                          <span className="text-gray-600 text-xs lg:text-sm">
                            {item.eye}
                          </span>
                        </div>
                        <div className=" flex items-center gap-2">
                          <SiGoogledisplayandvideo360 />
                          <span className="text-gray-600 text-xs lg:text-sm">
                            {item.new}
                          </span>
                        </div>
                      </div>
                      {/* <button className="bg-gradient-to-b from-[#ffcc14] to-[#ffe27c] text-black font-semibold px-2 py-1 rounded">
                  Pullik
                </button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border mt-5"></div>
      </div>
    </div>
  );
};

export default NewsCard;
