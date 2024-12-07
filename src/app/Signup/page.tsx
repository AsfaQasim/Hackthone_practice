import React from 'react';
import Image from 'next/image';

const Signup = () => {
  return (
    <div>
      <div className="min-h-[70vh] max-w-full py-24 flex flex-col lg:flex-row justify-center items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <Image
            src={"/signup.png"}
            alt="signup"
            width={705}
            height={781}
            className="w-full max-w-[500px] h-auto" // Adjusting for responsive image size
          />
        </div>

        {/* Form Section */}
        <div className="px-6 sm:px-8 lg:px-16 py-24 space-y-8 w-full lg:w-1/2">
          <h1 className="text-black text-4xl font-bold">Login to Exclusive</h1>
          <p>Enter your details below</p>
          
          {/* Email or Phone Number */}
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="border-b-2 w-full py-2" /* Ensure full-width and adequate padding */
          />

          {/* Password */}
          <input
            type="password" // Changed to password type for better security
            placeholder="Password"
            className="border-b-2 w-full py-2" /* Ensure full-width and adequate padding */
          />
          
          {/* Login Button and Forget Password */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center">
            <button className="bg-[#DB4444] h-[56px] w-full sm:w-[150px] flex justify-center items-center text-white rounded hover:bg-red-300">
              Login
            </button>
            <p className="text-[#DB4444] text-center sm:text-left mt-4 sm:mt-0">
              Forget Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
