import React from "react";
import monster from "../assets/image/monster.png";
import { ChevronRight } from "lucide-react";
import Image from "next/image";



const ProjectTile = ({data}) => {
  console.log("DATA IN PROPS: ", data)
  return (
    <div className="bg-white my-3 rounded-xl px-2 flex items-center hover:border hover:border-gray-300  hover:border-3 border border-gray-100 border-3 hover:cursor-pointer">
      <div className="w-1/4">
        <div className="rounded-">
          <Image src={data.image} alt="moto" />
        </div>
      </div>

      <div className="w-3/4">
        <p className="font-bold text-xl">{data.title}</p>
        <p className="text-gray-600 py-2">{data.description}</p>
      </div>

      <div className="w-1/4 flex justify-end pr-3 hover:pr-1">
        <ChevronRight />
      </div>
    </div>
  );
};

export default ProjectTile;
