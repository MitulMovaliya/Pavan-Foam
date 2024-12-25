import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuDrawer, setMenuDrawer] = useState(false);

  const [admin, setAdmin] = useState(true);

  const onMenuClick = () => {
    setMenuDrawer(!menuDrawer);
  };
  return (
    <>
      <div className="lg:top-1 top-0 sticky z-50 py-5 backdrop-blur-lg  bg-secondary/70 lg:rounded-3xl lg:mx-10 lg:mb-1">
        <div className="flex justify-between items-center mx-10 lg:mx-20">
          <Link to={"/"} className="font-bold tracking-tight text-2xl navbar">
            PAVAN FOAM
          </Link>
          <div className="hidden lg:flex space-x-12 font-semibold items-center">
            <Link to={"/"} className="navbar">
              Home
            </Link>
            <Link to={"/about"} className="navbar">
              About
            </Link>
            <Link to={"/product"} className="navbar">
              Products
            </Link>
            <Link to={"/contact"} className="navbar">
              Contacts
            </Link>
            {admin && (
              <Link to={"/admin"} className="navbar">
                Dashboard
              </Link>
            )}
          </div>
          <div className="lg:hidden" onClick={onMenuClick}>
            {menuDrawer ? <X /> : <Menu />}
          </div>
        </div>
      </div>
      {menuDrawer && (
        <div className=" lg:hidden fixed right-0  z-50 w-full text-center flex flex-col gap-3 bg-secondary py-4 font-semibold">
          <Link to={"/"} onClick={onMenuClick}>
            Home
          </Link>
          <Link to={"/about"} onClick={onMenuClick}>
            About
          </Link>
          <Link to={"/product"} onClick={onMenuClick}>
            Products
          </Link>
          <Link to={"/contact"} onClick={onMenuClick}>
            Contacts
          </Link>
          {admin && (
            <Link onClick={onMenuClick} className="">
              Dashboard
            </Link>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
