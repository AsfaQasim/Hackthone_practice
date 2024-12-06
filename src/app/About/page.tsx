import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="w-full min-h-[70vh] px-16 py-20">
        {/* Breadcrumb */}
        <h1 className="text-lg">Home / About</h1>

        {/* Heading */}
        <h1 className="font-bold text-[54px] py-4">Our Story</h1>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-[525px]">
            <p className="text-lg py-4">
              Launched in 2015, Exclusive is South Asia&apos;s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-lg py-4">
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer goods to electronics and more.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[705px] relative lg:bottom-32">
            <Image
              src="/side_image.png"
              alt="sideimage"
              width={705}
              height={609}
              className="object-cover"
            />
          </div>
        </div>

        {/* Grid Section */}
        <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 mx-auto">
          {/* Column 1 */}
          <div className="w-full h-[230px] bg-[#F5F5F5] border border-gray-300 flex flex-col justify-center items-center hover:bg-red-500">
            <Image
              src={"/cellphone.png"}
              alt="cellphone"
              width={56}
              height={56}
              className="mb-3"
            />
            <h1 className="text-center text-sm">Phones</h1>
          </div>

          {/* Column 2 */}
          <div className="w-full h-[230px] bg-[#F5F5F5] border border-gray-300 flex flex-col justify-center items-center hover:bg-red-500">
            <Image
              src={"/computer.png"}
              alt="Computers"
              width={56}
              height={56}
              className="mb-3"
            />
            <h1 className="text-center text-sm">Computers</h1>
          </div>

          {/* Column 3 */}
          <div className="w-full h-[230px] bg-[#F5F5F5] border border-gray-300 flex flex-col justify-center items-center hover:bg-red-500">
            <Image
              src={"/watch.png"}
              alt="Smartwatch"
              width={56}
              height={56}
              className="mb-3"
            />
            <h1 className="text-center text-sm">Smartwatch</h1>
          </div>

          {/* Column 4 */}
          <div className="w-full h-[230px] bg-[#F5F5F5] border border-gray-300 flex flex-col justify-center items-center hover:bg-red-500">
            <Image
              src={"/camera.png"}
              alt="Camera"
              width={56}
              height={56}
              className="mb-3"
            />
            <h1 className="text-center text-sm">Camera</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
