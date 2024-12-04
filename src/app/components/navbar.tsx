import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      {/* Navbar Section */}
      <div className="bg-black w-full">
        <div className="w-full py-4 flex items-center justify-between px-4 md:px-8">
          {/* Dropdown (aligned to the right) */}
          <div className="flex items-center text-white text-sm md:text-lg gap-2 ml-auto">
            {/* English text hidden on mobile and visible on laptops */}
            <p className="hidden md:block">English</p>
            <Image
              src="/Vector.png"
              alt="vector"
              width={10}
              height={10}
              className="hidden md:block"
            />
          </div>

          {/* Logo and ShopNow (centered) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
            <Image
              src="/pic1.png"
              alt="textpic"
              width={900}
              height={400}
              className="w-auto"
            />
            <p className="text-white text-sm md:text-base">ShopNow</p>
          </div>
        </div>
      </div>

  
      
    </div>
  );
};

export default Navbar;
