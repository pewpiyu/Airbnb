import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const InfoCard = ({ img, location, price, description, star, total, title }) => {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-250 ease-out pr-4 first:border-t rounded-lg">
      <div className="h-24 w-40 relative md:h-52 md:w-80 flex-shrink-0 ">
        <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
          <div className="flex justify-between">
              <p>
                {location}
              </p>
                <HeartIcon className="h-7 cursor-pointer" />
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="border-b w-10 pt-2 "></div>

          <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

          <div className="flex justify-between items-end pt-5">
              <p className="flex items-center"><StarIcon className="h-5 text-red-400" />{star}</p>
              <div className="">
              <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
              <p className="text-right font-extralight">{total}</p>
          </div>
          </div>
          
      </div>
    </div>
  );
};

export default InfoCard;
