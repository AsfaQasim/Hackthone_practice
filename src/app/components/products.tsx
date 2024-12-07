import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div className="w-full">
        {/* Container for the section */}
        <div className="w-full h-auto px-4 sm:px-8 lg:px-16 py-20">
          <div className="flex justify-start items-center gap-3 mb-6">
            {/* Red image */}
            <Image src="/red.png" alt="red" width={20} height={40} />
            {/* Today image */}
            <Image src="/month.png" alt="today" width={126} height={40} />
          </div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[28px] sm:text-[36px] font-semibold">Best Selling Products</h1>
            <button className="w-[159px] bg-[#DB4444] h-[56px] flex justify-center items-center text-white rounded hover:bg-red-300">
              View All
            </button>
          </div>

          {/* Responsive grid columns */}
          <div className="max-w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-9">
            {/* Product Cards */}
            {[ 
              { image: "/shirt.png", title: "The North Coat" },
              { image: "/bag.png", title: "Gussi duffle bag" },
              { image: "/radio.png", title: "RGB Liquid CPU Coller" },
              { image: "/shelf.png", title: "Small BookShelf" },
            ].map(({ image, title }, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-[#F5F5F5] w-full sm:w-[270px] h-[250px] flex justify-center items-center relative">
                  <div className="py-0 absolute top-2 right-2">
                    <Image src="/heart2.png" alt="heart" width={34} height={34} />
                  </div>
                  <Image src={image} alt={title} width={172} height={152} />
                </div>
                <div className="text-start mt-4 text-center sm:text-left">
                  <h1 className="font-extralight text-sm sm:text-base">{title}</h1>
                  <Image src="/dollar.png" alt="dollar" width={85} height={24} />
                  <Image src="/star.png" alt="star" width={140} height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
