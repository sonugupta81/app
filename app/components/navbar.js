import {
  CirclePlus,
  House,
  MoonStar,
  ShoppingBag,
  User,
  PanelsTopLeft,
} from "lucide-react";

import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center pt-6 bg-gray-300 ">
      <div className="w-2/5 bg-white flex p-4 rounded-xl justify-between shadow-xl">
        <div className="flex gap-10">
          <House className="hover:cursor-pointer hover:bg-gray-300 rounded-full" />
          <User className="hover:cursor-pointer hover:bg-gray-300 rounded-full" />
          <PanelsTopLeft className="hover:cursor-pointer hover:bg-gray-300 rounded-full" />
          <ShoppingBag className="hover:cursor-pointer hover:bg-gray-300 rounded-full" />
        </div>
        <div className="flex gap-6">
          <MoonStar className="hover:cursor-pointer hover:bg-gray-300 rounded-full" />
          <button className="flex gap-2 items-center bg-black rounded-sm p-1 hover:cursor-pointer">
            <CirclePlus color="white" size={18} />
            <p className="text-gray-200 font-bold text-sm pr-1">Hire Me</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
