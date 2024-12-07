import React from "react";
import Image from "next/image";

const Arrival = () => {
  return (
    <div className="w-full py-5">
      <div className="px-4 sm:px-8 lg:px-16">
        <div className="flex justify-start items-center gap-3 mb-6">
          {/* Red image */}
          <Image src="/red.png" alt="red" width={20} height={40} />
          {/* Categories Image */}
          <Image src="/Featured.png" alt="today" width={126} height={40} />
        </div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[28px] sm:text-[36px] font-semibold">New Arrival</h1>
        </div>

        {/* Responsive grid columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
          {/* First Div */}
          <div className="bg-black col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 pt-6 relative">
            {/* Image */}
            <Image
              src="/speaker.png"
              alt="speaker"
              width={570}
              height={300}
              className="w-full h-full object-contain"
            />
            {/* Text Inside Image */}
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="font-semibold text-[20px] sm:text-[24px]">Play Station 5</h1>
              <p className="text-[12px] sm:text-[14px]">
                Black and white version of the PS5 coming out of the sale.
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium mt-2">Shop Now!</p>
            </div>
          </div>

          {/* Second Div */}
          <div className="bg-[#0D0D0D] col-span-1 sm:col-span-2 row-span-1 pt-6 relative">
            {/* Image */}
            <Image
              src="/women.png"
              alt="women"
              width={570}
              height={284}
              className="w-full h-full object-contain"
            />
            {/* Text Inside Image */}
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="font-semibold text-[20px] sm:text-[24px]">Women Collection!</h1>
              <p className="text-[12px] sm:text-[14px]">
                Feature women collection that give you another vibe.
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium mt-2">Shop Now!</p>
            </div>
          </div>

          {/* Third Div */}
          <div className="bg-black col-span-1 sm:col-span-1 p-3 relative">
            {/* Image */}
            <Image
              src="/roll.png"
              alt="roll"
              width={270}
              height={284}
              className="w-full h-full object-contain"
            />
            {/* Text Inside Image */}
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="font-semibold text-[20px] sm:text-[24px]">Speaker</h1>
              <p className="text-[12px] sm:text-[14px]">Compact and portable sound system.</p>
              <p className="text-[14px] sm:text-[16px] font-medium mt-2">Shop Now!</p>
            </div>
          </div>

          {/* Fourth Div */}
          <div className="bg-black col-span-1 sm:col-span-1 p-3 relative">
            {/* Image */}
            <Image
              src="/perfume.png"
              alt="perfume"
              width={270}
              height={284}
              className="w-full h-full object-contain"
            />
            {/* Text Inside Image */}
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="font-semibold text-[20px] sm:text-[24px]">Perfume</h1>
              <p className="text-[12px] sm:text-[14px]">
                A unique fragrance that lasts all day.
              </p>
              <p className="text-[14px] sm:text-[16px] font-medium mt-2">Shop Now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
