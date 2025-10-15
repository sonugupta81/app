import {
  CirclePlus,
  House,
  MoonStar,
  ShoppingBag,
  User,
  PanelsTopLeft,
  Dot,
  Copy,
} from "lucide-react";
import Image from "next/image";
import BoyImage from "../app/assets/image/boy.jpg";
import Navbar from "./components/navbar";
import Homepage from "./components/Homepage";
import Project from "./components/Project";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}
