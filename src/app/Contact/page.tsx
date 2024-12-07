import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div className="max-w-full min-h-[70vh] px-6 sm:px-8 lg:px-16 py-20">
        <h1 className="text-lg">Home/Contact</h1>
        <div className="py-10 flex flex-col lg:flex-row justify-center gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image src={"/call.png"} alt="call" width={235} height={423} className="w-full max-w-[235px] h-auto" />
          </div>

          {/* Form Section */}
          <div className="w-full lg:w-[800px] flex flex-col gap-6">
            {/* First Three Inputs in One Line */}
            <div className="flex flex-col sm:flex-row gap-6 w-full">
              <input
                type="text"
                placeholder="Your Name*"
                className="border border-black pl-4 py-2 h-[40px] w-full" required
              />
              <input
                type="text"
                placeholder="Your Email*"
                className="border border-black pl-4 py-2 h-[40px] w-full" required
              />
              <input
                type="text"
                placeholder="Your Phone*"
                className="border border-black pl-4 py-2 h-[40px] w-full" required
              />
            </div>

            {/* Last Input Below Centered */}
            <div className="w-full">
              <input
                type="text"
                placeholder="Your Message*"
                className="border border-black pl-4 py-3 h-[230px] w-full"
              />
            </div>

            {/* Button Section */}
            <div className="flex justify-center lg:justify-end items-center w-full">
              <button className="bg-[#DB4444] h-[56px] w-[200px] flex justify-center items-center text-white rounded hover:bg-red-300">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
