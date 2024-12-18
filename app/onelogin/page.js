"use client";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-neutral-200 flex items-center justify-center h-screen">
      <div className="flex flex-row bg-white w-[1200px] shadow-large">
        <div className="w-1/2 flex flex-col p-10 pr-20 text-default-500">
          <p className="text-3xl text-default-500 font-semibold tracking-tight mb-4 mt-4">
            Sign into <span className="text-green-950">Petrafi</span>
          </p>
          <p className="font-medium text-sm ml-1 mb-10">
            Welcome Back. Please login to your account.
          </p>
          <div className="flex flex-row items-end mb-4">
            <div className="w-1/2 flex flex-col shadow-small border border-gray-300 border-l-3 focus-within:border-l-green-800 hover:border-l-green-800 p-2 px-4 transition-all">
              <p className="text-xs text-[10px] text-gray-400">Company Subdomain</p>
              <input
                type="text"
                className="border-none outline-none bg-transparent text-base text-black"
              />
            </div>
            <p className="ml-2 mb-2 text-lg">.petrafi.com</p>
          </div>
          {/* <p className="text-xs text-red-500">Domain not valid.</p> */}
          <div className=" shadow-large mb-4">
            <div className="w-full flex flex-col border border-gray-300 border-l-3 border-b-0 focus-within:border-l-green-800 hover:border-l-green-800 p-2 px-4 transition-all">
              <p className="text-xs text-[10px] text-gray-400">Username</p>
              <input
                type="text"
                className="border-none outline-none bg-transparent text-base text-black"
              />
            </div>
            <div className="w-full flex flex-col border border-gray-300 border-l-3 focus-within:border-l-green-800 hover:border-l-green-800 p-2 px-4 transition-all">
              <p className="text-xs text-[10px] text-gray-400">Password</p>
              <input
                type="password"
                className="border-none outline-none bg-transparent text-base text-black"
              />
            </div>
          </div>
          <div className="flex justify-between mb-10 px-1">
            <Checkbox
              size="sm"
              color="primary"
              classNames={{ label: "text-gray-500 font-medium" }}
            >
              Remember me
            </Checkbox>
            <p className="text-sm font-semibold cursor-pointer">
              Forgot Password
            </p>
          </div>
          <Button
            className="w-full bg-green-950 shadow-medium p-3 px-5 text-white text-center font-semibold mb-10 rounded-none"
            size="lg"
          >
            Log in to Your Account
          </Button>
          <p className="text-xs font-semibold">
            By signing in, you agree to Petrafi&apos;s
          </p>
          <p className="text-xs text-black font-semibold">
            Terms and Conditions & Privacy Policy
          </p>
        </div>
        <div className="w-1/2 border-green-800">
          <Image
            src="/Designer4.jpeg"
            width={1000}
            height={1000}
            alt=""
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
