import Image from "next/image";

function SmallCard({ image, location, distance }) {
  return (
    <div
      className="flex items-center mt-5 m-2 space-x-4 hover:bg-gray-100 rounded-xl cursor-pointer hover:scale-105 transition 
    transform duration-350 ease-out"
    >
      <div className="relative h-16 w-16">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <div className="">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
