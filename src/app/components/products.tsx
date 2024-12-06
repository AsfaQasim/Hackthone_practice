import React from "react";
import Image from "next/image";

const Products = () => {
  return (
    <div>
      <div className="w-full">
        {/* Container for the section */}
        <div className="w-full h-[493px] px-16">
          <div className="flex justify-start items-center gap-3">
            {/* Red image */}
            <Image src="/red.png" alt="red" width={20} height={40} />
            {/* Today image */}
            <Image src="/month.png" alt="today" width={126} height={40} />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-[36px] font-semibold">Best Selling Products</h1>
            <button className="w-[159px] bg-[#DB4444] h-[56px] flex justify-center items-center text-white rounded hover:bg-red-300">
              View All
            </button>
          </div>

          {/* Responsive grid columns */}
          <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-9">
            {/* Column 1 */}
            <div>
              <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
                <div className="py-0 absolute top-2 right-2">
                  <Image
                    src={"/heart2.png"}
                    alt="heart2"
                    width={34}
                    height={76}
                  />
                </div>
                <Image src={"/shirt.png"} alt="game" width={172} height={152} />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">The North Coat</h1>
                <Image
                  src={"/dollar.png"}
                  alt="dollar"
                  width={85}
                  height={24}
                />
                <Image src={"/star.png"} alt="star" width={140} height={20} />
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
                <div className="py-0 absolute top-2 right-2">
                  <Image
                    src={"/heart2.png"}
                    alt="heart2"
                    width={34}
                    height={76}
                  />
                </div>
                <Image src={"/bag.png"} alt="bag" width={172} height={152} />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Gussi duffle bag</h1>
                <Image
                  src={"/dollar.png"}
                  alt="dollar"
                  width={85}
                  height={24}
                />
                <Image src={"/star.png"} alt="star" width={140} height={20} />
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
                <div className="py-0 absolute top-2 right-2">
                  <Image
                    src={"/heart2.png"}
                    alt="heart2"
                    width={34}
                    height={76}
                  />
                </div>
                <Image
                  src={"/radio.png"}
                  alt="radio"
                  width={172}
                  height={152}
                />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">RGB Liquid CPU Coller</h1>
                <Image
                  src={"/dollar.png"}
                  alt="dollar"
                  width={85}
                  height={24}
                />
                <Image src={"/star.png"} alt="star" width={140} height={20} />
              </div>
            </div>

            {/* Column 4 */}
            <div>
              <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
                <div className="py-0 absolute top-2 right-2">
                  <Image
                    src={"/heart2.png"}
                    alt="heart2"
                    width={34}
                    height={76}
                  />
                </div>
                <Image
                  src={"/shelf.png"}
                  alt="shelf"
                  width={172}
                  height={152}
                />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Small BookShelf</h1>
                <Image
                  src={"/dollar.png"}
                  alt="dollar"
                  width={85}
                  height={24}
                />
                <Image src={"/star.png"} alt="star" width={140} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
