import React, { useContext } from "react";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import Cart from "./components/Cart";
import Product from "./components/Product";
import { AppContext } from "./contexts/AppContext";

const App = () => {
  const { showGallery } = useContext(AppContext);

  return (
    <div className="bg-white w-screen min-h-screen overflow-hidden">
      {showGallery && <Gallery />}

      <header className="relative w-full h-max md:w-[90%] max-w-[1200px] px-4 ss:px-8 mx-auto">
        <Nav />
        <Cart />
      </header>

      <main className="w-full md:h-[85vh] md:w-[90%] max-w-[1200px] ss:px-8 mx-auto">
        <Product />
      </main>

      <footer className="block text-[12.5px] text-center text-blue mb-[1rem] mt-[1rem]">
        <p>
          Challenge by{" "}
          <a
            className="text-dGrayishBlue underline hover:text-orange"
            href="https://www.frontendmentor.io"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-dGrayishBlue underline hover:text-orange"
            href="https://github.com/servant-of-Allah"
          >
            A humble servant of Allah
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
