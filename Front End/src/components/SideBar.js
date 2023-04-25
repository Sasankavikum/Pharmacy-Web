import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FitTrash2 } from "react-icons/io";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../context/SidebarContext";
import CartProvider, { CartContext } from "../context/CartContext";

const SideBar = () => {
  const { isOpen, hadleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex item-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping bag (0)</div>
        {/* icons */}
        <div
          onClick={hadleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
