import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      {/* Navbar Section */}
      <div className="bg-black w-full h-[48px] flex justify-center items-center relative">
        {/* English (aligned to the right) */}
        <div className="absolute right-4 flex items-center text-white text-sm md:text-lg gap-2">
          <p className="hidden md:block">English</p>
          <Image
            src="/Vector.png"
            alt="vector"
            width={10}
            height={10}
            className="hidden md:block"
          />
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-2">
          {/* Summer Sale Announcement */}
          <h1 className="text-white text-sm md:text-base text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - 50% Off!
          </h1>

          {/* Shop Now */}
          <p className="text-white text-sm md:text-base">ShopNow</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
