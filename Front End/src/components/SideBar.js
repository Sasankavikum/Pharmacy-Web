import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../context/SidebarContext";
import CartProvider, { CartContext } from "../context/CartContext";
import { clearCart } from "../context/CartContext";

const SideBar = () => {
  const { isOpen, hadleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex item-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({itemAmount})
        </div>
        {/* icons */}
        <div
          onClick={hadleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[500px] lg:h-[740px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div>
        <div className="flex w-full justify-between items-center">
          {/**total */}
          <div>
            <span>Total : </span>Rs {total}
          </div>
          {/**clear cart */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-x1"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
