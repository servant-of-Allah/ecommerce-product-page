import React, { useContext } from "react";
import { products } from "../constants/data";
import { next, previous } from "../constants";
import { AppContext } from "../contexts/AppContext";

const ProductImage = () => {
  const { slideNextImage, slidePrevImage, selectedImage, setShowGallery } =
    useContext(AppContext);

  return (
    <div>
      <div className="relative h-[330px] ss:h-[350px] sm:h-[400] md:h-[420px] md:w-[442px] md:rounded-[12px]">
        <div className="md:hidden absolute left-[20px] top-1/2 transform -translate-y-1/2">
          <img
            src={previous}
            alt="previous-icon"
            className=" px-[14px] py-[11px] rounded-full bg-white cursor-pointer"
            onClick={() => slidePrevImage()}
          />
        </div>

        <img
          className="md:rounded-[12px] w-full h-full object-fill cursor-pointer"
          src={products[selectedImage]}
          onClick={() => setShowGallery((s) => !s)}
          alt="product image"
        />

        <div className="md:hidden absolute right-[20px] top-1/2 transform -translate-y-1/2">
          <img
            src={next}
            alt="next-icon"
            className="px-[14px] py-[11px] rounded-full bg-white cursor-pointer"
            onClick={() => slideNextImage()}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
