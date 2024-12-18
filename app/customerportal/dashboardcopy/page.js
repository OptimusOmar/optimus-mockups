"use client";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Divider,
  Progress,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FaTruckMoving } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-neutral-100 text-foreground flex">
      <div className="w-72 bg-slate-200"></div>
      <div className="p-12 px-20 w-full">
        <p className="text-xl">Welcome, Triden Construction!</p>
        <div className="flex flex-row justify-between items-center mt-10">
          <p className="text-lg font-medium">Order Summary</p>
          <Button size="sm" color="primary" variant="bordered">
            This Month
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-1 py-5 px-6">
              <div className="flex flex-row">
                <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mr-5">
                  <FaTruckMoving size={30} className="text-[#00b5ad]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium mb-2">Active jobs</p>
                  <p className="text-3xl mb-2 font-medium">1</p>
                  <p className="text-green-500 font-medium text-sm w-full">
                    ^ 10% more than last month
                  </p>
                </div>
              </div>
            </Card>
            <Card className="col-span-1 py-5 px-6">
              <div className="flex flex-row">
                <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mr-5">
                  <FaTruckMoving size={30} className="text-[#00b5ad]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium mb-2">
                    Running orders
                  </p>
                  <p className="text-3xl mb-2 font-medium">4</p>
                  <p className="text-red-500 font-medium text-sm">
                    &lt; 50% less than last month
                  </p>
                </div>
              </div>
            </Card>
            <Card className="col-span-1 py-5 px-6">
              <div className="flex flex-row">
                <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mr-5">
                  <FaTruckMoving size={30} className="text-[#00b5ad]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium mb-2">
                    Dispatched trucks
                  </p>
                  <p className="text-3xl mb-2 font-medium">12</p>
                  <p className="text-green-500 font-medium text-sm">
                    ^ 10% more than last month
                  </p>
                </div>
              </div>
            </Card>
            <Card className="col-span-1 py-5 px-6">
              <div className="flex flex-row">
                <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mr-5">
                  <FaTruckMoving size={30} className="text-[#00b5ad]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium mb-2">
                    Trips Completed
                  </p>
                  <p className="text-3xl mb-2 font-medium">458</p>
                  <p className="text-green-500 font-medium text-sm">
                    ^ 15% more than last month
                  </p>
                </div>
              </div>
            </Card>
            <Card className="col-span-2 py-5 px-6">
              <div className="flex flex-col">
                <p className="text-gray-500 font-medium mb-5">
                  Delivered Quantities
                </p>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-1 flex flex-col">
                    <div className="w-full bg-[#00b5ad] h-1 mb-2 rounded-lg"></div>
                    <p className="text-lg text-gray-500 font-medium mb-1">
                      Loads
                    </p>
                    <p className="text-3xl">48</p>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="w-full bg-[#00b5ad]/75 h-1 mb-2 rounded-lg"></div>
                    <p className="text-lg text-gray-500 font-medium mb-1">
                      Tons
                    </p>
                    <p className="text-3xl">22.80</p>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="w-full bg-[#00b5ad]/50 h-1 mb-2 rounded-lg"></div>
                    <p className="text-lg text-gray-500 font-medium mb-1">
                      Cubic Yards
                    </p>
                    <p className="text-3xl">18.43</p>
                  </div>
                  <div className="col-span-1 flex flex-col">
                    <div className="w-full bg-[#00b5ad]/25 h-1 mb-2 rounded-lg"></div>
                    <p className="text-lg text-gray-500 font-medium mb-1">
                      Hours
                    </p>
                    <p className="text-3xl">0:00</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="col-span-1 py-4 px-6 h-[500px]">
            <CardBody className="overflow-y-auto">
              <p className="text-gray-500 font-medium mb-5">Recent updates</p>
              <div className="flex flex-row">
                <div className="flex flex-col items-center mr-5">
                  <div className="border rounded-md flex items-center justify-center p-1">
                    <FaTruckMoving className="text-gray-500" />
                  </div>
                  <div className="w-[1px] h-16 bg-gray-200"></div>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-4">
                    <span className="underline cursor-pointer">Truck 4753</span>{" "}
                    has been dispatched to{" "}
                    <span className="underline cursor-pointer">
                      Venture X Miami
                    </span>
                  </p>
                  <div className="flex flex-row items-center">
                    <BsBoxSeam className="text-gray-500 w-4 h-4 mr-3" />
                    <p className="text-sm text-gray-500 underline cursor-pointer mr-3">
                      Order 240029-01-002
                    </p>
                    <Divider orientation="vertical" className="mr-3" />
                    <p className="text-sm text-gray-500 font-thin">
                      12:09pm, 26 Jun 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col items-center mr-5">
                  <div className="border rounded-md flex items-center justify-center p-1">
                    <FaTruckMoving className="text-gray-500" />
                  </div>
                  <div className="w-[1px] h-16 bg-gray-200"></div>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-4">
                    You created an order for{" "}
                    <span className="underline cursor-pointer">
                      Venture X Miami
                    </span>
                  </p>
                  <div className="flex flex-row items-center">
                    <BsBoxSeam className="text-gray-500 w-4 h-4 mr-3" />
                    <p className="text-sm text-gray-500 underline cursor-pointer mr-3">
                      Order 240029-01-002
                    </p>
                    <Divider orientation="vertical" className="mr-3" />
                    <p className="text-sm text-gray-500 font-thin">
                      12:09pm, 26 Jun 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col items-center mr-5">
                  <div className="border rounded-md flex items-center justify-center p-1">
                    <FaTruckMoving className="text-gray-500" />
                  </div>
                  <div className="w-[1px] h-16 bg-gray-200"></div>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-4">
                    You approved a proposal for{" "}
                    <span className="underline cursor-pointer">
                      Venture X Miami
                    </span>
                  </p>
                  <div className="flex flex-row items-center">
                    <BsBoxSeam className="text-gray-500 w-4 h-4 mr-3" />
                    <p className="text-sm text-gray-500 underline cursor-pointer mr-3">
                      Order 240029-01
                    </p>
                    <Divider orientation="vertical" className="mr-3" />
                    <p className="text-sm text-gray-500 font-thin">
                      12:09pm, 26 Jun 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col items-center mr-5">
                  <div className="border rounded-md flex items-center justify-center p-1">
                    <FaTruckMoving className="text-gray-500" />
                  </div>
                  <div className="w-[1px] h-16 bg-gray-200"></div>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-4">
                    You approved a proposal for{" "}
                    <span className="underline cursor-pointer">
                      Venture X Miami
                    </span>
                  </p>
                  <div className="flex flex-row items-center">
                    <BsBoxSeam className="text-gray-500 w-4 h-4 mr-3" />
                    <p className="text-sm text-gray-500 underline cursor-pointer mr-3">
                      Order 240029-01
                    </p>
                    <Divider orientation="vertical" className="mr-3" />
                    <p className="text-sm text-gray-500 font-thin">
                      12:09pm, 26 Jun 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col items-center mr-5">
                  <div className="border rounded-md flex items-center justify-center p-1">
                    <FaTruckMoving className="text-gray-500" />
                  </div>
                  <div className="w-[1px] h-16 bg-gray-200"></div>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-4">
                    You approved a proposal for{" "}
                    <span className="underline cursor-pointer">
                      Venture X Miami
                    </span>
                  </p>
                  <div className="flex flex-row items-center">
                    <BsBoxSeam className="text-gray-500 w-4 h-4 mr-3" />
                    <p className="text-sm text-gray-500 underline cursor-pointer mr-3">
                      Order 240029-01
                    </p>
                    <Divider orientation="vertical" className="mr-3" />
                    <p className="text-sm text-gray-500 font-thin">
                      12:09pm, 26 Jun 2024
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col items-center mr-5">
                  <div className="border rounded-md flex items-center justify-center p-1">
                    <FaTruckMoving className="text-gray-500" />
                  </div>
                  <div className="w-[1px] h-16 bg-gray-200"></div>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold mb-4">
                    You approved a proposal for{" "}
                    <span className="underline cursor-pointer">
                      Venture X Miami
                    </span>
                  </p>
                  <div className="flex flex-row items-center">
                    <BsBoxSeam className="text-gray-500 w-4 h-4 mr-3" />
                    <p className="text-sm text-gray-500 underline cursor-pointer mr-3">
                      Order 240029-01
                    </p>
                    <Divider orientation="vertical" className="mr-3" />
                    <p className="text-sm text-gray-500 font-thin">
                      12:09pm, 26 Jun 2024
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-row justify-between items-end mt-10">
          <p className="text-lg font-medium">Recent orders</p>
          <Button size="sm" color="primary" variant="bordered" className="mb-1">
            Create New Order +
          </Button>
        </div>
        <Table
          fullWidth
          //   isCompact
          //   removeWrapper
          color="success"
          aria-label="Example table with dynamic content"
          className="mt-2"
        >
          <TableHeader>
            <TableColumn>Order ID</TableColumn>
            <TableColumn>Job name</TableColumn>
            <TableColumn>Last updated</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Progress</TableColumn>
            <TableColumn>Dispatch Date</TableColumn>
            <TableColumn>Scheduled Time</TableColumn>
            <TableColumn>Estimated Cost</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">003</p>
                  <p className="text-xs text-gray-500">240029-01</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">Venture X Miami</p>
                  <p className="text-xs text-gray-500">
                    8350 Northwest 52nd Terrace, Miami, FL 33166
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500">Today, 12:43pm</p>
              </TableCell>
              <TableCell>
                <Chip color="warning" variant="flat" size="sm">
                  In Progress
                </Chip>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
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
                </div>
              </TableCell>
              <TableCell>04/25/2024</TableCell>
              <TableCell>07:00 pm</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">$3,500</p>
                  <p className="text-xs text-gray-500">$250.00 / LD</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">240029-02-001</p>
                  <p className="text-xs text-gray-500"></p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">Venture X Miami</p>
                  <p className="text-xs text-gray-500">
                    8350 Northwest 52nd Terrace, Miami, FL 33166
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500">Today, 12:43pm</p>
              </TableCell>
              <TableCell>
                <Chip color="warning" variant="flat" size="sm">
                  In Progress
                </Chip>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="text-center font-medium mb-1 text-xs">
                    7/14 TN
                  </p>
                  <Progress
                    size="sm"
                    aria-label="Loading..."
                    value={50}
                    className=""
                    classNames={{ indicator: "bg-[#00b5ad]" }}
                    // label="hello"
                  />
                </div>
              </TableCell>
              <TableCell>04/25/2024</TableCell>
              <TableCell>07:00 pm</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">$1,400</p>
                  <p className="text-xs text-gray-500">$100.00 / TN</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">240035-02-001</p>
                  <p className="text-xs text-gray-500"></p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">Scotiabank Arena</p>
                  <p className="text-xs text-gray-500">
                    178 NW 43rd St, Miami, FL 33166
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500">Yesterday, 09:43pm</p>
              </TableCell>
              <TableCell>
                <Chip color="success" variant="flat" size="sm">
                  Completed
                </Chip>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="text-center font-medium mb-1 text-xs">
                    15/15 LD
                  </p>
                  <Progress
                    size="sm"
                    aria-label="Loading..."
                    value={100}
                    className=""
                    color="default"
                    // classNames={{ indicator: "bg-[#00b5ad]" }}
                    // label="hello"
                  />
                </div>
              </TableCell>
              <TableCell>04/25/2024</TableCell>
              <TableCell>07:00 pm</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">$3,750</p>
                  <p className="text-xs text-gray-500">$250.00 / LD</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">240035-02-001</p>
                  <p className="text-xs text-gray-500"></p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">Scotiabank Arena</p>
                  <p className="text-xs text-gray-500">
                    178 NW 43rd St, Miami, FL 33166
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500">Yesterday, 09:43pm</p>
              </TableCell>
              <TableCell>
                <Chip color="success" variant="flat" size="sm">
                  Completed
                </Chip>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="text-center font-medium mb-1 text-xs">
                    80/80 CY
                  </p>
                  <Progress
                    size="sm"
                    aria-label="Loading..."
                    value={100}
                    className=""
                    color="default"
                    // classNames={{ indicator: "bg-[#00b5ad]" }}
                    // label="hello"
                  />
                </div>
              </TableCell>
              <TableCell>04/25/2024</TableCell>
              <TableCell>07:00 pm</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="font-semibold">$4,000</p>
                  <p className="text-xs text-gray-500">$50.00 / CY</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Page;
