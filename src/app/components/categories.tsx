import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <div>
      <div className="w-full h-[493px]  px-16">
        <div className="flex justify-start items-center gap-3">
          {/* Red image */}
          <Image src="/red.png" alt="red" width={20} height={40} />
          {/* Categories Image */}
          <Image src="/Categories.png" alt="today" width={126} height={40} />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-[36px] font-semibold">Browse By Category</h1>
        </div>
        <div className="flex justify-end items-center">
          <Image src={"/arrow.png"} alt="arrow" width={100} height={62} />
        </div>

        {/* Responsive grid columns */}
        <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-9">
          {/* Column 1 */}
          <div className="w-full h-[145px] bg-[#F5F5F5] border-black flex justify-center  hover:bg-red-500">
            <div className="py-8 px-16">
            
              <Image
                src={"/cellphone.png"}
                alt="cellphone"
                width={56}
                height={56}
              />
              <div>
                
                <h1 className="text-center text-sm mt-3">Phones</h1>
              </div>
            </div>
          </div>

          {/* Column 2 */}

          <div className="w-full h-[145px] bg-[#F5F5F5] border-black flex  justify-center hover:bg-red-500">
          <div className="py-8 px-16">
            
            <Image
              src={"/computer.png"}
              alt="Computers"
              width={56}
              height={56}
            />
            <div>
            
              <h1 className="text-center text-sm mt-3">Computers</h1>
            </div>
          </div>
          </div>
          {/* Column 3 */}
          <div className="w-full h-[145px] bg-[#F5F5F5] border-black flex justify-center hover:bg-red-500">
          <div className="py-8 px-16">
        
            <Image
              src={"/watch.png"}
              alt="smartwatch"
              width={56}
              height={56}
            />
            <div>
              
              <h1 className="text-center text-sm mt-3">SmartWatch</h1>
            </div>
          </div>
          </div>

          {/* Column 4 */}
          <div className="w-full h-[145px] bg-red-500 hover:bg-white border-black flex  justify-center">
          <div className="py-8 px-16">
            
            <Image
              src={"/camera.png"}
              alt="cellphone"
              width={56}
              height={56}
            />
            <div>
              
              <h1 className="text-center text-sm mt-3">Camera</h1>
            </div>
          </div>
          </div>
          {/* Column 5 */}
          <div className="w-full h-[145px] bg-[#F5F5F5] border-black flex justify-center  hover:bg-red-500">
          <div className="py-8 px-16">
            
            <Image
              src={"/headphone.png"}
              alt="Headphone"
              width={56}
              height={56}
            />
            <div>
              
              <h1 className="text-start text-sm mt-3">HeadPhone</h1>
            </div>
          </div>
          </div>
          {/* Column 6 */}
          <div className="w-full h-[145px] bg-[#F5F5F5] border-black flex justify-center hover:bg-red-500">
          <div className="py-8 px-16">
            
            <Image
              src={"/gamepad.png"}
              alt="cellphone"
              width={56}
              height={56}
            />
            <div>
              
              <h1 className="text-center text-sm mt-3">Gaming</h1>
            </div>
          </div>
          </div>
       
          </div>
        </div>
      </div>
    
  );
};

export default Categories;
