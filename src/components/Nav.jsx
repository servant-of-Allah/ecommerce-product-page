import React, { useContext } from "react";
import { navlinks } from "../constants/data";
import { logo, avatar, menu, close } from "../constants";
import { AppContext } from "../contexts/AppContext";

const Nav = () => {
  const { showMenu, setShowMenu, setShowCart, cartEmpty, qty } =
    useContext(AppContext);

  return (
    <nav className="w-full flex items-center justify-between gap-x-10 py-5 md:pt-6 md:pb-8 border-b-[1px] border-b-slate-200">
      <div className="sm:flex hidden items-center gap-16">
        <img src={logo} alt="company logo" />
        <ul className="flex items-center gap-8 list-none">
          {navlinks.map((item) => (
            <li
              key={item.id}
              className="text-dGrayishBlue text-[16px] cursor-pointer relative hover:text-dBlue hover:after:absolute hover:after:top-12 hover:after:left-0 hover:after:w-full hover:after:h-5 hover:after:border-b-4 hover:after:border-orange"
            >
              <a href={item.id}> {item.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu */}

      <div className="flex sm:hidden gap-[12px] items-center">
        <button
          className="z-50"
          type="button"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <img src={showMenu ? close : menu} alt="menu icon" />
        </button>

        <div
          className={`fixed z-40 bg-white inset-0 w-[70%] shadow-sm shadow-gray-400 transition-transform duration-300 ease-in-out ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="grid ml-4 mt-24 gap-[20px] list-none">
            {navlinks.map((item) => (
              <li
                key={item.id}
                className="text-dBlue font-bold text-[16px] cursor-pointer relative hover:text-dGrayishBlue transition-colors duration-300"
              >
                <a href={item.id}> {item.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {showMenu ? (
          <div className="absolute inset-0 bg-black opacity-[0.5] z-20 w-full"></div>
        ) : (
          ""
        )}

        <img src={logo} alt="comapny logo" />
      </div>

      {/* mobile nav */}

      <div className="relative flex items-center gap-6 sm:gap-10">
        {!cartEmpty && (
          <p className="absolute top-[4px] left-[8px] bg-orange font-bold text-white text-[10px] rounded-full px-[6px] py-0">
            {qty}
          </p>
        )}

        <svg
          width="22"
          height="20"
          className="fill-[#69707D] hover:fill-dBlue cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setShowCart((s) => !s)}
        >
          <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
        </svg>

        <img
          className="w-8 sm:w-10 md:w-12 rounded-full cursor-pointer hover:ring-2 hover:ring-orange"
          src={avatar}
          alt="profile picture"
        />
      </div>
    </nav>
  );
};

export default Nav;
