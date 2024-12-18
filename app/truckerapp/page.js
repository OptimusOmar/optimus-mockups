"use client";
import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { IoArrowUpCircle, IoArrowDownCircle } from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GiTicket } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaDirections } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaCopy } from "react-icons/fa";

const Page = () => {
  const [ticket, setTicket] = useState("1");

  return (
    <div className="h-screen flex flex-col text-foreground text-tiny overflow-auto">
      <nav className="bg-neutral-200 h-12 shrink-0 flex flex-row items-center justify-between px-3 sticky top-0 z-50">
        <Link href="/joblist" className="text-base font-semibold">
          {"<"}
        </Link>
        <p className="uppercase font-bold">Job Info</p>
        {/* <Button size="sm" className="h-7 text-tiny bg-emerald-700 text-white">
          Add Trip
        </Button> */}
        <div></div>
      </nav>
      <div className="bg-gray-900 h-72 shrink-0">
        <Image
          src="/maps dark.jpg"
          width={1000}
          height={1000}
          alt=""
          className="flex object-cover h-full"
        />
      </div>
      <div className="bg-neutral-200 grid grid-cols-2 gap-2 p-3">
        {ticket === "1" && (
          <Button
            className="font-semibold text-emerald-600 border border-emerald-600 bg-emerald-100 col-span-2 mb-3"
            size="md"
            onPress={() => setTicket("2")}
            startContent={
              <GiTicket
                size={20}
                className="mr-1 w-[16px] h-[16px] text-emerald-600"
              />
            }
          >
            Generate Ticket
          </Button>
        )}
        {ticket !== "1" && (
          <div className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-2 px-4 mb-3">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center bg-emerald-100 rounded-full py-1 px-3 w-min">
                <GiTicket
                  size={20}
                  className="mr-1 w-[16px] h-[16px] text-emerald-600"
                />
                <p className="text-nowrap text-tiny font-mono font-bold uppercase tracking-wide text-emerald-600">
                  #200000210
                </p>
              </div>
              <div className="flex items-center justify-center px-3 py-1 bg-gray-200 rounded-full font-bold text-gray-600 text-[11px] tracking-wide uppercase">
                In Progress
              </div>
            </div>
            <Divider className="my-2" />
            <div className="flex flex-row justify-between items-center mb-1">
              <p className="tracking-wider font-medium">Pickup Timestamp:</p>
              {ticket === "3" && (
                <p className="tracking-wider">05-10-2024 10:16 am</p>
              )}
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="tracking-wider font-medium">Drop-off Timestamp:</p>
              {ticket === "4" && (
                <p className="tracking-wider">05-10-2024 10:16 am</p>
              )}
            </div>
            <div className="flex flex-row mt-4 gap-2">
              <Button
                size="sm"
                className="text-white bg-red-500 w-1/4 font-bold"
              >
                Cancel
              </Button>
              {ticket === "2" && (
                <Button
                  size="sm"
                  className="text-white bg-emerald-500 w-3/4 font-bold"
                  onPress={() => setTicket("3")}
                >
                  Confirm Pickup
                </Button>
              )}
              {ticket === "3" && (
                <Button
                  size="sm"
                  className="text-white bg-emerald-500 w-3/4 font-bold"
                  onPress={() => setTicket("1")}
                >
                  Confirm Drop-off
                </Button>
              )}
            </div>
          </div>
        )}

        <div className="bg-white flex flex-col items-center justify-center h-min rounded-lg shadow-md py-1 px-4">
          <p className="font-semibold">Job Name:</p>
          <p className=" tracking-wider">Scotiabank Arena</p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center h-min rounded-lg shadow-md py-1 px-4">
          <p className="font-semibold">Material:</p>
          <p className=" tracking-wider">#1 Stone Blend</p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center h-min rounded-lg shadow-md py-1 px-4">
          <p className="font-semibold">Job Quote:</p>
          <p className=" tracking-wider">240005-32</p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center h-min rounded-lg shadow-md py-1 px-4">
          <p className="font-semibold">Truck #:</p>
          <p className=" tracking-wider">5</p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center h-min rounded-lg shadow-md py-1 px-4">
          <p className="font-semibold">Customer Name:</p>
          <p className=" tracking-wider">Triden Construction</p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center h-min rounded-lg shadow-md py-1 px-4">
          <p className="font-semibold">Number of Loads:</p>
          <p className=" tracking-wider">8</p>
        </div>
        <div className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-2 px-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center bg-indigo-200 rounded-full py-1 px-3 w-min">
              <IoArrowUpCircle
                size={20}
                className="mr-1 w-[16px] h-[16px] text-indigo-600"
              />
              <p className="text-[11px] font-bold uppercase tracking-wide text-indigo-600 leading-none">
                Pickup
              </p>
              <p className="ml-2 text-indigo-600 text-[11px] mt-[2px] text-nowrap">
                at 3:00pm
              </p>
            </div>
            {ticket === "2" && (
              <div className="flex items-center justify-center px-3 py-1 bg-gray-200 rounded-full font-bold text-gray-600 text-[10px] tracking-wide uppercase">
                Ongoing
              </div>
            )}
            {ticket === "3" && (
              <div className="flex items-center justify-center px-3 py-1 bg-cyan-200 rounded-full font-bold text-cyan-700 text-[10px] tracking-wide uppercase">
                Completed
              </div>
            )}
          </div>
          <Divider className="my-2" />
          <div className="flex flex-row justify-between items-center">
            <p className="w-3/4 tracking-wider">
              8350 52nd Terrace, Miami FL, USA
            </p>
            <div className="w-1/4 flex items-center gap-3 justify-end">
              <FaCopy size={20} className="w-5 h-5 text-gray-400" />
              <FaDirections size={20} className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-2 px-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center bg-orange-100 rounded-full py-1 px-3 w-min">
              <IoArrowDownCircle
                size={20}
                className="mr-1 w-[16px] h-[16px] text-yellow-600"
              />
              <p className="text-[11px] font-bold uppercase tracking-wide text-yellow-600 leading-none">
                Delivery
              </p>
            </div>
            {ticket === "3" && (
              <div className="flex items-center justify-center px-3 py-1 bg-gray-200 rounded-full font-bold text-gray-600 text-[10px] tracking-wide uppercase">
                Ongoing
              </div>
            )}
          </div>
          <Divider className="my-2" />
          <div className="flex flex-row justify-between items-center">
            <p className="w-3/4 tracking-wider">
              2780 36th Avenue, Miami FL, USA
            </p>
            <div className="w-1/4 flex items-center gap-3 justify-end">
              <FaCopy size={20} className="w-5 h-5 text-gray-400" />
              <FaDirections size={20} className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-indigo-200 to-emerald-100 col-span-2 flex justify-between items-center h-min rounded-lg shadow-md py-2 px-4">
          <div className="flex flex-row items-center ">
            <FaMapMarkedAlt
              size={20}
              className="ml-2 mr-2 w-[16px] h-[16px] text-indigo-600"
            />
            <p className="text-[11px] text-nowrap font-bold uppercase tracking-wide text-indigo-700 mt-[1px]">
              View Job Route
            </p>
          </div>
          <div className="flex justify-end">
            <FaDirections size={20} className="w-6 h-6 text-blue-500" />
          </div>
        </Button>
        <div className="bg-white flex flex-col items-center justify-center h-min rounded-lg shadow-md py-1 px-4">
          <p className="font-semibold">Driver Rate:</p>
          <p className=" tracking-wider">$93.83/HR</p>
        </div>
        <div className="bg-white flex flex-col items-center justify-center h-min rounded-lg shadow-md py-1 px-4">
          <p className="font-semibold">Dispatched By:</p>
          <p className=" tracking-wider">Root Root</p>
        </div>
        <Accordion
          selectionMode="single"
          className="col-span-2 px-0"
          variant="light"
          defaultSelectedKeys={["1"]}
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={<p className="ml-2">Completed Tickets</p>}
          >
            <div className="flex flex-col gap-3">
              <div className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-2 px-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center bg-emerald-100 rounded-full py-1 px-3 w-min">
                    <GiTicket
                      size={20}
                      className="mr-1 w-[16px] h-[16px] text-emerald-600"
                    />
                    <p className="text-nowrap text-tiny font-mono font-bold uppercase tracking-wide text-emerald-600">
                      #200000209
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-3 py-1 bg-cyan-200 rounded-full font-bold text-cyan-700 text-[10px] tracking-wide uppercase">
                    Completed
                  </div>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-row justify-between items-center mb-1">
                  <p className="tracking-wider font-medium">
                    Pickup Timestamp:
                  </p>
                  <p className="tracking-wider">05-10-2024 10:16 am</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="tracking-wider font-medium">
                    Drop-off Timestamp:
                  </p>
                  <p className="tracking-wider">05-10-2024 04:25 pm</p>
                </div>
              </div>
              <div className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-2 px-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center bg-emerald-100 rounded-full py-1 px-3 w-min">
                    <GiTicket
                      size={20}
                      className="mr-1 w-[16px] h-[16px] text-emerald-600"
                    />
                    <p className="text-nowrap text-tiny font-mono font-bold uppercase tracking-wide text-emerald-600">
                      #200000208
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-3 py-1 bg-cyan-200 rounded-full font-bold text-cyan-700 text-[10px] tracking-wide uppercase">
                    Completed
                  </div>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-row justify-between items-center mb-1">
                  <p className="tracking-wider font-medium">
                    Pickup Timestamp:
                  </p>
                  <p className="tracking-wider">05-10-2024 10:16 am</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="tracking-wider font-medium">
                    Drop-off Timestamp:
                  </p>
                  <p className="tracking-wider">05-10-2024 04:25 pm</p>
                </div>
              </div>
              <div className="bg-white col-span-2 flex flex-col justify-center h-min rounded-lg shadow-md py-2 px-4">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center bg-emerald-100 rounded-full py-1 px-3 w-min">
                    <GiTicket
                      size={20}
                      className="mr-1 w-[16px] h-[16px] text-emerald-600"
                    />
                    <p className="text-nowrap text-tiny font-mono font-bold uppercase tracking-wide text-emerald-600">
                      #200000206
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-3 py-1 bg-cyan-200 rounded-full font-bold text-cyan-700 text-[10px] tracking-wide uppercase">
                    Completed
                  </div>
                </div>
                <Divider className="my-2" />
                <div className="flex flex-row justify-between items-center mb-1">
                  <p className="tracking-wider font-medium">
                    Pickup Timestamp:
                  </p>
                  <p className="tracking-wider">05-10-2024 10:16 am</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <p className="tracking-wider font-medium">
                    Drop-off Timestamp:
                  </p>
                  <p className="tracking-wider">05-10-2024 04:25 pm</p>
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Page;
