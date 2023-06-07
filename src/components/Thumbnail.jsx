import React, { useContext } from "react";
import { thumbnails } from "../constants/data";
import { AppContext } from "../contexts/AppContext";

const Thumbnail = () => {
  const { selectedImage, handleThumbnailClick } = useContext(AppContext);

  return (
    <div className="md:flex hidden gap-[31px] rounded-sm mt-[28px]">
      {thumbnails.map((thumbnail, index) => (
        <div
          key={index}
          className={`${
            index === selectedImage ? "ring-[2px] ring-orange" : ""
          } w-[87px] rounded-[6px]`}
        >
          <img
            className={`${
              index === selectedImage ? "opacity-[0.3]" : ""
            } rounded-[6px] hover:opacity-[0.4] cursor-pointer`}
            src={thumbnail}
            alt="product thumbnail"
            onClick={() => handleThumbnailClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnail;
