import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { products } from "../constants/data";
import { thumbnails } from "../constants/data";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { setShowGallery } = useContext(AppContext);

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const slideNext = () => {
    let serial = currentImage;
    if (serial === products.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((s) => s + 1);
    }
  };

  const slidePrev = () => {
    let serial = currentImage;
    if (serial == 0) {
      setCurrentImage(products.length - 1);
    } else {
      setCurrentImage((s) => s - 1);
    }
  };

  return (
    <div className="hidden fixed md:flex flex-col justify-center items-center pt-[4rem] pb-[2rem] inset-0 z-[100] bg-[#000b]">
      <div className="relative left-[245px]">
        <svg
          className="w-[40px] h-[40px] fill-[#d2d5dc] hover:fill-orange cursor-pointer"
          onClick={() => setShowGallery((s) => !s)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            // fill-rule="evenodd"
          />
        </svg>
      </div>

      <div className="relative w-[500px] rounded-[12px]">
        <div
          onClick={() => slidePrev()}
          className="cursor-pointer bg-white h-[55px] w-[55px] grid place-items-center rounded-full absolute left-[-25px] top-1/2 transform -translate-y-1/2"
        >
          <svg
            width="22"
            height="22"
            className="stroke-[#1D2026] hover:stroke-orange"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>

        <img
          className="md:rounded-[12px] w-full h-full object-fill cursor-pointer"
          src={products[currentImage]}
          alt="product image"
        />

        <div
          onClick={() => slideNext()}
          className="cursor-pointer bg-white h-[55px] w-[55px] grid place-items-center rounded-full absolute right-[-25px] top-1/2 transform -translate-y-1/2"
        >
          <svg
            width="22"
            height="22"
            className="ml-[9px] stroke-[#1D2026] hover:stroke-orange"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="md:flex hidden gap-[31px] rounded-sm mt-[18px]">
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className={`bg-white ${
              index === currentImage ? "ring-[2px] ring-orange" : ""
            } w-[87px] rounded-[6px]`}
          >
            <img
              className={`${
                index === currentImage ? "opacity-[0.3]" : ""
              } rounded-[6px] hover:opacity-[0.4] cursor-pointer`}
              src={thumbnail}
              alt="product thumbnail"
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
