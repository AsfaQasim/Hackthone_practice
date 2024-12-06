import React from "react";
import Image from "next/image";

const Customer = () => {
  const services = [
    {
      title: "Free and Fast Delivery!",
      description: "Free delivery for all orders over $140",
      image: "/Services.png",
    },
    {
      title: "Support 24/7",
      description: "We are here to help you anytime",
      image: "/service.png",
    },
    {
      title: "Easy Returns",
      description: "Hassle-free returns for all products",
      image: "/check.png",
    },
  ];

  return (
    <div className="flex justify-center gap-10 w-full py-20">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-full"
        >
          <div className="w-[84px] h-[84px] mb-4">
            <Image
              src={service.image}
              alt={service.title}
              width={84}
              height={84}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-lg font-bold mb-2">{service.title}</h1>
          <p className="text-sm text-gray-600 font-semibold">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Customer;