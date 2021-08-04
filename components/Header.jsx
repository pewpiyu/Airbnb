import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 sm:px-7 md:px-9">
      {/* left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="/logo.webp"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow outline-none px-2 bg-transparent text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-300 text-white rounded-full p-2 cursor-pointer mr-1" />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500  ">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UsersIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
