import React from "react";
import Image from "next/image";
import { CirclePlus, Dot, Copy, ArrowRight } from "lucide-react";
import Tamplate from "./Tamplate";

const Products = () => {
  return (
    <div className="bg-gray-100 rounded-xl mt-2">
      <div className="py-4 px-6">
        <div className="flex justify-between">
          <p className="font-bold text-gray-500 text-lg flex items-center">
            <Dot size={50} /> Products
          </p>
        </div>
        <Tamplate/>
      </div>
    </div>
  );
};
export default Products;
