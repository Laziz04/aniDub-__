import React, { useState } from "react";
import { Card } from "antd";

const images = ["https://via.placeholder.com/800x400?text=Image+1", "https://via.placeholder.com/800x400?text=Image+2", "https://via.placeholder.com/800x400?text=Image+3"];

const Newcard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card
        className="relative w-full h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://s3-alpha-sig.figma.com/img/b323/90e5/6a6ed29982732fc28426edc2f3927d03?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f1jDNAgiQjpcrDQZAWvaggYW3EETyPDaoIkQIMl~VnGOqX9Smeu0KpMlJmWBNetYUP2-gfY8u7UkkHgkzNrefLvUHIgGnWSyzGTSmM34QwDAyeqGcRRRZclriTRKMBVpZwbqKbjnVeKK5PquYXQL-~Bb-Nf5laoD1wenB8iwoumjyX9A-R53VJo3DsBx4oofOdzz-Vx2TJToR1AMPA7aJw2qIZx9j-gZO2~B4~0reB4I1M9spMBMqCACmLhVwEtiWKOIgi9kbczy27xJEkIzYD~WwBjy6U48DzaqpY-Ir4SPuUW~wGREOSofP0JB70YMra7OH-zRN6C~MyVCJjhv6A__)",
        }}
      >
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
          <button onClick={prevSlide} className="bg-black text-white px-4 py-2 rounded-full">
            ‹
          </button>
        </div>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-full object-cover" />
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
          <button onClick={nextSlide} className="bg-black text-white px-4 py-2 rounded-full">
            ›
          </button>
          <button onClick={nextSlide} className="bg-black text-white px-4 py-2 rounded-full">
            ›
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Newcard;
