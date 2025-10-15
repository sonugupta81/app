import React from "react";
import { CirclePlus, Dot, Copy, ArrowRight } from "lucide-react";
import ProjectTile from "./ProjectTile";

import Monster from "../assets/image/monster.png";
import Rag from "../assets/image/rag.png";
import Shake from "../assets/image/shake.png";

const myNumbers = [1, 2, 3, 4, 5];

const allItems = [
  {
    image: Monster,
    title: "Morva Labs",
    description: "Visual design, Branding",
  },

  {
    image: Rag,
    title: "Rectangle",
    description: "Product design, Icon design",
  },

  {
    image: Shake,
    title: "Simply",
    description: "Landing Page, IIIutration design",
  },
];

const item = {
  image: Monster,
  title: "Morva Labs",
  description: "Visual design, Branding",
};

const item2 = {
  image: Rag,
  title: "Rectangle",
  description: "Product design, Icon design",
};

const item3 = {
  image: Shake,
  title: "Simply",
  description: "Landing Page, IIIutration design",
};

const Project = () => {
  console.log("MY NUMBERS: ", myNumbers);

  return (
    <div className="bg-gray-100 rounded-xl">
      <div className="py-4 px-6">
        <div className="flex justify-between">
          <p className="font-bold text-gray-500 text-lg flex items-center">
            <Dot size={50} /> Projects
          </p>
          <button className="flex gap-2 items-center bg-white rounded-sm p-1 hover:cursor-pointer  ">
            <p className="text-gray-700 font-bold text-sm ">View All</p>
            <ArrowRight color="black" size={18} />
          </button>
        </div>
        <ProjectTile data={allItems[0]} />
        <ProjectTile data={allItems[1]} />
        <ProjectTile data={allItems[2]} />

        
      </div>
    </div>
  );
};
export default Project;
