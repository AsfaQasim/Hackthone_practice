import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sales from "./sales";
import Categories from "./categories";
import Button from "./button";
import Products from "./products";
import Ourproducts from "./ourproducts";

const Navbar2 = () => {
  return (
    <div>
      {/* Container for the navbar */}
      <div className="bg-[#eeeeee] flex items-center justify-between py-7 px-4 sm:px-6 md:px-16">
        {/* "Exclusive" Title aligned to the left */}
        <h1 className="font-bold text-lg sm:mr-0 mr-4">Exclusive</h1>

        {/* Links and Icons aligned in the same line */}
        <div className="flex gap-6 sm:gap-8 items-center">
          {/* Links */}
          <div className="hidden sm:flex gap-6">
            <Link href="/" className="text-lg font-medium hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/Contact"
              className="text-lg font-medium hover:text-blue-600"
            >
              Contact
            </Link>
            <Link
              href="/About"
              className="text-lg font-medium hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="/Signup"
              className="text-lg font-medium hover:text-blue-600"
            >
              Sign Up
            </Link>
          </div>

          {/* Icons */}
          <div className="flex gap-6">
            <Image src="/search.png" alt="search" width={211} height={24} />
            <Image src="/heart.png" alt="heart" width={32} height={32} />
            <Image src="/Cart1.png" alt="cart" width={32} height={32} />
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div className="px-4 sm:px-8 md:px-16 flex justify-center sm:justify-between items-center py-8 flex-wrap">
        <Image src={"/frame.png"} alt="frame" width={217} height={344} className="mb-4 sm:mb-0" />

        <Image
          className="px-4 sm:px-8"
          src={"/Image.png"}
          alt="Image"
          width={892}
          height={182}
        />
      </div>
      <Sales/>
      <Button/>
      <Categories/>
      <Products/>
      <Ourproducts/>

    </div>
   
  );
};

export default Navbar2;
