import React from "react";
import Thumbnail from "./Thumbnail";
import ProductImage from "./ProductImage";
import ProductDesc from "./ProductDesc";

const Product = () => {
  return (
    <section className="relative w-full md:top-[65px] flex flex-col md:justify-between md:flex-row md:items-center md:gap-20 lg:pl-[50px] lg:pr-[10px]">
      <div>
        <ProductImage />
        <Thumbnail />
      </div>

      <div className="sm:max-w-[700px] md:max-w-[500px] px-4 ss:px-0 mt-8">
        <ProductDesc />
      </div>
    </section>
  );
};

export default Product;
