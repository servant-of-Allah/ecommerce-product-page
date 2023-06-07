import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import ProductDesc from "./ProductDesc";
import { thumbnail1 } from "../constants";
import { productDesc } from "../constants/data";

const Cart = () => {
  const { qty, showCart, cartEmpty, setCartEmpty } = useContext(AppContext);
  return (
    <div
      className={`flex flex-col absolute inset-x-3 top-20 ss:w-[370px] ss:left-auto ss:right-3 sm:right-4 ss:top-16 sm:top-20 md:right-[-10px] lg:right-[-20px] z-20 bg-white origin-top transition-transform rounded-lg cart-shadow ${
        !showCart ? "scale-y-0" : "scale-y-full"
      }`}
    >
      <div className="pl-5 py-5 w-full h-max border-b-[1px] border-b-gray-300">
        <p className="font-bold text-dBlue text-[1.1rem]">Cart</p>
      </div>

      <div className="grid place-items-center min-h-[210px]">
        {cartEmpty ? (
          <div className="">
            <p className="text-dGrayishBlue font-bold text-[17px]">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 h-max">
              <div className="rounded-md">
                <img
                  src={thumbnail1}
                  alt="product thumbnail"
                  className="rounded-md h-[60px]"
                />
              </div>
              <div>
                <p className="text-dGrayishBlue capitalize">
                  {productDesc.title}
                </p>
                <p className="text-dGrayishBlue">
                  {productDesc.salePrice} x <span>{qty}</span>{" "}
                  <span className="text-dBlue font-bold">
                    ${parseFloat(125 * qty)}
                  </span>
                </p>
              </div>
              <div>
                <svg
                  width="14"
                  height="16"
                  className="cursor-pointer fill-[#C3CAD9] hover:fill-dBlue"
                  onClick={() => setCartEmpty((s) => !s)}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                  />
                </svg>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="custom-btn"
                onClick={() => location.reload()}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
