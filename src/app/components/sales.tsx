import React from "react";
import Image from "next/image";

const Sales = () => {
  return (
    <div className="w-full ">
      {/* Container for the section */}
      <div className="w-full  py-14 px-16">
        <div className="flex justify-start items-center gap-3">
          {/* Red image */}
          <Image src="/red.png" alt="red" width={20} height={40} />
          {/* Today image */}
          <Image src="/Today.png" alt="today" width={126} height={40} />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[36px] font-semibold">Flash Sales</h1>
          <Image
  className="px-4 sm:px-8" // Added margin-top for mobile
  src={"/time.png"}
  alt="time"
  width={298}
  height={62}
/>
          <Image src={"/arrow.png"} alt="arrow" width={100} height={62} />
        </div>


        {/* Responsive grid columns */}
        <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-9">
          {/* Column 1 */}
          <div>
            <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
              <button className="bg-[#DB4444] h-[26px] w-[55px] py-0 absolute top-2 left-2 text-white 
              text-sm rounded">
                -40%
              </button>
              <div className="py-0 absolute top-2 right-2">
                <Image src={"/heart2.png"} alt="heart2" width={34} height={76} />
              </div>
              <Image src={"/game.png"} alt="game" width={172} height={152} />
            </div>
            <div className="text-start mt-4">
              <h1 className="font-extralight">HAVIT HV-G92 Gamepad</h1>
              <Image src={"/dollar.png"} alt="dollar" width={85} height={24} />
              <Image src={"/star.png"} alt="star" width={140} height={20} />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
              <button className="bg-[#DB4444] h-[26px] w-[55px] py-0 absolute top-2 left-2 text-white 
              text-sm rounded">
                -35%
              </button>
              <div className="py-0 absolute top-2 right-2">
                <Image src={"/heart2.png"} alt="heart2" width={34} height={76} />
              </div>
              <Image src={"/keyboard.png"} alt="keyboard" width={172} height={152} />
            </div>
            <div className="text-start mt-4">
              <h1 className="font-extralight">Gaming Keyboard</h1>
              <Image src={"/dollar.png"} alt="dollar" width={85} height={24} />
              <Image src={"/star.png"} alt="star" width={140} height={20} />
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
              <button className="bg-[#DB4444] h-[26px] w-[55px] py-0 absolute top-2 left-2 text-white
               text-sm rounded">
                -30%
              </button>
              <div className="py-0 absolute top-2 right-2">
                <Image src={"/heart2.png"} alt="heart2" width={34} height={76} />
              </div>
              <Image src={"/led.png"} alt="led" width={172} height={152} />
            </div>
            <div className="text-start mt-4">
              <h1 className="font-extralight">LED Monitor</h1>
              <Image src={"/dollar.png"} alt="dollar" width={85} height={24} />
              <Image src={"/star.png"} alt="star" width={140} height={20} />
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
              <button className="bg-[#DB4444] h-[26px] w-[55px] py-0 absolute top-2 left-2 text-white 
              text-sm rounded">
                -25%
              </button>
              <div className="py-0 absolute top-2 right-2">
                <Image src={"/heart2.png"} alt="heart2" width={34} height={76} />
              </div>
              <Image src={"/chair.png"} alt="chair" width={172} height={152} />
            </div>
            <div className="text-start mt-4">
              <h1 className="font-extralight">Ergonomic Chair</h1>
              <Image src={"/dollar.png"} alt="dollar" width={85} height={24} />
              <Image src={"/star.png"} alt="star" width={140} height={20} />
            </div>
          </div>
        

        </div>
      </div>
    </div>
  );
};

export default Sales;
