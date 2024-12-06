import React from "react";
import Image from "next/image";
import Button from "./button";

const OurProduct = () => {
  return (
    <div className="w-full py-32">
      {/* Container for the section */}
      <div className="w-full h-auto  px-16">
        {/* Header */}
        <div className="flex justify-start items-center gap-3">
          {/* Red image */}
          <Image src="/red.png" alt="red" width={20} height={40} />
          {/* Section title */}
          <Image src="/ourproduct.png" alt="our product" width={126} height={40} />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[36px] font-semibold">Explore Our Products</h1>
          <Image src="/arrow.png" alt="arrow" width={100} height={62} />
        </div>

        {/* Responsive grid columns */}
        <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-9">
          {/* Product Cards */}
          {[
            { image: "/food.png", title: "Breed Dry Dog Food" },
            { image: "/dslr.png", title: "Canon Camera" },
            { image: "/laptop.png", title: "Laptop" },
            { image: "/chair.png", title: "Ergonomic Chair" },
            { image: "/car.png", title: "Sport Car", isNew: true },
            { image: "/shoes.png", title: "Shoes" },
            { image: "/game.png", title: "Game", isNew: true },
            { image: "/jacket.png", title: "Jacket" },
          ].map(({ image, title, isNew }, index) => (
            <div key={index}>
              <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
                {isNew && (
                  <button className="bg-[#00FF66] h-[26px] w-[55px] py-0 absolute top-2 left-2 text-white text-sm rounded">
                    New
                  </button>
                )}
                <div className="py-0 absolute top-2 right-2">
                  <Image src="/heart2.png" alt="heart icon" width={34} height={76} />
                </div>
                <Image src={image} alt={title} width={172} height={152} />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">{title}</h1>
                <Image src="/dollar.png" alt="price" width={85} height={24} />
                <Image src="/star.png" alt="rating" width={140} height={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button Section */}
      <div className="flex justify-center items-center relative bottom-28">
        <Button />
      </div>
    </div>
  );
};

export default OurProduct;
