import React from "react";
import { CirclePlus, Dot, Copy } from "lucide-react";

const Hireme = () => {
  return (
    <div className="py-20 ">
      <p className="text-4xl font-bold text-center ">
        Let&apos;s Work Togather.
      </p>
      <p className="text-center text-xl pt-2 text-gray-500">
        Creating user experience and visual appealing design
      </p>
      <div className="pt-6 flex justify-center gap-6">
        <button className="flex gap-2 items-center bg-black rounded-sm p-1 hover:cursor-pointer">
          <CirclePlus color="white" size={18} />
          <p className="text-gray-200 font-bold text-sm pr-1">Hire Me</p>
        </button>
        <button className="flex gap-2 items-center border-1 border-gray-300  rounded-sm p-1 hover:cursor-pointer">
          <Copy color="black" size={18} />
          <p className="text-black font-bold pr-1">Copy Email</p>
        </button>
      </div>
    </div>
  );
};
export default Hireme;
