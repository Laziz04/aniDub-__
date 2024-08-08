import React, { useState } from "react";
import { Card } from "antd";
import { FaChevronRight } from "react-icons/fa6";
const images = ["https://via.placeholder.com/800x400?text=Image+1", "https://via.placeholder.com/800x400?text=Image+2", "https://via.placeholder.com/800x400?text=Image+3"];

const Newcard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const cardStyle = {
    backgroundImage: "url(https://s3-alpha-sig.figma.com/img/b323/90e5/6a6ed29982732fc28426edc2f3927d03?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f1jDNAgiQjpcrDQZAWvaggYW3EETyPDaoIkQIMl~VnGOqX9Smeu0KpMlJmWBNetYUP2-gfY8u7UkkHgkzNrefLvUHIgGnWSyzGTSmM34QwDAyeqGcRRRZclriTRKMBVpZwbqKbjnVeKK5PquYXQL-~Bb-Nf5laoD1wenB8iwoumjyX9A-R53VJo3DsBx4oofOdzz-Vx2TJToR1AMPA7aJw2qIZx9j-gZO2~B4~0reB4I1M9spMBMqCACmLhVwEtiWKOIgi9kbczy27xJEkIzYD~WwBjy6U48DzaqpY-Ir4SPuUW~wGREOSofP0JB70YMra7OH-zRN6C~MyVCJjhv6A__)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as "relative",
  };

  return (
    <Card className=" relative w-full bg-cover bg-center font-bold text-cyan-50 text-xl" style={cardStyle}>
      <div className="container  m-auto py-20 px-10 ">
        <h1 className="font-bold">
          {" "}
          <span className="text-cyan-400">A</span>nime Yangiliklar
        </h1>
        <hr />
        <div className="row mt-10">
          <div className="col-md-6">
            <div>
              2024-Yil Qish faslida <br /> chiqadigan animelar haqida <br /> malumotlar
            </div>
            <div className="mt-16">
              <span className="text-cyan-400">Anemelarni</span> aniDubuz <br /> saytida ko’rishinggiz <br /> mumkin!{" "}
            </div>
          </div>

          <div className="col-md-6">
            <div className=" flex">
              <div className=" rounded-sm">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-fullh-fullobject-cover  rounded-xl" />
              </div>
              <div className="m-auto">
                <button onClick={nextSlide} className="  px-4 py-2 ">
                  <FaChevronRight />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Newcard;
