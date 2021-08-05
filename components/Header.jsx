import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(0);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const cancel = () => {
    setSearchInput("");
  };

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
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto my-5 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />

            <input
              value={guests}
              className="outline-none w-12 pl-3 text-red-400"
              type="number"
              name=""
              id=""
              min="1"
              onChange={(e) => {
                setGuests(e.target.value);
              }}
            />
          </div>
          <div className="flex ">
            <button className="flex-grow text-gray-500" onClick={cancel}>
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
