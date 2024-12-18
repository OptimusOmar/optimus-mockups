"use client";
import { Divider, Input } from "@nextui-org/react";
import React from "react";
import { FaDirections } from "react-icons/fa";
import { IoArrowUpCircle } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaTruck } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen flex flex-col text-foreground text-tiny overflow-auto">
      <nav className="bg-neutral-200 h-12 shrink-0 flex flex-row items-center justify-between px-3 sticky top-0 z-50">
        <p className="text-base font-semibold">{"<"}</p>
        <p className="uppercase font-bold">Jobs</p>
        {/* <Button size="sm" className="h-7 text-tiny bg-emerald-700 text-white">
          Add Trip
        </Button> */}
        <div></div>
      </nav>
      <div className="bg-gradient-to-b from-emerald-600 via-neutral-200 to-neutral-200 flex flex-1 flex-col gap-2 p-3 px-5">
        <div className="flex flex-row justify-between mb-4 mt-1 items-center px-2">
          <div className="flex flex-col text-white ">
            <p className="text-xl font-bold tracking-wider">Friday</p>
            <p>May 10, 2024</p>
          </div>
          <div className="rounded-full bg-black/10 flex items-center justify-center p-1 w-10 h-10">
            <IoIosNotifications size={20} className="text-white" />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-3 flex flex-row items-center justify-end">
          <div className="bg-gray-300 rounded-lg p-3 mr-3">
            <CgProfile size={20} className="text-gray-600" />
          </div>
          <div className="flex flex-col flex-1">
            <p className="font-bold text-base">Omar Casey</p>
            <p className="text-gray-500">Allied Trucking - DUMPTRUCK</p>
          </div>
          <div className="bg-green-200 flex items-center justify-center py-1 px-3 rounded-full h-min">
            <p className="text-green-700 font-bold">Active</p>
          </div>
        </div>
        <p className="font-bold text-sm tracking-wide mt-5 px-2 mb-3">
          You have 3 jobs today
        </p>
        <Input placeholder="Search Jobs" />
        <div className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-3 px-4">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center bg-emerald-200 rounded-lg py-1 px-3 w-min mr-3">
              <FaTruck size={20} className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex flex-col flex-1">
              <p className="font-bold text-gray-500">Job Name</p>
              <p className="tracking-wider font-medium">Scotiabank Arena</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center px-3 py-1 bg-cyan-200 rounded-full font-bold text-cyan-700 text-[11px] tracking-wide uppercase">
                Completed
              </div>
              <p className="text-gray-500 font-bold ml-3">#1</p>
            </div>
          </div>
          <Divider className="my-2" />
          <div className="flex flex-col mb-3">
            <p className="font-bold text-gray-500 mb-1">Delivery Location</p>
            <p className="tracking-wider font-medium">
              8350 52nd Terrace, Miami FL 33155, USA
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <p className="font-bold text-gray-500 mb-1">Requested Quantity</p>
              <p className="tracking-wider font-medium">8 Loads (LD)</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="font-bold text-gray-500 mb-1">Material</p>
              <p className="tracking-wider font-medium">#1 Stone Blend</p>
            </div>
          </div>
        </div>
        <Link href="/truckerapp" className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-3 px-4">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center bg-emerald-200 rounded-lg py-1 px-3 w-min mr-3">
              <FaTruck size={20} className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex flex-col flex-1">
              <p className="font-bold text-gray-500">Job Name</p>
              <p className="tracking-wider font-medium">Miami Beach Stadium</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center px-3 py-1 bg-green-200 rounded-full font-bold text-green-700 text-[11px] tracking-wide uppercase">
                Active
              </div>
              <p className="text-gray-500 font-bold ml-3">#2</p>
            </div>
          </div>
          <Divider className="my-2" />
          <div className="flex flex-col mb-3">
            <p className="font-bold text-gray-500 mb-1">Delivery Location</p>
            <p className="tracking-wider font-medium">
              8350 52nd Terrace, Miami FL 33155, USA
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <p className="font-bold text-gray-500 mb-1">Requested Quantity</p>
              <p className="tracking-wider font-medium">8 Loads (LD)</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="font-bold text-gray-500 mb-1">Material</p>
              <p className="tracking-wider font-medium">#1 Stone Blend</p>
            </div>
          </div>
        </Link>
        <div className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-3 px-4">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-row items-center bg-emerald-200 rounded-lg py-1 px-3 w-min mr-3">
              <FaTruck size={20} className="w-5 h-6 text-emerald-600" />
            </div>
            <div className="flex flex-col flex-1">
              <p className="font-bold text-gray-500">Job Name</p>
              <p className="tracking-wider font-medium">Kaseya Center</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex items-center justify-center px-3 py-1 bg-gray-200 rounded-full font-bold text-gray-700 text-[11px] tracking-wide uppercase">
                Pending
              </div>
              <p className="text-gray-500 font-bold ml-3">#3</p>
            </div>
          </div>
          <Divider className="my-2" />
          <div className="flex flex-col mb-3">
            <p className="font-bold text-gray-500 mb-1">Delivery Location</p>
            <p className="tracking-wider font-medium">
              8350 52nd Terrace, Miami FL 33155, USA
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <p className="font-bold text-gray-500 mb-1">Requested Quantity</p>
              <p className="tracking-wider font-medium">3 Loads (LD)</p>
            </div>
            <Divider orientation="vertical" />
            <div className="flex flex-col">
              <p className="font-bold text-gray-500 mb-1">Material</p>
              <p className="tracking-wider font-medium">#1 Dirt Fill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
