import React from "react";

interface NavbarLinkInterface {
  title: string;
}
const NavbarLink: React.FC<NavbarLinkInterface> = ({title}) => {
  return (
    <>
      <div className="font-bold text-xl text-light ">{title}</div>
    </>
  );
};

export default NavbarLink;
