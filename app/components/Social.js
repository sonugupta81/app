import React from "react";
import Image from "next/image";
import Twitter from "../assets/image/twitter.png";
import LinkedIn from "../assets/image/in.png";
import Youtube from "../assets/image/youtube.png";
import Instagram from "../assets/image/instagram.png";
import { CirclePlus, Dot, Copy, ArrowRight } from "lucide-react";

const Social = () => {
  return (
    <div className="bg-gray-100 rounded-xl mt-2">
      <div className="py-6 px-2 flex justify-between">
        <div className="">
          <p className="font-bold text-gray-500 text-lg flex items-center">
            <Dot size={50} /> Follow me
          </p>
        </div>
        <div className="flex  gap-2 justify-end rounded-full ">
          <Image src={Twitter} alt="Twitter"className="hover:cursor-pointer hover:scale-105" />
          <Image src={LinkedIn} alt="Twitter" className="hover:cursor-pointer hover:scale-105" />
          <Image src={Instagram} alt="Twitter" className="hover:cursor-pointer hover:scale-105"  />
          <Image src={Youtube} alt="Twitter" className="hover:cursor-pointer hover:scale-105"  />
        </div>
      </div>
    </div>
  );
};
export default Social;
