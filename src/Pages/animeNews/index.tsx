import React, { useState, useEffect, useRef } from "react";
import { Card } from "antd";
import { FaChevronRight } from "react-icons/fa6";

const images = [
  "https://www.youtube.com/embed/JruhSM_G5g4",
  "https://www.youtube.com/embed/ryrclNQl5PU",
  "https://www.youtube.com/embed/9G8Q5ycM2sc",
  "https://www.youtube.com/embed/ZYcdI99GmUM",
];

const Newcard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const nextSlide = () => {
    if (!isPaused) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleMouseOver = () => setIsPaused(true);
  const handleMouseOut = () => setIsPaused(false);

  const cardStyle = {
    backgroundImage:
      "url(https://s3-alpha-sig.figma.com/img/b323/90e5/6a6ed29982732fc28426edc2f3927d03?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f1jDNAgiQjpcrDQZAWvaggYW3EETyPDaoIkQIMl~VnGOqX9Smeu0KpMlJmWBNetYUP2-gfY8u7UkkHgkzNrefLvUHIgGnWSyzGTSmM34QwDAyeqGcRRRZclriTRKMBVpZwbqKbjnVeKK5PquYXQL-~Bb-Nf5laoD1wenB8iwoumjyX9A-R53VJo3DsBx4oofOdzz-Vx2TJToR1AMPA7aJw2qIZx9j-gZO2~B4~0reB4I1M9spMBMqCACmLhVwEtiWKOIgi9kbczy27xJEkIzYD~WwBjy6U48DzaqpY-Ir4SPuUW~wGREOSofP0JB70YMra7OH-zRN6C~MyVCJjhv6A__)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as "relative",
    borderRadius: "0%",
  };

  return (
    <Card
      className="relative w-full bg-cover bg-center font-bold text-cyan-50 text-xl"
      style={cardStyle}
    >
      <div className="container m-auto py-20  w-full">
        <h1 className="font-bold  text-lg md:text-left md:text-2xl">
          <span className="text-cyan-400">A</span>nime Yangiliklar
        </h1>
        <hr className="my-4" />
        <div className="md:flex md:justify-between">
          <div className=" md:text-left md:w-1/2 mb-8 md:mb-0">
            <div>
              2024-Yil Qish faslida <br /> chiqadigan animelar haqida <br />{" "}
              malumotlar
            </div>
            <div className="mt-8 md:mt-16">
              <span className="text-cyan-400">Anemelarni</span> aniDubuz <br />{" "}
              saytida ko’rishinggiz <br /> mumkin!{" "}
            </div>
          </div>

          <div className="md:w-1/2 flex  gap-2 items-center">
            <div className="rounded-sm mb-4">
              <iframe
                ref={iframeRef}
                style={{
                  borderRadius: "10px",
                }}
                width="600"
                height="300"
                src={images[currentIndex]}
                title="Anime Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              ></iframe>
            </div>
            <button
              onClick={nextSlide}
              className="px-4 py-2 text-blue-700 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Newcard;
