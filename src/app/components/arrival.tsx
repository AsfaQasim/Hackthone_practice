import React from "react";
import Image from "next/image";

const Arrival = () => {
  return (
    <div className="w-full">
      <div className="h-[135px] px-16">
        <div className="flex justify-start items-center gap-3">
          {/* Red image */}
          <Image src="/red.png" alt="red" width={20} height={40} />
          {/* Categories Image */}
          <Image src="/Featured.png" alt="today" width={126} height={40} />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[36px] font-semibold">New Arrival</h1>
        </div>
        <div
          className="grid grid-cols-4 grid-rows-4 gap-4 h-[300px] py-10"
          style={{
            gridTemplateRows: "repeat(4, 1fr)",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {/* First Div */}
          <div
            className="bg-black col-start-1 row-start-1 row-end-6 w-[570px] py-6 relative"
            style={{
              gridColumn: "1/3",
              gridRow: "1 / 6",
            }}
          >
            {/* Image */}
            <Image
              src="/speaker.png"
              alt="speaker"
              width={511}
              height={511}
              className="w-full h-auto"
            />
            {/* Text Inside Image */}
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="font-semibold text-[24px]">Play Station 5</h1>
              <p className="text-[14px]">
                Black and white version of the PS5 coming out of the sale.
              </p>
              <p className="text-[16px] font-medium mt-2">Shop Now!</p>
            </div>
          </div>

          {/* Second Div */}
          <div
            className="bg-green-600 col-start-1 row-start-1 row-end-6 w-[570px] h-[284px]"
            style={{
              gridColumn: "3/5",
              gridRow: "1 / 3",
            }}
          ></div>

          {/* Third Div */}
          <div
            className="bg-purple-600 col-start-1 row-start-1 row-end-6 w-[270px] h-[284px]"
            style={{
              gridColumn: "3/4",
              gridRow: "3 / 6",
            }}
          ></div>

          {/* Fourth Div */}
          <div
            className="bg-blue-600 col-start-1 row-start-1 row-end-6 w-[270px] h-[284px]"
            style={{
              gridColumn: "4/5",
              gridRow: "3 / 6",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
