import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div>
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="curser-pointer flex relative"
      >
        <BsBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
