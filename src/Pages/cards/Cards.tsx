import React, { useEffect, useState } from "react";
import { TbEye } from "react-icons/tb";
import axios from "axios";
import "tailwindcss/tailwind.css";
import "../cards/css.css";

interface CardData {
  id: number;
  name: string;
  desc: string;
  img: string;
  data: string;
  views: string;
  isPaid: boolean;
  eye: number;
}

const Cards: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    axios
      .get("https://6d548820c3f18dbd.mokky.dev/Cards")
      .then((response) => setCards(response.data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <div className="container mx-auto mt-5 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {cards.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-lg overflow-hidden Cardss"
          >
            <img src={item.img} alt={item.name} />

            <div className="card_body">
              <h2 className="text-xl font-bold mb-2 text-sm lg:text-xl">
                {item.name}
              </h2>
              <div className="flex justify-between items-center mt-5">
                <div className="flex items-center gap-2 ">
                  <TbEye className="text-lg text-[#0b95ff]" />
                  <span className="text-gray-600 text-xs lg:text-sm">
                    {item.eye}
                  </span>
                </div>
                <button className="bg-gradient-to-b from-[#ffcc14] to-[#ffe27c] text-black font-semibold px-2 py-1 rounded">
                  Pullik
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
