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
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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

const dataPie = [
  {
    name: "#1 STONE BLEND",
    value: 35,
  },
  {
    name: "CRUSHED LIMEROCK",
    value: 30,
  },
  {
    name: "DIRT FILL",
    value: 20,
  },
  {
    name: "CONCRETE FILL",
    value: 15,
  },
];

const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
        <div className="grid grid-cols-5 gap-4 mt-5">
          <Card className="col-span-1 py-5 px-6">
            <div className="flex flex-row">
              <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mr-5">
                <FaTruckMoving size={30} className="text-[#00b5ad]" />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500 font-medium mb-2">Running orders</p>
                <p className="text-3xl mb-2 font-medium">1</p>
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
                  Trucks In Transit
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
                  Trucks In Transit
                </p>
                <p className="text-3xl mb-2 font-medium">4</p>
                <p className="text-red-500 font-medium text-sm">
                  &lt; 50% less than last month
                </p>
              </div>
            </div>
          </Card>
          <Card className="col-span-2 py-5 px-6">
            <div className="flex flex-col">
              <p className="text-gray-500 font-medium mb-5">
                Delivered Quantities
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 flex flex-col">
                  <div className="w-full bg-[#00b5ad] h-1 mb-2 rounded-lg"></div>
                  <p className="text-lg text-gray-500 font-medium mb-1">
                    Loads
                  </p>
                  <p className="text-3xl">48</p>
                </div>
                <div className="col-span-1 flex flex-col">
                  <div className="w-full bg-[#00b5ad]/75 h-1 mb-2 rounded-lg"></div>
                  <p className="text-lg text-gray-500 font-medium mb-1">Tons</p>
                  <p className="text-3xl">22.80</p>
                </div>
                <div className="col-span-1 flex flex-col">
                  <div className="w-full bg-[#00b5ad]/50 h-1 mb-2 rounded-lg"></div>
                  <p className="text-lg text-gray-500 font-medium mb-1">
                    Cubic Yards
                  </p>
                  <p className="text-3xl">18.43</p>
                </div>
                {/* <div className="col-span-1 flex flex-col">
                  <div className="w-full bg-[#00b5ad]/25 h-1 mb-2 rounded-lg"></div>
                  <p className="text-lg text-gray-500 font-medium mb-1">
                    Hours
                  </p>
                  <p className="text-3xl">0:00</p>
                </div> */}
              </div>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <Card className="col-span-1 py-5 px-6">
            <p className="text-2xl font-thin mb-5">
              Completed Trips
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
          <Card className="col-span-1 py-5 px-6">
            <p className="text-2xl font-thin mb-5">
              Materials Used
            </p>
            <div className="w-full h-96 border rounded-lg pl-2 pb-2 pt-8 pr-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={pieColors[index % pieColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
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
                <div className="flex flex-col mr-4">
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
                  <p className="font-semibold">002</p>
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
                <div className="flex flex-col mr-4">
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
                  <p className="font-semibold">001</p>
                  <p className="text-xs text-gray-500">240029-01</p>
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
                <div className="flex flex-col mr-4">
                  <p className="text-center font-medium mb-1 text-xs">
                    15/15 CY
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
                  <p className="text-xs text-gray-500">$250.00 / CY</p>
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
