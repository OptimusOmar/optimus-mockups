"use client";
import {
  Button,
  Card,
  Chip,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaTruckMoving } from "react-icons/fa6";
import { PiNotepad } from "react-icons/pi";
import { FaForward } from "react-icons/fa6";
import { BiSolidNotepad } from "react-icons/bi";
import { FaRoad } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";
import Image from "next/image";

const data = [
  {
    name: "01/01/2024",
    Driver: 12,
    Truck: 17,
    Total: 29,
    TotalPercent: 80,
  },
  {
    name: "01/02/2024",
    Driver: 11,
    Truck: 11,
    Total: 22,
    TotalPercent: 90,
  },
  {
    name: "01/03/2024",
    Driver: 3,
    Truck: 17,
    Total: 20,
    TotalPercent: 86,
  },
  {
    name: "01/04/2024",
    Driver: 4,
    Truck: 8,
    Total: 12,
    TotalPercent: 87,
  },
  {
    name: "01/05/2024",
    Driver: 2,
    Truck: 12,
    Total: 14,
    TotalPercent: 90,
  },
  {
    name: "01/06/2024",
    Driver: 7,
    Truck: 8,
    Total: 15,
    TotalPercent: 92,
  },
  {
    name: "01/07/2024",
    Driver: 12,
    Truck: 17,
    Total: 29,
    TotalPercent: 96,
  },
  {
    name: "01/08/2024",
    Driver: 12,
    Truck: 19,
    Total: 31,
    TotalPercent: 95,
  },
  {
    name: "01/09/2024",
    Driver: 11,
    Truck: 11,
    Total: 22,
    TotalPercent: 83,
  },
  {
    name: "01/10/2024",
    Driver: 3,
    Truck: 17,
    Total: 20,
    TotalPercent: 86,
  },
  {
    name: "01/11/2024",
    Driver: 4,
    Truck: 8,
    Total: 12,
    TotalPercent: 81,
  },
  {
    name: "01/12/2024",
    Driver: 2,
    Truck: 12,
    Total: 14,
    TotalPercent: 86,
  },
  {
    name: "01/13/2024",
    Driver: 7,
    Truck: 8,
    Total: 15,
    TotalPercent: 93,
  },
  {
    name: "01/14/2024",
    Driver: 12,
    Truck: 15,
    Total: 27,
    TotalPercent: 86,
  },
  {
    name: "01/15/2024",
    Driver: 12,
    Truck: 17,
    Total: 29,
    TotalPercent: 90,
  },
  {
    name: "01/16/2024",
    Driver: 11,
    Truck: 11,
    Total: 22,
    TotalPercent: 88,
  },
  {
    name: "01/17/2024",
    Driver: 3,
    Truck: 17,
    Total: 20,
    TotalPercent: 86,
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-neutral-100 text-foreground flex">
      <div className="w-72 bg-slate-200"></div>
      <div className="p-12 w-full">
        <div className="bg-white shadow-xl w-full rounded-lg flex flex-col">
          <div className="bg-green-300 h-20 rounded-t-lg flex justify-between items-center px-10">
            <p className="text-xl font-bold">Job Quote Info - #240029-01</p>
            <div className="flex gap-4 items-center">
              <Button color="warning" className="text-white font-medium">
                Back to Job
              </Button>
              <Button color="warning" className="text-white font-medium">
                Job List
              </Button>
            </div>
          </div>
          <div className="p-8">
            <Card className="p-6 text-gray-600">
              <p>
                <span className="font-medium">Created:</span> 04/22/2024
                06:22:46 pm - Root Root
              </p>
              <p>
                <span className="font-medium">Updated:</span> 04/22/2024
                07:00:42 pm - Root Root
              </p>
              <p>
                <span className="font-medium">Approved:</span> 04/22/2024,
                6:22:59 PM - Root Root
              </p>
            </Card>
            <div className="grid grid-cols-5 gap-4 mt-6">
              <div className="col-span-2 grid grid-cols-2 gap-4">
                <Card className="col-span-1 py-5 px-6">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div className="flex flex-col">
                      <p className="text-gray-500 font-medium mb-2">
                        Running orders
                      </p>
                      <p className="text-3xl mb-2 font-medium">2</p>
                    </div>
                    <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mb-2">
                      <BiSolidNotepad size={30} className="text-[#00b5ad]" />
                    </div>
                  </div>
                  <p className="text-green-500 font-medium text-sm w-full">
                    ^ 10% more than yesterday
                  </p>
                </Card>
                <Card className="col-span-1 py-5 px-6">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div className="flex flex-col">
                      <p className="text-gray-500 font-medium mb-2">
                        Dispatched trucks
                      </p>
                      <p className="text-3xl mb-2 font-medium">7</p>
                    </div>
                    <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mb-2">
                      <FaTruckMoving size={30} className="text-[#00b5ad]" />
                    </div>
                  </div>
                  <p className="text-green-500 font-medium text-sm w-full">
                    ^ 40% more than yesterday
                  </p>
                </Card>
                <Card className="col-span-1 py-5 px-6">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div className="flex flex-col">
                      <p className="text-gray-500 font-medium mb-2">
                        Trucks in transit
                      </p>
                      <p className="text-3xl mb-2 font-medium">3</p>
                    </div>
                    <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mb-2">
                      <FaRoad size={30} className="text-[#00b5ad]" />
                    </div>
                  </div>
                  {/* <p className="text-green-500 font-medium text-sm w-full">
                    ^ 10% more than yesterday
                  </p> */}
                </Card>
                <Card className="col-span-1 py-5 px-6">
                  <div className="flex flex-row justify-between items-center mb-3">
                    <div className="flex flex-col">
                      <p className="text-gray-500 font-medium mb-2 tracking-tight">
                        Total quantity delivered
                      </p>
                      <p className="text-3xl mb-2 font-medium">66 LDs</p>
                    </div>
                    <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mb-2">
                      <FaTruckLoading size={30} className="text-[#00b5ad]" />
                    </div>
                  </div>
                  <p className="text-green-500 font-medium text-sm w-full">
                    ^ 57% more than yesterday
                  </p>
                </Card>
                <Card className="col-span-2 py-5 px-6">
                  <p className="text-xl text-center mb-4">
                    Delivered Today (24/30 LD)
                  </p>
                  <Progress
                    size="lg"
                    aria-label="Loading..."
                    value={70}
                    className="px-3"
                    classNames={{ indicator: "bg-[#00b5ad]" }}
                  />
                </Card>
              </div>
              <Card className="col-span-3 py-5 px-6">
                <p className="text-2xl font-light font mb-5">
                  Quantity Delivered - Daily
                </p>
                <div className="w-full h-96 border rounded-lg pl-2 pb-2 pt-8 pr-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barGap={2}>
                      <CartesianGrid stroke="#e6e6e6" vertical={false} />
                      <XAxis
                        dataKey="name"
                        angle={-30}
                        tick={{ fontSize: 14 }}
                        tickMargin={12}
                        tickSize={10}
                        height={50}
                      />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="Total" fill="#004751" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
            <Table
              fullWidth
              // isCompact
              //   removeWrapper
              color="success"
              aria-label="Example table with dynamic content"
              className="mt-5"
            >
              <TableHeader>
                <TableColumn>Order ID</TableColumn>
                <TableColumn>Addresses</TableColumn>
                <TableColumn>Scheduled Time</TableColumn>
                <TableColumn>Status</TableColumn>
                <TableColumn>Dispatched Trucks</TableColumn>
                <TableColumn>Today&apos;s Progress</TableColumn>
                <TableColumn>Estimated Cost</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="font-semibold">003</p>
                      <p className="text-xs text-gray-500 -mb-1">240005-062</p>
                      <p className="text-[10px] text-gray-500">
                        Venture X Miami
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="text-xs text-foreground font-semibold">
                        <span className=" font-normal text-gray-500">
                          Pick-up:
                        </span>{" "}
                        8350 West 84th Avenue, Miami, FL, USA
                      </p>
                      <p className="text-xs text-foreground font-semibold">
                        <span className=" font-normal text-gray-500">
                          Drop-off:
                        </span>{" "}
                        8346 SW 40th St, Miami, FL 33155, USA
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className=" font-semibold">06/17/2024</p>
                      <p className="text-xs text-gray-500">07:00 pm</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip color="warning" variant="flat" size="sm">
                      In Progress
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center ml-4">
                      <p className="font-semibold mr-3">4/4</p>
                      <FaTruckMoving
                        size={30}
                        className="h-5 w-5 text-gray-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col w-44">
                      <p className="text-center font-medium mb-1 text-xs">
                        12/14 LD
                      </p>
                      <Progress
                        size="sm"
                        aria-label="Loading..."
                        value={80}
                        className=""
                        classNames={{ indicator: "bg-[#00b5ad]" }}
                        // label="hello"
                      />
                      <p className="text-center font-medium text-gray-500 mt-1 text-xs">
                        Fill Concrete
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="font-semibold">$3,000</p>
                      <p className="text-xs text-gray-500">$250.00 / LD</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="font-semibold">002</p>
                      <p className="text-xs text-gray-500 -mb-1">240005-062</p>
                      <p className="text-[10px] text-gray-500">
                        Venture X Miami
                      </p>
                      {/* <div className="flex items-center justify-center bg-green-200 text-green-600 text-[10px] leading-3 rounded-full w-min py-0.5 px-2 pb-1">
                      Enabled
                    </div> */}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="text-xs text-foreground font-semibold">
                        <span className=" font-normal text-gray-500">
                          Pick-up:
                        </span>{" "}
                        4401 Northwest 87th Avenue, Doral, FL, USA
                      </p>
                      <p className="text-xs text-foreground font-semibold">
                        <span className=" font-normal text-gray-500">
                          Drop-off:
                        </span>{" "}
                        8346 SW 40th St, Miami, FL 33155, USA
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className=" font-semibold">06/17/2024</p>
                      <p className="text-xs text-gray-500">05:00 pm</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip color="warning" variant="flat" size="sm">
                      In Progress
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center ml-4">
                      <p className="font-semibold mr-3">3/3</p>
                      <FaTruckMoving
                        size={30}
                        className="h-5 w-5 text-gray-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col w-44">
                      <p className="text-center font-medium mb-1 text-xs">
                        12/16 LD
                      </p>
                      <Progress
                        size="sm"
                        aria-label="Loading..."
                        value={80}
                        className=""
                        classNames={{ indicator: "bg-[#00b5ad]" }}
                        // label="hello"
                      />
                      <p className="text-center font-medium text-gray-500 mt-1 text-xs">
                        Fill Concrete
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="font-semibold">$3,000</p>
                      <p className="text-xs text-gray-500">$250.00 / LD</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="font-semibold">001</p>
                      <p className="text-xs text-gray-500 -mb-1">240005-062</p>
                      <p className="text-[10px] text-gray-500">
                        Venture X Miami
                      </p>
                      {/* <div className="flex items-center justify-center bg-green-200 text-green-600 text-[10px] leading-3 rounded-full w-min py-0.5 px-2 pb-1">
                      Enabled
                    </div> */}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="text-xs text-foreground font-semibold">
                        <span className=" font-normal text-gray-500">
                          Pick-up:
                        </span>{" "}
                        4401 Northwest 87th Avenue, Doral, FL, USA
                      </p>
                      <p className="text-xs text-foreground font-semibold">
                        <span className=" font-normal text-gray-500">
                          Drop-off:
                        </span>{" "}
                        8346 SW 40th St, Miami, FL 33155, USA
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className=" font-semibold">06/16/2024</p>
                      <p className="text-xs text-gray-500">10:00 am</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip color="success" variant="flat" size="sm">
                      Completed
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center ml-4">
                      <p className="font-semibold mr-3">5/5</p>
                      <FaTruckMoving
                        size={30}
                        className="h-5 w-5 text-gray-500"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col w-44">
                      <p className="text-center font-medium mb-1 text-xs">
                        42/42 LD
                      </p>
                      <Progress
                        size="sm"
                        aria-label="Loading..."
                        value={100}
                        color="default"
                        // classNames={{ indicator: "bg-[#00b5ad]" }}
                      />
                      <p className="text-center font-medium text-gray-500 mt-1 text-xs">
                        Fill Concrete
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="font-semibold">$10,500</p>
                      <p className="text-xs text-gray-500">$250.00 / LD</p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {/* <div className="flex flex-row gap-10 mt-10">
              <div className="w-1/2">
                <div className="grid grid-cols-3 gap-10">
                  <Card className="flex flex-row justify-center items-center py-4">
                    <FaTruckMoving size={30} className="h-11 w-11 mr-6" />
                    <div className="flex flex-col items-center">
                      <p className=" tracking-wider mb-1">Dispatched Trucks</p>
                      <p className="text-3xl font-semibold">5</p>
                    </div>
                  </Card>
                  <Card className="flex flex-row justify-center items-center py-4">
                    <FaForward size={30} className="h-10 w-10 mr-6" />
                    <div className="flex flex-col items-center">
                      <p className=" tracking-wider mb-1">Trucks In Transit</p>
                      <p className="text-3xl font-semibold">3</p>
                    </div>
                  </Card>
                  <Card className="flex items-center py-4">
                    <p className=" tracking-wider mb-1">
                      Total Quantity Delivered
                    </p>
                    <p className="text-3xl font-semibold">87 LDs</p>
                  </Card>
                </div>
                <p className="text-xl tracking-widest text-center mt-10 mb-2">
                  Delivered Today (10/14 LD)
                </p>
                <Progress
                  size="lg"
                  aria-label="Loading..."
                  value={70}
                  className="px-10"
                  classNames={{ indicator: "bg-[#00b5ad]" }}
                />
                <Table
                  fullWidth
                  // isCompact
                  removeWrapper
                  color="primary"
                  aria-label="Example table with dynamic content"
                  className="mt-20"
                >
                  <TableHeader>
                    <TableColumn>Order No</TableColumn>
                    <TableColumn>
                      Requested
                      <br /> Trucks
                    </TableColumn>
                    <TableColumn>
                      Dispatched
                      <br /> Trucks
                    </TableColumn>
                    <TableColumn>
                      Requested
                      <br />
                      Loads
                    </TableColumn>
                    <TableColumn>
                      Delivered
                      <br /> Loads
                    </TableColumn>
                    <TableColumn>Date</TableColumn>
                    <TableColumn>
                      Scheduled
                      <br /> Time
                    </TableColumn>
                    <TableColumn>
                      Estimated
                      <br /> Cost
                    </TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>240029-01-003</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>14</TableCell>
                      <TableCell>
                        <p className="font-bold">10</p>
                      </TableCell>
                      <TableCell>04/25/2024</TableCell>
                      <TableCell>07:00 pm</TableCell>
                      <TableCell>$1,250</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>240029-01-002</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>7</TableCell>
                      <TableCell>
                        <p className="font-bold">7</p>
                      </TableCell>
                      <TableCell>04/24/2024</TableCell>
                      <TableCell>02:00 pm</TableCell>
                      <TableCell>$2,535</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>240029-01-001</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>
                        <p className="font-bold">4</p>
                      </TableCell>
                      <TableCell>04/23/2024</TableCell>
                      <TableCell>03:30 pm</TableCell>
                      <TableCell>$960</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="w-1/2">
                <p className="text-2xl font-thin mb-5">
                  Quantity Delivered - Daily
                </p>
                <div className="w-full h-96 border rounded-lg pl-2 pb-2 pt-8 pr-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barGap={2}>
                      <CartesianGrid stroke="#e6e6e6" vertical={false} />
                      <XAxis
                        dataKey="name"
                        angle={-30}
                        tick={{ fontSize: 14 }}
                        tickMargin={12}
                        tickSize={10}
                        height={50}
                      />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="Total" fill="#004751" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div> */}
            <p className="font-bold mt-8">Directions and Distance</p>
            <Image
              src="/map fake.png"
              width={1000}
              height={1000}
              alt=""
              className="w-full mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
