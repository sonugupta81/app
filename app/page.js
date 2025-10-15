import { CirclePlus, House, MoonStar, ShoppingBag, User, PanelsTopLeft, Dot, Copy } from "lucide-react";
import Image from "next/image";
import  BoyImage from "../app/assets/image/boy.jpg";
export default function Home() {
  return (
    <div>
    <div className="flex justify-center pt-6 bg-gray-300 ">
      <div className="w-2/5 bg-white flex p-4 rounded-xl justify-between shadow-xl">
        <div className="flex gap-10">
          <House className="hover:cursor-pointer hover:bg-gray-300 rounded-full"/>
          <User className="hover:cursor-pointer hover:bg-gray-300 rounded-full"/>
          <PanelsTopLeft className="hover:cursor-pointer hover:bg-gray-300 rounded-full"/>
          <ShoppingBag className="hover:cursor-pointer hover:bg-gray-300 rounded-full"/>
        </div>
        <div className="flex gap-6">
          <MoonStar className="hover:cursor-pointer hover:bg-gray-300 rounded-full"/>
          <button className="flex gap-2 items-center bg-black rounded-sm p-1 hover:cursor-pointer">
          <CirclePlus color="white" size={18}  />
          <p className="text-gray-200 font-bold text-sm pr-1">Hire Me</p>
          </button>
        </div>
      </div>
      
    </div>
    <div className="flex justify-center pt-6 bg-gray-300">
        <div className="w-2/5 bg-white flex p-4 rounded-xl shadow-xl ">
          <div>
          <div className=" flex gap-30">
            <p className="font-bold text-gray-500 text-lg flex items-center">
             <Dot size ={50}/> Product Designer
            </p>
            <p className="font-bold text-green-500 flex items-center bg-green-100 pr-4 rounded-full">
             <Dot size ={50}/> AVAILABLE FOR WORK
            </p>
          </div>
          <div className="px-5 pt-8 pb-8  w-3/5">
            <div className="">
              <p className="font-bold text-4xl">
                I'm Brain Do
              </p>
              <p className="font-bold text-lg pt-4 text-gray-500">
                Product Designer From Jakarta,ID Currently disigning at Rectangle
              </p>
              <div className="pt-6 flex gap-6">
              <button className="flex gap-2 items-center bg-black rounded-sm p-1 hover:cursor-pointer">
              <CirclePlus color="white" size={18}  />
              <p className="text-gray-200 font-bold text-sm pr-1">Hire Me</p>
              </button>
              <button className="flex gap-2 items-center border-1 border-gray-300  rounded-sm p-1 hover:cursor-pointer">
              <Copy color="black" size={18}  />
              <p className="text-black font-bold pr-1">Copy Email</p>
              </button>
              </div>
            </div>
          </div>
          </div>
          <div>
    
          </div>
        </div>
      </div>
    </div>
  );
}
