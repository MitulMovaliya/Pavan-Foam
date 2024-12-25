import {
  ArrowRight,
  Box,
  ChevronsRight,
  Inbox,
  LogOut,
  MenuIcon,
  Plus,
  X,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ open, setOpen }) {
  const openFunction = () => {
    setOpen(!open);
  };

  const menuIteams = [
    {
      icon: <Plus size={25} />,
      label: "New",
      path: "/",
    },
    {
      icon: <Box size={25} />,
      label: "Products",
      path: "/",
    },
    {
      icon: <Inbox size={25} />,
      label: "Enquiries",
      path: "/",
    },
    {
      icon: <LogOut size={25} />,
      label: "Logout",
      path: "/",
    },
  ];

  function MenuIteams() {
    return (
      <div>
        {menuIteams.map((menu, index) => (
          <Link
            key={index}
            className="flex gap-4 p-2 rounded-lg text-black hover:bg-orange-500 overflow-visible"
          >
            <div>{menu.icon}</div>
            <span
              className={`transition-all duration-300 ${!open && "hidden"}`}
            >
              {menu.label}
            </span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div
        className={`fixed h-screen bg-gradient-to-br from-orange-100 via-white to-orange-100 ${open ? "w-72" : "w-20 "} transition-all duration-300`}
      >
        <div>
          <div
            className="absolute top-2 -right-3 bg-orange-600 p-1 rounded-lg text-white"
            onClick={openFunction}
          >
            <ChevronsRight size={25} className={`${open && "rotate-180"}`} />
          </div>
        </div>
        <div className="mt-20 px-4">
          <MenuIteams />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
