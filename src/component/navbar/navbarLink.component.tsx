import React from "react";

interface NavbarLinkInterface {
  title: string;
}
const NavbarLink: React.FC<NavbarLinkInterface> = ({ title }) => {
  return (
    <>
      <div className="font-bold text-xl text-light hover:text-black hover:cursor-pointer transition-all ease-in-out">
        {title}
      </div>
    </>
  );
};

export default NavbarLink;
