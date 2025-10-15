import { CirclePlus, House, MoonStar, ShoppingBag, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-2/5 bg-gray-200 flex justify-between p-4 rounded-xl">
        {/* Icons */}
        <div className="flex gap-4">
          <House size={28} className="hover:bg-gray-300 rounded-full p-1" />
          <User />
          <ShoppingBag />
        </div>

        {/* Hire me */}
        <div className="flex gap-4">
          <MoonStar />
          <button className="flex gap-2 items-center bg-black">
            <CirclePlus color="gray" size={18} />{" "}
            <p className="text-gray-200 font-bold">Hire Me</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
