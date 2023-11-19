import React from "react";
import NavbarLink from "./navbarLink.component";
import menuIcon from "../../assets/icons/menu.svg";
import bagIcon from "../../assets/icons/bag-2.svg";
import searchIcon from "../../assets/icons/search-normal.svg";
import IconButton from "../common/icon-button.component";
const Navbar: React.FC = () => {
  return (
    <>
      <nav className="container flex items-center py-8 font-product-sans bg-gray">
        <div className="mr-[85px] font-bold text-white text-xl">soudemy</div>
        <div className="hidden md:flex max-w-full w-[364px] justify-between items-center">
          <NavbarLink title="Home" />
          <NavbarLink title="Shop" />
          <NavbarLink title="About" />
          <NavbarLink title="Blog" />
        </div>
        <div className="grow"></div>
        <div className="flex w-[162px] justify-evenly items-center">
          <IconButton src={searchIcon} alt="menu" />
          <IconButton src={bagIcon} alt="menu" />
          <IconButton src={menuIcon} alt="menu" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
