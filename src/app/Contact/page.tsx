

import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="w-full min-h-[70vh] px-16 py-20">
        <h1>Home/Contact</h1>
        <div className="py-10 flex justify-center gap-10">
          {/* Image Section */}
          <Image src={"/call.png"} alt="call" width={235} height={423} />
          
          {/* Form Section with Inputs in One Line */}
          <div className="w-[800px] flex gap-6">
            <input
              type="text"
              placeholder="Your Name*"
              className="border border-black pl-4 py-2 h-[40px] w-full"
            />
            <input
              type="text"
              placeholder="Your Email*"
              className="border border-black pl-4 py-2 h-[40px] w-full"
            />
            <input
              type="text"
              placeholder="Your Phone*"
              className="border border-black pl-4 py-2 h-[40px] w-full"
            />
            <div>  <input
              type="text"
              placeholder="Your Phone*"
              className="border border-black pl-4 py-2 h-[40px] w-full"
            /></div>
             
          </div>

         
        </div>
      
     
        </div>
    
    </div>
  );
};
export default Contact;