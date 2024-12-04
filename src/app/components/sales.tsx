import React from "react";
import Image from "next/image";

const Sales = () => {
  return (
    <div>
      {/* Container for the section */}
      <div className="w-full h-[493px] px-12 py-20">
        <div className="flex justify-start items-center gap-3">
          {/* Red image */}
          <Image 
            src="/red.png" 
            alt="red" 
            width={20} 
            height={40} 
          />
          {/* Today image */}
          <Image 
            src="/Today.png" 
            alt="today" 
            width={36} 
            height={10} 
          />
        </div>
        <div className="flex justify-between items-center">
            <h1  className="text-[36px] font-semibold">Flash Sales</h1>
            <Image
       src={'/time.png'}
       alt="time"
       width={298}
       height={62}
            />
            <Image
  src = {'/arrow.png'}
  alt = "arrow"
  width={100}
  height={62}
            />
        </div>
      </div>
    </div>
  );
};

export default Sales;
