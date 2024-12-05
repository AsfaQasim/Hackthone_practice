import React from "react";
import Image from "next/image";
import Button from "./button";

const Ourproduct = () => {
  return (

      <div className="w-full py-32 ">
        {/* Container for the section */}
        <div className="w-full h-[493px] py-20 px-16">
          <div className="flex justify-start items-center gap-3">
            {/* Red image */}
            <Image src="/red.png" alt="red" width={20} height={40} />
            {/* Our purchase */}
            <Image src="/ourproduct.png" alt="today" width={126} height={40} />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-[36px] font-semibold">Explore Our products</h1>

            <Image src={"/arrow.png"} alt="arrow" width={100} height={62} />
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
                <Image src={"/food.png"} alt="food" width={172} height={152} />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Breed Dry dog Food</h1>
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
                <Image src={"/dslr.png"} alt="dslr" width={172} height={152} />
              </div>

              <div className="text-start mt-4">
                <h1 className="font-extralight">Canon Camera</h1>
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
                  src={"/laptop.png"}
                  alt="laptop"
                  width={172}
                  height={152}
                />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Laptop</h1>
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
                  src={"/chair.png"}
                  alt="chair"
                  width={172}
                  height={152}
                />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Ergonomic Chair</h1>
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
          <div className="max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-9">
            {/* Column 4 */}
            <div>
              <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
                <button
                  className="bg-[#00FF66] h-[26px] w-[55px] py-0 absolute top-2 left-2 text-white 
              text-sm rounded"
                >
                  New
                </button>
                <div className="py-0 absolute top-2 right-2">
                  <Image
                    src={"/heart2.png"}
                    alt="heart2"
                    width={34}
                    height={76}
                  />
                </div>
                <Image src={"/car.png"} alt="car" width={172} height={152} />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Sport Car</h1>
                <Image
                  src={"/dollar.png"}
                  alt="dollar"
                  width={85}
                  height={24}
                />
                <Image src={"/star.png"} alt="star" width={140} height={20} />
              </div>
            </div>

            {/* Column 5 */}
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
                  src={"/shoes.png"}
                  alt="shoes"
                  width={172}
                  height={152}
                />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Shoes</h1>
                <Image
                  src={"/dollar.png"}
                  alt="dollar"
                  width={85}
                  height={24}
                />
                <Image src={"/star.png"} alt="star" width={140} height={20} />
              </div>
            </div>

            {/* Column 5 */}
            <div>
              <div className="bg-[#F5F5F5] w-[270px] h-[250px] flex justify-center items-center relative">
                <button
                  className="bg-[#00FF66] h-[26px] w-[55px] py-0 absolute top-2 left-2 text-white 
              text-sm rounded"
                >
                  New
                </button>
                <div className="py-0 absolute top-2 right-2">
                  <Image
                    src={"/heart2.png"}
                    alt="heart2"
                    width={34}
                    height={76}
                  />
                </div>
                <Image src={"/game.png"} alt="game" width={172} height={152} />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Game</h1>
                <Image
                  src={"/dollar.png"}
                  alt="dollar"
                  width={85}
                  height={24}
                />
                <Image src={"/star.png"} alt="star" width={140} height={20} />
              </div>
            </div>

            {/* Column 6 */}
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
                  src={"/jacket.png"}
                  alt="chair"
                  width={172}
                  height={152}
                />
              </div>
              <div className="text-start mt-4">
                <h1 className="font-extralight">Jacket</h1>
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
        <div className="py-96"><Button/></div>
      </div>

   
  );
};

export default Ourproduct;
