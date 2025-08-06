
import { FaRegHeart } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <div className="text-lg font-bold">OM GALLERY</div>
      <div className="flex items-center">
        <input
        type="search"
        placeholder="Search..."
        className="w-64 h-10 pl-10 text-sm text-gray-700 hover:text-black hover:scale-110 transform border  "
        />
        
      </div>
      <ul className="flex gap-8 text-lg m-3 text-gray-700 ">
        <FaRegHeart className="cursor-pointer hover:text-white hover:scale-120 transform" />
        <FiTruck className="cursor-pointer hover:text-white hover:scale-120 transform" />
        <FiShoppingCart className="cursor-pointer hover:text-white hover:scale-120 transform" />
        <FaRegUser className="cursor-pointer hover:text-white hover:scale-120 transform" />
      </ul>
      
    </nav>

  );
}