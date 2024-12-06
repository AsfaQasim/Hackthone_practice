import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div className="bg-black w-full text-white py-20 px-12 relative">
        <div className="flex justify-between px-12 gap-3">
          {/* Exclusive Section */}
          <div className="w-1/5">
            <h1 className="text-2xl font-semibold mb-4">Exclusive</h1>
            <h2 className="text-xl mb-2">Subscribe</h2>
            <h3 className="text-lg mb-6">Get 10% off your first order.</h3>
            <div className="relative w-44">
              <input
                type="text"
                placeholder="Enter your Email"
                className="w-full py-2 pl-4 border border-white bg-black"
              />
              <div className="absolute inset-y-0 right-3 flex items-center bg-gray">
                <Image
                  src="/icon.png"
                  alt="icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="w-1/5">
            <h1 className="text-2xl font-semibold mb-4">Support</h1>
            <h2 className="text-xl mb-2">
              111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh
            </h2>
            <h3 className="text-lg mb-6">exclusive@gmail.com</h3>
            <h4 className="text-lg mb-5">+88015-88888-9999</h4>
          </div>

          {/* Account Section */}
          <div className="w-1/5">
            <h1 className="text-2xl font-semibold mb-4">Account</h1>
            <h2 className="text-xl mb-2">My Account</h2>
            <h3 className="text-lg mb-6">Login/Register</h3>
            <h4 className="text-lg mb-5">Cart</h4>
            <h5 className="text-lg mb-5">Wishlist</h5>
          </div>

          {/* Quick Link Section */}
          <div className="w-1/5">
            <h1 className="text-2xl font-semibold mb-4">Quick Link</h1>
            <h2 className="text-xl mb-2">Privacy Policy</h2>
            <h3 className="text-lg mb-6">Terms of Use</h3>
            <h4 className="text-lg mb-5">FAQ</h4>
            <h5 className="text-lg mb-5">Contact</h5>
          </div>

          {/* Download App Section */}
          <div className="w-1/5">
            <h1 className="text-2xl font-semibold mb-4">Download App</h1>
            <h2 className="text-xl mb-2">Save $3 with app new user only.</h2>
            <Image src={"/google.png"} alt="google" width={198} height={84} />
            <div className="w-full flex justify-center py-4 gap-8">
              <a
                href="https://www.facebook.com/profile.php?id=61556456222532&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <CiTwitter className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/asifa-muhammad-qasim-006120305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <CiLinkedin className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <CiInstagram className="text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;