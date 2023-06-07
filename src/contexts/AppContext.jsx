import { createContext, useState } from "react";
import { products } from "../constants/data";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [qty, setQty] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const addToCart = () => {
    if (qty > 0) {
      setCartEmpty((s) => !s);
    }
  };

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  const incQty = () => {
    setQty((q) => q + 1);
  };

  const decQty = () => {
    if (qty > 0) {
      setQty((q) => q - 1);
    }
  };

  const slideNextImage = () => {
    let serial = selectedImage;
    if (serial === products.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage((s) => s + 1);
    }
  };

  const slidePrevImage = () => {
    let serial = selectedImage;
    if (serial == 0) {
      setSelectedImage(products.length - 1);
    } else {
      setSelectedImage((s) => s - 1);
    }
  };

  const contextValue = {
    addToCart,
    showMenu,
    setShowMenu,
    qty,
    incQty,
    decQty,
    cartEmpty,
    setCartEmpty,
    selectedImage,
    setSelectedImage,
    slideNextImage,
    slidePrevImage,
    showCart,
    setShowCart,
    handleThumbnailClick,
    showGallery,
    setShowGallery,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
