"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Chip,
  Divider,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Select,
  SelectItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
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
    LD: 30,
    CY: 17,
    TN: 12,
    HR: 1,
  },
  {
    name: "01/02/2024",
    LD: 25,
    CY: 18,
    TN: 14,
    HR: 2,
  },
  {
    name: "01/03/2024",
    LD: 28,
    CY: 19,
    TN: 11,
    HR: 3,
  },
  {
    name: "01/04/2024",
    LD: 26,
    CY: 16,
    TN: 13,
    HR: 4,
  },
  {
    name: "01/05/2024",
    LD: 29,
    CY: 15,
    TN: 12,
    HR: 2,
  },
  {
    name: "01/06/2024",
    LD: 27,
    CY: 14,
    TN: 13,
    HR: 1,
  },
  {
    name: "01/07/2024",
    LD: 32,
    CY: 18,
    TN: 10,
    HR: 3,
  },
  {
    name: "01/08/2024",
    LD: 24,
    CY: 19,
    TN: 15,
    HR: 2,
  },
  {
    name: "01/09/2024",
    LD: 31,
    CY: 17,
    TN: 11,
    HR: 4,
  },
  {
    name: "01/10/2024",
    LD: 30,
    CY: 16,
    TN: 14,
    HR: 1,
  },
  {
    name: "01/11/2024",
    LD: 28,
    CY: 15,
    TN: 12,
    HR: 3,
  },
  {
    name: "01/12/2024",
    LD: 27,
    CY: 18,
    TN: 13,
    HR: 2,
  },
  {
    name: "01/13/2024",
    LD: 29,
    CY: 19,
    TN: 14,
    HR: 1,
  },
  {
    name: "01/14/2024",
    LD: 25,
    CY: 17,
    TN: 15,
    HR: 3,
  },
  {
    name: "01/15/2024",
    LD: 26,
    CY: 16,
    TN: 12,
    HR: 4,
  },
  {
    name: "01/16/2024",
    LD: 32,
    CY: 14,
    TN: 13,
    HR: 2,
  },
  {
    name: "01/17/2024",
    LD: 24,
    CY: 15,
    TN: 11,
    HR: 3,
  },
];

const data2 = [
  {
    name: "01/01/2024",
    "#1 STONE BLEND": 30,
    "FILL CONCRETE": 17,
    ASPHALT: 12,
    "57 ROCK": 1,
  },
  {
    name: "01/02/2024",
    "#1 STONE BLEND": 27,
    "FILL CONCRETE": 19,
    ASPHALT: 11,
    "57 ROCK": 4,
  },
  {
    name: "01/03/2024",
    "#1 STONE BLEND": 25,
    "FILL CONCRETE": 16,
    ASPHALT: 10,
    "57 ROCK": 2,
  },
  {
    name: "01/04/2024",
    "#1 STONE BLEND": 29,
    "FILL CONCRETE": 15,
    ASPHALT: 14,
    "57 ROCK": 3,
  },
  {
    name: "01/05/2024",
    "#1 STONE BLEND": 26,
    "FILL CONCRETE": 18,
    ASPHALT: 12,
    "57 ROCK": 1,
  },
  {
    name: "01/06/2024",
    "#1 STONE BLEND": 24,
    "FILL CONCRETE": 17,
    ASPHALT: 11,
    "57 ROCK": 4,
  },
  {
    name: "01/07/2024",
    "#1 STONE BLEND": 28,
    "FILL CONCRETE": 16,
    ASPHALT: 15,
    "57 ROCK": 2,
  },
  {
    name: "01/08/2024",
    "#1 STONE BLEND": 31,
    "FILL CONCRETE": 14,
    ASPHALT: 13,
    "57 ROCK": 3,
  },
  {
    name: "01/09/2024",
    "#1 STONE BLEND": 25,
    "FILL CONCRETE": 15,
    ASPHALT: 12,
    "57 ROCK": 1,
  },
  {
    name: "01/10/2024",
    "#1 STONE BLEND": 27,
    "FILL CONCRETE": 18,
    ASPHALT: 10,
    "57 ROCK": 2,
  },
  {
    name: "01/11/2024",
    "#1 STONE BLEND": 29,
    "FILL CONCRETE": 17,
    ASPHALT: 14,
    "57 ROCK": 4,
  },
  {
    name: "01/12/2024",
    "#1 STONE BLEND": 24,
    "FILL CONCRETE": 16,
    ASPHALT: 11,
    "57 ROCK": 3,
  },
  {
    name: "01/13/2024",
    "#1 STONE BLEND": 26,
    "FILL CONCRETE": 14,
    ASPHALT: 15,
    "57 ROCK": 2,
  },
  {
    name: "01/14/2024",
    "#1 STONE BLEND": 30,
    "FILL CONCRETE": 19,
    ASPHALT: 13,
    "57 ROCK": 1,
  },
  {
    name: "01/15/2024",
    "#1 STONE BLEND": 28,
    "FILL CONCRETE": 17,
    ASPHALT: 12,
    "57 ROCK": 4,
  },
  {
    name: "01/16/2024",
    "#1 STONE BLEND": 27,
    "FILL CONCRETE": 16,
    ASPHALT: 10,
    "57 ROCK": 3,
  },
  {
    name: "01/17/2024",
    "#1 STONE BLEND": 25,
    "FILL CONCRETE": 18,
    ASPHALT: 11,
    "57 ROCK": 2,
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
  const [selected, setSelected] = React.useState(["LD", "TN", "CY", "HR"]);
  const [selected2, setSelected2] = React.useState([
    "#1 STONE BLEND",
    "FILL CONCRETE",
    "ASPHALT",
    "57 ROCK",
  ]);
  const [selectedTab, setSelectedTab] = React.useState("Unit");
  const [selectedTable, setSelectedTable] = React.useState("jobs");
  const [selectedGraph, setSelectedGraph] = React.useState("unit");

  return (
    <div className="min-h-screen bg-neutral-100 text-foreground flex">
      <div className="w-72 bg-slate-200"></div>
      <div className="p-12 px-20 w-full">
        <p className="text-xl">Welcome, Triden Construction!</p>
        <div className="flex flex-row justify-between items-center mt-10">
          <p className="text-lg font-medium">Order Summary</p>
          <div className="flex flex-row gap-4">
            <Input
              size="sm"
              variant="flat"
              placeholder="Filter By Job"
              color="success"
              className="min-w-44"
            />
            <Select
              color="success"
              size="sm"
              variant="flat"
              defaultSelectedKeys={["This Week"]}
              className=" min-w-32 max-w-xs light"
            >
              <SelectItem key="Today">Today</SelectItem>
              <SelectItem key="This Week">This Week</SelectItem>
              <SelectItem key="This Month">This Month</SelectItem>
              <SelectItem key="All Time">All Time</SelectItem>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-5">
          <div className="grid grid-cols-2 col-span-2 gap-4">
            <Card className="col-span-1 py-5 px-6">
              <div className="flex flex-row justify-between items-center mb-3">
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium mb-2">Active jobs</p>
                  <p className="text-3xl mb-2 font-medium">1</p>
                </div>
                <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mb-2">
                  <FaTruckMoving size={30} className="text-[#00b5ad]" />
                </div>
              </div>
              <p className="text-green-500 font-medium text-sm w-full">
                ^ 10% more than last month
              </p>
            </Card>
            <Card className="col-span-1 py-5 px-6">
              <div className="flex flex-row justify-between items-center mb-3">
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium mb-2">
                    Running orders
                  </p>
                  <p className="text-3xl mb-2 font-medium">4</p>
                </div>
                <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mb-2">
                  <FaTruckMoving size={30} className="text-[#00b5ad]" />
                </div>
              </div>
              <p className="text-green-500 font-medium text-sm w-full">
                ^ 10% more than last month
              </p>
            </Card>
            <Card className="col-span-1 py-5 px-6">
              <div className="flex flex-row justify-between items-center mb-3">
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium mb-2">
                    Dispatched trucks
                  </p>
                  <p className="text-3xl mb-2 font-medium">12</p>
                </div>
                <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mb-2">
                  <FaTruckMoving size={30} className="text-[#00b5ad]" />
                </div>
              </div>
              <p className="text-green-500 font-medium text-sm w-full">
                ^ 10% more than last month
              </p>
            </Card>
            <Card className="col-span-1 py-5 px-6">
              <div className="flex flex-row justify-between items-center mb-3">
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium mb-2">
                    Tickets Completed
                  </p>
                  <p className="text-3xl mb-2 font-medium">458</p>
                </div>
                <div className="bg-[#00b5ad]/20 rounded-full w-14 h-14 p-3 flex items-center justify-center mb-2">
                  <FaTruckMoving size={30} className="text-[#00b5ad]" />
                </div>
              </div>
              <p className="text-green-500 font-medium text-sm w-full">
                ^ 10% more than last month
              </p>
            </Card>
            <Card className="col-span-2 py-5 px-6">
              <div className="flex flex-col">
                <p className="text-gray-500 font-medium mb-5">
                  Delivered Quantities
                </p>
                <div className="grid grid-cols-2 gap-8">
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

          <Card className="col-span-3 py-5 px-6">
            <div className="flex justify-between items-center mb-5">
              <div className="flex flex-row">
                <p className="text-2xl font-light mr-6">Completed Tickets</p>
                <Tabs
                  size="sm"
                  aria-label="Options"
                  color="default"
                  variant="underlined"
                  selectedKey={selectedGraph}
                  onSelectionChange={setSelectedGraph}
                  classNames={{ cursor: "bg-[#004751]" }}
                >
                  <Tab key="unit" title="By Unit"></Tab>
                  <Tab key="material" title="By Material"></Tab>
                </Tabs>
              </div>
              {selectedGraph === "unit" && (
                <Popover placement="bottom" showArrow={true} size="sm">
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className="mt-1 min-w-0"
                      size="sm"
                      // color="primary"
                    >
                      Unit Type
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <CheckboxGroup
                        label={<p className="text-sm">Select Unit Types</p>}
                        // defaultValue={["LD", "TN", "CY", "HR"]}
                        size="sm"
                        value={selected}
                        onValueChange={setSelected}
                      >
                        <Checkbox value="LD">LD</Checkbox>
                        <Checkbox value="TN">TN</Checkbox>
                        <Checkbox value="CY">CY</Checkbox>
                        <Checkbox value="HR">HR</Checkbox>
                      </CheckboxGroup>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
              {selectedGraph === "material" && (
                <Popover placement="bottom" showArrow={true} size="sm">
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className="mt-1 min-w-0"
                      size="sm"
                      // color="primary"
                    >
                      Material Type
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <CheckboxGroup
                        label={<p className="text-sm">Select Material Types</p>}
                        // defaultValue={["LD", "TN", "CY", "HR"]}
                        size="sm"
                        value={selected2}
                        onValueChange={setSelected2}
                      >
                        <Checkbox value="#1 STONE BLEND">#1 STONE BLEND</Checkbox>
                        <Checkbox value="FILL CONCRETE">FILL CONCRETE</Checkbox>
                        <Checkbox value="ASPHALT">ASPHALT</Checkbox>
                        <Checkbox value="57 ROCK">57 ROCK</Checkbox>
                      </CheckboxGroup>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>

            <div className="w-full h-full border rounded-lg pb-2 pt-8 pr-8">
              <ResponsiveContainer width="100%" height="100%">
                {selectedGraph === "unit" && (
                  <BarChart data={data} barGap={2}>
                    <CartesianGrid stroke="#e6e6e6" vertical={false} />
                    <XAxis
                      dataKey="name"
                      // angle={-30}
                      tick={{ fontSize: 14 }}
                      tickMargin={12}
                      tickSize={10}
                      height={50}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {selected.includes("LD") && (
                      <Bar dataKey="LD" stackId="a" fill="#004751" />
                    )}
                    {selected.includes("TN") && (
                      <Bar dataKey="TN" stackId="a" fill="#8884d8" />
                    )}
                    {selected.includes("CY") && (
                      <Bar dataKey="CY" stackId="a" fill="#82ca9d" />
                    )}
                    {selected.includes("HR") && (
                      <Bar dataKey="HR" stackId="a" fill="#ffc658" />
                    )}
                  </BarChart>
                )}
                {selectedGraph === "material" && (
                  <BarChart data={data2} barGap={2}>
                    <CartesianGrid stroke="#e6e6e6" vertical={false} />
                    <XAxis
                      dataKey="name"
                      // angle={-30}
                      tick={{ fontSize: 14 }}
                      tickMargin={12}
                      tickSize={10}
                      height={50}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {selected2.includes("#1 STONE BLEND") && (
                      <Bar
                        dataKey="#1 STONE BLEND"
                        stackId="a"
                        fill="#004751"
                      />
                    )}
                    {selected2.includes("FILL CONCRETE") && (
                      <Bar dataKey="FILL CONCRETE" stackId="a" fill="#8884d8" />
                    )}
                    {selected2.includes("ASPHALT") && (
                      <Bar dataKey="ASPHALT" stackId="a" fill="#82ca9d" />
                    )}
                    {selected2.includes("57 ROCK") && (
                      <Bar dataKey="57 ROCK" stackId="a" fill="#ffc658" />
                    )}
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="flex flex-row justify-between items-end mt-10">
          <Tabs
            size="md"
            aria-label="Options"
            color="primary"
            variant="solid"
            selectedKey={selectedTable}
            onSelectionChange={setSelectedTable}
            classNames={{ cursor: "bg-[#004751]" }}
          >
            <Tab key="jobs" title="Jobs"></Tab>
            <Tab key="quotes" title="Quotes"></Tab>
            <Tab key="orders" title="Orders"></Tab>
          </Tabs>
          <Button size="sm" color="default" variant="bordered" className="mb-1">
            Create New Order +
          </Button>
        </div>
        {selectedTable === "jobs" && (
          <Table
            fullWidth
            //   isCompact
            //   removeWrapper
            color="success"
            aria-label="Example table with dynamic content"
            className="mt-2"
            // classNames={{ th: "bg-[#00b5ad]/20" }}
          >
            <TableHeader>
              <TableColumn>Job ID</TableColumn>
              <TableColumn>Job name</TableColumn>
              <TableColumn>Start Date</TableColumn>
              <TableColumn>Last Ticket Date</TableColumn>
              <TableColumn>Completed Tickets</TableColumn>
              <TableColumn>Estimated Cost</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold mb-1">240005</p>
                    {/* <p className="text-xs text-gray-500"></p> */}
                    <div className="flex items-center justify-center bg-green-200 text-green-600 text-[10px] leading-3 rounded-full w-min py-0.5 px-2 pb-1">
                      Enabled
                    </div>
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
                  <p className="text-gray-500">04/25/2024</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500">Today, 12:43pm</p>
                </TableCell>
                <TableCell>
                  <div className="min-w-40 border rounded-xl">
                    <Accordion fullWidth isCompact>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title={
                          <p className="text-sm font-medium">204 Tickets</p>
                        }
                      >
                        <div className="flex flex-col pl-3 pb-4">
                          <Tabs
                            size="sm"
                            aria-label="Options"
                            variant="underlined"
                            selectedKey={selectedTab}
                            onSelectionChange={setSelectedTab}
                          >
                            <Tab key="Unit" title="Unit"></Tab>
                            <Tab key="Material" title="Material"></Tab>
                          </Tabs>
                          {selectedTab === "Unit" && (
                            <div className="flex flex-col mt-4">
                              <div className="grid grid-cols-2">
                                <p className="">255</p>
                                <p className="text-gray-500">LD</p>
                                <p>6,786</p>
                                <p className="text-gray-500">CY</p>
                                <p>12,123</p>
                                <p className="text-gray-500">TN</p>
                                <p>12</p>
                                <p className="text-gray-500">HR</p>
                              </div>
                            </div>
                          )}
                          {selectedTab === "Material" && (
                            <div className="flex flex-col mt-4">
                              <div className="grid grid-cols-2">
                                <p className="">Limerock</p>
                                <p className="text-gray-500">17,892 TN</p>
                                <p></p>
                                <p className="text-gray-500">4,600 CY</p>
                                <p></p>
                                <p className="mb-2 text-gray-500">13:00 HR</p>
                                <Divider />
                                <Divider />
                                <p className="mt-2">Fill</p>
                                <p className="text-gray-500 mt-2">650 LD</p>
                                <p></p>
                                <p className="text-gray-500">2,250 CY</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">$3,500</p>
                    {/* <p className="text-xs text-gray-500">$250.00 / LD</p> */}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold mb-1">240007</p>
                    {/* <p className="text-xs text-gray-500"></p> */}
                    <div className="flex items-center justify-center bg-green-200 text-green-600 text-[10px] leading-3 rounded-full w-min py-0.5 px-2 pb-1">
                      Enabled
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">Scotiabank Arena</p>
                    <p className="text-xs text-gray-500">
                      8350 Northwest 52nd Terrace, Miami, FL 33166
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-gray-500">04/25/2024</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500">Today, 12:43pm</p>
                </TableCell>
                <TableCell>
                  <div className="min-w-40 border rounded-xl">
                    <Accordion fullWidth isCompact>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title={
                          <p className="text-sm font-medium">432 Tickets</p>
                        }
                      >
                        <div className="flex flex-col pl-3 pb-4">
                          <Tabs
                            size="sm"
                            aria-label="Options"
                            variant="underlined"
                            selectedKey={selectedTab}
                            onSelectionChange={setSelectedTab}
                          >
                            <Tab key="Unit" title="Unit"></Tab>
                            <Tab key="Material" title="Material"></Tab>
                          </Tabs>
                          {selectedTab === "Unit" && (
                            <div className="flex flex-col mt-4">
                              <div className="grid grid-cols-2">
                                <p className="">255</p>
                                <p>LD</p>
                                <p>6,786</p>
                                <p>CY</p>
                                <p>12,123</p>
                                <p>TN</p>
                                <p>12</p>
                                <p>HR</p>
                              </div>
                            </div>
                          )}
                          {selectedTab === "Material" && (
                            <div className="flex flex-col mt-4">
                              <div className="grid grid-cols-2">
                                <p>Limerock</p>
                                <p>17,892 TN</p>
                                <p>Fill</p>
                                <p>650 LD</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">$3,500</p>
                    {/* <p className="text-xs text-gray-500">$250.00 / LD</p> */}
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold mb-1">240008</p>
                    {/* <p className="text-xs text-gray-500"></p> */}
                    <div className="flex items-center justify-center bg-green-200 text-green-600 text-[10px] leading-3 rounded-full w-min py-0.5 px-2 pb-1">
                      Enabled
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">Tesla</p>
                    <p className="text-xs text-gray-500">
                      8350 Northwest 52nd Terrace, Miami, FL 33166
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-gray-500">04/25/2024</p>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-500">Today, 12:43pm</p>
                </TableCell>
                <TableCell>
                  <div className="min-w-40 border rounded-xl">
                    <Accordion fullWidth isCompact>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title={
                          <p className="text-sm font-medium">138 Tickets</p>
                        }
                      >
                        <div className="flex flex-col pl-3 pb-4">
                          <Tabs
                            size="sm"
                            aria-label="Options"
                            variant="underlined"
                            selectedKey={selectedTab}
                            onSelectionChange={setSelectedTab}
                          >
                            <Tab key="Unit" title="Unit"></Tab>
                            <Tab key="Material" title="Material"></Tab>
                          </Tabs>
                          {selectedTab === "Unit" && (
                            <div className="flex flex-col mt-4">
                              <div className="grid grid-cols-2">
                                <p className="">255</p>
                                <p>LD</p>
                                <p>6,786</p>
                                <p>CY</p>
                                <p>12,123</p>
                                <p>TN</p>
                                <p>12</p>
                                <p>HR</p>
                              </div>
                            </div>
                          )}
                          {selectedTab === "Material" && (
                            <div className="flex flex-col mt-4">
                              <div className="grid grid-cols-2">
                                <p>Limerock</p>
                                <p>17,892 TN</p>
                                <p>Fill</p>
                                <p>650 LD</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">$3,500</p>
                    {/* <p className="text-xs text-gray-500">$250.00 / LD</p> */}
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        {selectedTable === "quotes" && (
          <Table
            fullWidth
            // isCompact
            //   removeWrapper
            color="success"
            aria-label="Example table with dynamic content"
            className="mt-2"
          >
            <TableHeader>
              <TableColumn>Quote ID</TableColumn>
              <TableColumn>Addresses</TableColumn>
              <TableColumn>First Ticket Date</TableColumn>
              <TableColumn>Material</TableColumn>
              <TableColumn>Today&apos;s Progress</TableColumn>
              <TableColumn>Total Quantity Delivered</TableColumn>
              <TableColumn>Total Estimated Cost</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">061</p>
                    <p className="text-xs text-gray-500 -mb-1">240005</p>
                    <p className="text-[10px] text-gray-500">Venture X Miami</p>
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
                  <p className="text-sm text-gray-500">06/17/2024</p>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">Crushed Limerock</p>
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
                  </div>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">214 LDs</p>
                </TableCell>
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
                    <p className="font-semibold">061</p>
                    <p className="text-xs text-gray-500 -mb-1">240005</p>
                    <p className="text-[10px] text-gray-500">Venture X Miami</p>
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
                  <p className="text-sm text-gray-500">06/17/2024</p>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">Crushed Limerock</p>
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
                  </div>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">87 LDs</p>
                </TableCell>
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
                    <p className="font-semibold">061</p>
                    <p className="text-xs text-gray-500 -mb-1">240005</p>
                    <p className="text-[10px] text-gray-500">Venture X Miami</p>
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
                  <p className="text-sm text-gray-500">06/17/2024</p>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">Crushed Limerock</p>
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
                  </div>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">350 LDs</p>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">$3,500</p>
                    <p className="text-xs text-gray-500">$250.00 / LD</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        {selectedTable === "orders" && (
          <Table
            fullWidth
            // isCompact
            //   removeWrapper
            color="success"
            aria-label="Example table with dynamic content"
            className="mt-2"
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
                    <p className="text-xs text-gray-500 -mb-1">240005-061</p>
                    <p className="text-[10px] text-gray-500">Venture X Miami</p>
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
                      Crushed Limerock
                    </p>
                  </div>
                </TableCell>
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
                    <p className="text-xs text-gray-500 -mb-1">240005-062</p>
                    <p className="text-[10px] text-gray-500">Venture X Miami</p>
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
                      120/164 TN
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
                    <p className="font-semibold">$4,600</p>
                    <p className="text-xs text-gray-500">$80.00 / TN</p>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <div className="flex flex-col">
                    <p className="font-semibold">001</p>
                    <p className="text-xs text-gray-500 -mb-1">240005-062</p>
                    <p className="text-[10px] text-gray-500">Venture X Miami</p>
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
                      2000/2000 TN
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
                    <p className="font-semibold">$3,850</p>
                    <p className="text-xs text-gray-500">$75.00 / TN</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
        <div className="grid grid-cols-5 gap-4 mt-8">
          <Card className="py-4 px-6 h-[420px] col-span-3">
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
          <Card className="py-5 px-6 col-span-2">
            <p className="text-2xl font-thin mb-5">Materials Used</p>
            <div className="w-full h-80 border rounded-lg pl-2 pb-2 pt-8 pr-8">
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
      </div>
    </div>
  );
};

export default Page;
