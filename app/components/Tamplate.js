import React from "react";
import Port from "../assets/image/port.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Tamplate = () => {
  return (
    <div className="bg-white my-3 rounded-xl px-2 flex items-center hover:border hover:border-gray-300  hover:border-3 border border-gray-100 border-3 hover:cursor-pointer">
      <div className="w-3/6 ">
        <div className="rounded-xl flex">
          <Image src={Port} alt="port" />
          <div className="flex justify-center items-center text-xl">
            <p className="text-center">Portafo</p>
          </div>
        </div>
      </div>

      <div className="">
        <p className="px-2 py-1 text-xs font-bold text-gray-500 flex  bg-gray-100    rounded-full">
          FRAMER TEMPLATE
        </p>
      </div>

      <div className="w-1/6 flex justify-end  hover:pb-4">
        <ArrowUpRight />
      </div>
    </div>
  );
};

export default Tamplate;
