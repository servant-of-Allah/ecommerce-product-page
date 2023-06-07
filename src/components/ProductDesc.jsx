import React, { useContext } from "react";
import { productDesc } from "../constants/data";
import { plus, minus } from "../constants/index";
import { AppContext } from "../contexts/AppContext";

const ProductDesc = () => {
  const { qty, incQty, decQty, addToCart } = useContext(AppContext);

  return (
    <div className="mb-[2rem]">
      <div>
        <h3 className="text-orange tracking-widest font-bold text-[14px]">
          {productDesc.company}
        </h3>
        <h1 className="text-blue font-bold leading-tight tracking-wide text-[2rem] sm:text-[2.5rem]  mt-3">
          {productDesc.title}
        </h1>
        <p className="text-dGrayishBlue w-[95%] ss:w-[80%] md:w-[90%] leading-relaxed font-normal mt-4">
          {productDesc.desc}
        </p>
      </div>

      <div className="flex justify-between md:flex-col md:items-start gap-2 mt-4 items-center">
        <div className="flex gap-4 items-center">
          <p className="text-blue font-bold text-[1.8rem]">
            {productDesc.salePrice}
          </p>
          <p className="bg-paleOrange px-2 font-bold text-orange text-[15px] rounded-md">
            {productDesc.discount}
          </p>
        </div>
        <p className="text-grayishBlue line-through">{productDesc.prevPrice}</p>
      </div>

      <div className="flex flex-col gap-4 md:items-center sm:flex-row mt-6 md:w-[90%]">
        <div className="sm:w-[40%] bg-lGrayishBlue flex justify-between items-center px-4 py-4 md:py-3 rounded-md">
          <button
            type="button"
            className="hover:opacity-[0.6]"
            onClick={() => decQty()}
          >
            <img src={minus} alt="minus icon" />
          </button>
          <p className="text-blue font-bold">{qty}</p>
          <button
            type="button"
            className="hover:opacity-[0.6]"
            onClick={() => incQty()}
          >
            <img src={plus} alt="plus icon" />
          </button>
        </div>

        <button
          type="button"
          className="flex-1 custom-btn flex gap-4 justify-center items-center"
          onClick={() => addToCart()}
        >
          <svg
            width="22"
            height="20"
            className="fill-[#ffffff]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDesc;
