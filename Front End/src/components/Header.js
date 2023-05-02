import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? `bg-white py-6 shadow-md` : `bg-none py-6`
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[80px]" src={logo} alt="" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="curser-pointer flex relative"
        >
          <BsBag className="text-3xl" />
          <div className="bg-red-500 absolute-right-1-bottom-2 text-[12px] w-[18px] h-[18px] flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
