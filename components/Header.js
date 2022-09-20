import Image from "next/image";

import instagram from "../assets/instagram.png";
import iglogo from "../assets/iglogo.png";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/solid";
import { PaperAirplane } from "heroicons-react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src={instagram}
            alt="instagram-logo-word"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-12 lg:hidden flex-shrink-0 cursor-pointer pt-2">
          <Image
            src={iglogo}
            alt="instagram-logo"
            ayout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 block 
            w-full pl-10 sm:text-sm border-gray-300
             focus:ring-black focus:border-black rounded-md"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
            <HomeIcon className="navBtn"/>
            <MenuIcon className="h-6 md:hidden cursor-pointer"/>
            <PaperAirplaneIcon className="navBtn"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
