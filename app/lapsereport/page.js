"use client";
import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  Chip,
  DateRangePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Skeleton,
  Slider,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { BiSolidFileExport } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Shell from "../components/Shell";
import Image from "next/image";
import { FaFileExport } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
  getKeyValue,
  Switch,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { EyeIcon } from "../drivers/EyeIcon";
import { DeleteIcon } from "../drivers/DeleteIcon";
import { EditIcon } from "../drivers/EditIcon";
import { GoUpload } from "react-icons/go";
import { columns, users } from "../drivers/data";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as Tooltipp,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { VscRunAll } from "react-icons/vsc";
import CalendarHeatmap from "../components/CalendarHeatmap";
import CountUp from "react-countup";
import { MdOutlineLibraryBooks } from "react-icons/md";
import InfoIcon from "../components/InfoIcon";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

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
  {
    name: "01/18/2024",
    Driver: 4,
    Truck: 8,
    Total: 12,
    TotalPercent: 84,
  },
  {
    name: "01/19/2024",
    Driver: 2,
    Truck: 12,
    Total: 14,
    TotalPercent: 81,
  },
  {
    name: "01/20/2024",
    Driver: 7,
    Truck: 8,
    Total: 15,
    TotalPercent: 79,
  },
  {
    name: "01/21/2024",
    Driver: 12,
    Truck: 17,
    Total: 29,
    TotalPercent: 78,
  },
];

const dataGantt = [
  {
    document: "Drivers License",
    period1_start: 2,
    period1_end: 5,
    period2_start: 4,
    period2_end: 5,
  },
  { document: "Medical Certificate", period1_start: 1, period1_end: 4 },
  {
    document: "Annual MVR",
    period1_start: 3,
    period1_end: 6,
    period2_start: 3,
    period2_end: 5,
  },
];

const dataPie = [
  {
    name: "Out of Compliance",
    value: 42,
  },
  {
    name: "In Compliance",
    value: 48,
  },
];

const dataRadial = [
  {
    name: "Drivers License",
    uv: 42,
    fill: "#8884d8",
  },
  {
    name: "Medical Certificate",
    uv: 32,
    fill: "#8dd1e1",
  },
  {
    name: "Annual MVR",
    uv: 27,
    fill: "#83a6ed",
  },
  {
    name: "Truck Registration",
    uv: 18,
    fill: "#82ca9d",
  },
  {
    name: "Annual Inspection",
    uv: 9,
    fill: "#a4de6c",
  },
  {
    name: "Liability Document",
    uv: 2,
    fill: "#d0ed57",
  },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    const driverValue = payload.find((p) => p.name === "Driver")?.value || 0;
    const truckValue = payload.find((p) => p.name === "Truck")?.value || 0;
    const totalValue = driverValue + truckValue;

    return (
      <div
        className="custom-tooltip text-tiny"
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p className="label font-semibold">{label}</p>
        <p>{`Driver: ${driverValue}`}</p>
        <p>{`Truck: ${truckValue}`}</p>
        <p>{`Total: ${totalValue}`}</p>
      </div>
    );
  }

  return null;
};

// Custom tooltip component
const CustomTooltip2 = ({ active, payload, label }) => {
  if (active && payload && payload.length > 0) {
    const driverValue =
      payload.find((p) => p.name === "TotalPercent")?.value || 0;

    return (
      <div
        className="custom-tooltip text-tiny"
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p className="label font-semibold">{label}</p>
        <p>{`${driverValue}%`}</p>
      </div>
    );
  }

  return null;
};

const addPercentSymbol = (value) => `${value}%`;

const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Page = () => {
  const [selected, setSelected] = React.useState("TD");
  const [selected2, setSelected2] = React.useState("total");
  const [selected3, setSelected3] = React.useState("total");
  const [selected4, setSelected4] = React.useState("TD");
  const [selected5, setSelected5] = React.useState("documents");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "id":
        return <p>{cellValue}</p>;
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            <p className="text-xs">{cellValue}</p>
          </Chip>
          //   <Switch defaultSelected size="sm" className="h-1" />
        );
      case "expired":
        return (
          <div className="flex items-center">
            <div
              className={`h-2 w-2 mr-2 rounded-full ${
                cellValue ? "bg-red-500" : "bg-green-500"
              }`}
            ></div>
            <p
              className={`text-xs ${
                cellValue ? "text-red-500" : "text-green-500"
              }`}
            >
              {cellValue ? "Out of Compliance" : "Compliant"}
            </p>
            {cellValue}
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details" className="text-default-900">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => onOpen()}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user" className="text-default-900">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="primary" content="Notify Driver">
              <span className="text-lg text-blue-500/90 cursor-pointer active:opacity-50">
                <MdEmail />
              </span>
            </Tooltip>
          </div>
        );
      case "percentcompliance":
        return (
          <div className="relative flex items-center gap-2">{cellValue}%</div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Shell>
      <div className="flex flex-col pt-10 w-[94%] mx-auto text-black">
        <div className="flex flex-row justify-between items-center mb-10">
          <p className="text-blue-950 font-bold text-2xl">Lapse Report</p>
          <div className="flex flex-row items-center gap-4 mr-20">
            <Button
              className="h-10 rounded-xl text-sm text-foreground-500 px-11 font-medium"
              startContent={
                <MdOutlineLibraryBooks size={20} className="w-4 shrink-0" />
              }
              variant="bordered"
            >
              Previous Reports
            </Button>
            <DateRangePicker
              className="max-w-lg font-medium"
              visibleMonths={2}
            />
            <Button
              color="success"
              className="text-white font-semibold min-w-0 px-6"
              startContent={
                <VscRunAll size={20} className="w-4 h-4 shrink-0" />
              }
            >
              Run
            </Button>
            <Button
              className="h-10 rounded-xl text-sm text-foreground-500 px-7 font-medium"
              startContent={
                <BiSolidFileExport size={20} className="w-4 shrink-0" />
              }
              variant="flat"
            >
              Export
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="border rounded-xl flex flex-col p-6">
            <Image
              src={"/optimuslogo.png"}
              width={500}
              height={500}
              alt="icon"
              className="w-fit pl-2 h-16 rounded-lg mb-4 bg-blue-600/20"
            />
            <div className="flex flex-row justify-between items-center mb-2">
              <p className="text-blue-600 font-medium text-3xl font-mono">
                <CountUp end={82} />%
              </p>
              <Chip color="success" variant="flat" className="" size="sm">
                <p className="px-1 font-sans text-sm">Good</p>
              </Chip>
            </div>
            <div className="flex flex-row items-center">
              <p className="text-base text-blue-600 font-medium tracking-tight mr-6">
                Optimus Compliance Score
              </p>
              <Tooltip
                color="primary"
                content="This is your compliance score that we determine based on your stats."
                className="max-w-[15rem] text-center text-tiny"
              >
                <div>
                  <InfoIcon className={"w-4 h-4 text-gray-400"} />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="border rounded-xl flex flex-col p-6">
            <div className="flex flex-row items-center mb-4">
              <Image
                src={"/icon1.png"}
                width={500}
                height={500}
                alt="icon"
                className="w-16 h-16 rounded-lg bg-indigo-600"
              />
              <p className="text-2xl text-indigo-700 font-bold ml-10 tracking-wider">
                Documents
              </p>
            </div>
            <div className="flex flex-row justify-between items-center mb-2">
              <p className="text-indigo-700 font-medium text-3xl font-mono">
                <CountUp end={87.96} />%
              </p>
              <p className="text-lg text-foreground-600 font-medium tracking-tight mr-5">
                in Compliance
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-indigo-700 font-medium text-xl font-mono">
                <CountUp end={467} />
              </p>
              <p className="text-sm text-foreground-600 font-medium tracking-tight mr-5">
                Documents out of Compliance
              </p>
            </div>
          </div>
          <div className="border rounded-xl flex flex-col p-6">
            <div className="flex flex-row items-center mb-4">
              <Image
                src={"/icon1.png"}
                width={500}
                height={500}
                alt="icon"
                className="w-16 h-16 rounded-lg bg-green-600 hue-rotate-180 brightness-200"
              />
              <p className="text-2xl text-green-600 font-bold ml-10 tracking-wider">
                Units
              </p>
            </div>
            <div className="flex flex-row justify-between items-center mb-2">
              <p className="text-green-600 font-medium text-3xl font-mono">
                <CountUp end={85.74} />%
              </p>
              <p className="text-lg text-foreground-600 font-medium tracking-tight mr-5">
                in Compliance
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-green-600 font-medium text-xl font-mono">
                <CountUp end={216} />
              </p>
              <p className="text-sm text-foreground-600 font-medium tracking-tight mr-5">
                Units out of Compliance
              </p>
            </div>
          </div>
          <div className="border rounded-xl flex flex-col p-6">
            <div className="flex flex-row items-center mb-4">
              <Image
                src={"/icon1.png"}
                width={500}
                height={500}
                alt="icon"
                className="w-16 h-16 rounded-lg bg-orange-600 hue-rotate-60 brightness-200"
              />
              <p className="text-2xl text-red-600 font-bold ml-10 tracking-wider">
                Days
              </p>
            </div>
            <div className="flex flex-row justify-between items-center mb-2">
              <p className="text-red-600 font-medium text-3xl font-mono">
                <CountUp end={55.81} />%
              </p>
              <p className="text-lg text-foreground-600 font-medium tracking-tight mr-5">
                in Compliance
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-red-600 font-medium text-xl font-mono">
                <CountUp end={42} />
              </p>
              <p className="text-sm text-foreground-600 font-medium tracking-tight mr-5">
                Days out of Compliance
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row mb-10 gap-6">
          <div className="w-1/2 flex flex-col">
            <p className="mb-4 text-xl font-bold text-blue-950">
              Documents out of Compliance
            </p>
            <div className="flex flex-row items-end mb-2 gap-4">
              <div className="w-full border rounded-lg px-6 py-4 text-sm">
                <p>Total number of documents out of compliance: </p>
                <div className="flex flex-row">
                  <span className="font-semibold text-lg w-56">467/3880</span>
                  <span className="font-semibold text-lg">12.04%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <Tabs
                  size="sm"
                  aria-label="Options"
                  selectedKey={selected}
                  onSelectionChange={setSelected}
                >
                  <Tab key="total" title="Total"></Tab>
                  <Tab key="TD" title="Segmented"></Tab>
                </Tabs>
                <Popover placement="bottom" showArrow={true} size="sm">
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className="mt-1 min-w-0"
                      size="sm"
                      // color="primary"
                    >
                      Document Type
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <CheckboxGroup
                        label={<p className="text-sm">Select Document Types</p>}
                        defaultValue={[
                          "license",
                          "mvr",
                          "medical",
                          "reg",
                          "inspection",
                          "liability",
                        ]}
                        size="sm"
                      >
                        <Checkbox value="license">Drivers License</Checkbox>
                        <Checkbox value="mvr">Annual MVR</Checkbox>
                        <Checkbox value="medical">Medical Certificate</Checkbox>
                        <Checkbox value="reg">Truck Registration</Checkbox>
                        <Checkbox value="inspection">
                          Annual Inspection
                        </Checkbox>
                        <Checkbox value="liability">Liability Proof</Checkbox>
                      </CheckboxGroup>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <Card className="w-full h-96 border rounded-xl p-8">
              <Skeleton className="rounded-xl">
                <div className="w-full h-64" >
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
                      <Tooltipp content={<CustomTooltip />} />
                      {/* {isSelected && <Bar dataKey="Driver" fill="#ff8403" />}
                  {isSelected && <Bar dataKey="Truck" fill="#82ca9d" />} */}
                      {selected === "total" && (
                        <Bar dataKey="Total" fill="#0060ff" />
                      )}
                      {selected === "TD" && (
                        <>
                          <Bar
                            dataKey="Driver"
                            stackId="total"
                            fill="#ff8403"
                          />
                          <Bar dataKey="Truck" stackId="total" fill="#82ca9d" />
                        </>
                      )}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Skeleton>
            </Card>
          </div>
          <div className="w-1/2 flex flex-col">
            <p className="mb-4 text-xl font-bold text-blue-950">
              Documents in Compliance
            </p>
            <div className="flex flex-row items-end mb-2 gap-4">
              <div className="w-full border rounded-lg px-6 py-4 text-sm">
                <p>Total number of documents in compliance: </p>
                <div className="flex flex-row">
                  <span className="font-semibold text-lg w-56">3413/3880</span>
                  <span className="font-semibold text-lg ">87.96%</span>
                </div>
              </div>

              <div className="flex flex-col">
                <Tabs
                  size="sm"
                  aria-label="Options"
                  selectedKey={selected2}
                  onSelectionChange={setSelected2}
                >
                  <Tab key="total" title="Total"></Tab>
                  <Tab key="TD" title="Segmented"></Tab>
                </Tabs>
                <Popover placement="bottom" showArrow={true} size="sm">
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className="mt-1 min-w-0"
                      size="sm"
                      // color="primary"
                    >
                      Document Type
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <CheckboxGroup
                        label={<p className="text-sm">Select Document Types</p>}
                        defaultValue={[
                          "license",
                          "mvr",
                          "medical",
                          "reg",
                          "inspection",
                          "liability",
                        ]}
                        size="sm"
                      >
                        <Checkbox value="license">Drivers License</Checkbox>
                        <Checkbox value="mvr">Annual MVR</Checkbox>
                        <Checkbox value="medical">Medical Certificate</Checkbox>
                        <Checkbox value="reg">Truck Registration</Checkbox>
                        <Checkbox value="inspection">
                          Annual Inspection
                        </Checkbox>
                        <Checkbox value="liability">Liability Proof</Checkbox>
                      </CheckboxGroup>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-full h-96 border rounded-lg pl-2 pb-2 pt-8 pr-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={1000} height={400} data={data}>
                  <CartesianGrid stroke="#e6e6e6" vertical={false} />
                  <XAxis
                    dataKey="name"
                    angle={-30}
                    tick={{ fontSize: 14 }} // Smaller font size
                    tickMargin={12}
                    tickSize={10}
                    height={50}
                  />
                  <YAxis tickFormatter={addPercentSymbol} />
                  <Tooltipp content={<CustomTooltip2 />} />
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  {selected2 === "TD" && (
                    <Area
                      type="monotone"
                      dataKey="Driver"
                      stroke="#8884d8"
                      fillOpacity={0.9}
                      fill="url(#colorPv)"
                    />
                  )}
                  {selected2 === "TD" && (
                    <Area
                      type="monotone"
                      dataKey="Truck"
                      stroke="#82ca9d"
                      fillOpacity={0.9}
                      fill="url(#colorUv)"
                    />
                  )}
                  {selected2 === "total" && (
                    <Area
                      type="monotone"
                      dataKey="TotalPercent"
                      stroke="#0060ff"
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row mb-10 gap-6">
          <div className="w-1/2 flex flex-col">
            <p className="mb-4 text-xl font-bold text-blue-950">
              Units out of Compliance
            </p>
            <div className="flex flex-row items-end mb-2 gap-4">
              <div className="w-full border rounded-lg px-6 py-4 text-sm">
                <p>Total number of units out of compliance: </p>
                <div className="flex flex-row">
                  <span className="font-semibold text-lg w-56">66/554</span>
                  <span className="font-semibold text-lg">14.26%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <Tabs
                  size="sm"
                  aria-label="Options"
                  selectedKey={selected3}
                  onSelectionChange={setSelected3}
                >
                  <Tab key="total" title="Total"></Tab>
                  <Tab key="TD" title="Segmented"></Tab>
                </Tabs>
                <Popover placement="bottom" showArrow={true} size="sm">
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className="min-w-0 mt-1"
                      size="sm"
                    >
                      Unit Type
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <CheckboxGroup
                        label={<p className="text-sm">Select Unit Types</p>}
                        defaultValue={["truck", "driver"]}
                        size="sm"
                      >
                        <Checkbox value="truck">Truck</Checkbox>
                        <Checkbox value="driver">Driver</Checkbox>
                      </CheckboxGroup>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
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
                  <Tooltipp content={<CustomTooltip />} />
                  {/* {isSelected && <Bar dataKey="Driver" fill="#ff8403" />}
                  {isSelected && <Bar dataKey="Truck" fill="#82ca9d" />} */}
                  {selected3 === "total" && (
                    <Bar dataKey="Total" fill="#0060ff" />
                  )}
                  {selected3 === "TD" && (
                    <>
                      <Bar dataKey="Driver" stackId="total" fill="#ff8403" />
                      <Bar dataKey="Truck" stackId="total" fill="#82ca9d" />
                    </>
                  )}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-1/2 flex flex-col">
            <p className="mb-4 text-xl font-bold text-blue-950">
              Units in Compliance
            </p>
            <div className="flex flex-row items-end mb-2 gap-4">
              <div className="w-full border rounded-lg px-6 py-4 text-sm">
                <p>Total number of units in compliance: </p>
                <div className="flex flex-row">
                  <span className="font-semibold text-lg w-56">488/554</span>
                  <span className="font-semibold text-lg">85.74%</span>
                </div>
              </div>

              <div className="flex flex-col">
                <Tabs
                  size="sm"
                  aria-label="Options"
                  selectedKey={selected4}
                  onSelectionChange={setSelected4}
                >
                  <Tab key="total" title="Total"></Tab>
                  <Tab key="TD" title="Segmented"></Tab>
                </Tabs>
                <Popover placement="bottom" showArrow={true} size="sm">
                  <PopoverTrigger>
                    <Button
                      variant="bordered"
                      className="min-w-0 mt-1"
                      size="sm"
                    >
                      Unit Type
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <CheckboxGroup
                        label={<p className="text-sm">Select Unit Types</p>}
                        defaultValue={["truck", "driver"]}
                        size="sm"
                      >
                        <Checkbox value="truck">Truck</Checkbox>
                        <Checkbox value="driver">Driver</Checkbox>
                      </CheckboxGroup>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-full h-96 border rounded-lg pl-2 pb-2 pt-8 pr-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart width={1000} height={400} data={data}>
                  <CartesianGrid stroke="#e6e6e6" vertical={false} />
                  <XAxis
                    dataKey="name"
                    angle={-30}
                    tick={{ fontSize: 14 }} // Smaller font size
                    tickMargin={12}
                    tickSize={10}
                    height={50}
                  />
                  <YAxis tickFormatter={addPercentSymbol} />
                  <Tooltipp content={<CustomTooltip2 />} />
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  {selected4 === "TD" && (
                    <Area
                      type="monotone"
                      dataKey="Driver"
                      stroke="#8884d8"
                      fillOpacity={0.9}
                      fill="url(#colorPv)"
                    />
                  )}
                  {selected4 === "TD" && (
                    <Area
                      type="monotone"
                      dataKey="Truck"
                      stroke="#82ca9d"
                      fillOpacity={0.9}
                      fill="url(#colorUv)"
                    />
                  )}
                  {selected4 === "total" && (
                    <Area
                      type="monotone"
                      dataKey="TotalPercent"
                      stroke="#0060ff"
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row mb-10 gap-6">
          <div className="w-1/3 flex flex-col">
            <p className="mb-4 text-xl font-bold text-blue-950">
              Days out of Compliance
            </p>
            <div className="flex flex-row items-end mb-2 gap-4">
              <div className="w-full border rounded-lg px-6 py-4 text-sm">
                <p>Number of days out of compliance: </p>
                <div className="flex flex-row">
                  <span className="font-semibold text-lg w-56">42/90</span>
                  <span className="font-semibold text-lg">44.31%</span>
                </div>
                {/* <p>
                  Number of days out of compliance (per day):{" "}
                  <span className="font-semibold ml-10">42/90</span>
                </p>
                <p className="mb-5">
                  Percentage of days out of compliance:{" "}
                  <span className="font-semibold ml-20">44.31%</span>
                </p> */}
                {/* <p>
                  Number of days in compliance (per day):{" "}
                  <span className="font-semibold ml-10">48/90</span>
                </p>
                <p>
                  Percentage of days in compliance:{" "}
                  <span className="font-semibold ml-20">55.81%</span>
                </p> */}
              </div>
            </div>
            <div className="w-full h-[23rem] border rounded-lg pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={100}
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
                  <Tooltipp />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-2/3 flex flex-col">
            <p className="mb-4 text-xl font-bold text-blue-950">
              High Alert Documents (Most out of Compliance)
            </p>
            <div className="w-full border rounded-lg px-6 py-4 text-sm mb-2 h-40">
              <div className="flex flex-row">
                <p className=" w-40">Drivers License:</p>
                <p className="font-semibold w-8">42</p>
                <p className="font-semibold w-5">/</p>
                <p className="font-semibold w-10">90</p>
              </div>
              <div className="flex flex-row">
                <p className=" w-40">Annual MVR:</p>
                <p className="font-semibold w-8">31</p>
                <p className="font-semibold w-5">/</p>
                <p className="font-semibold w-10">90</p>
              </div>
              <div className="flex flex-row">
                <p className=" w-40">Medical Certificate:</p>
                <p className="font-semibold w-8">20</p>
                <p className="font-semibold w-5">/</p>
                <p className="font-semibold w-10">90</p>
              </div>
              <div className="flex flex-row">
                <p className=" w-40">Truck Registration:</p>
                <p className="font-semibold w-8">26</p>
                <p className="font-semibold w-5">/</p>
                <p className="font-semibold w-10">90</p>
              </div>
              <div className="flex flex-row">
                <p className=" w-40">Truck Registration:</p>
                <p className="font-semibold w-8">26</p>
                <p className="font-semibold w-5">/</p>
                <p className="font-semibold w-10">90</p>
              </div>
              <div className="flex flex-row">
                <p className=" w-40">Truck Registration:</p>
                <p className="font-semibold w-8">26</p>
                <p className="font-semibold w-5">/</p>
                <p className="font-semibold w-10">90</p>
              </div>
            </div>
            <div className="w-full h-72 border rounded-lg p-2 pr-8 pt-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataRadial} barGap={2} layout="vertical">
                  <CartesianGrid stroke="#e6e6e6" vertical={false} />
                  <XAxis
                    type="number" // X axis for vertical bar chart represents numerical values
                    tick={{ fontSize: 14 }}
                  />
                  <YAxis
                    type="category" // Y axis represents the categories for a vertical bar chart
                    dataKey="name" // Key for categorical data
                    tick={{ fontSize: 14 }}
                    tickMargin={12}
                    tickSize={10}
                    width={100}
                  />
                  <Tooltipp />
                  <Bar dataKey="uv" fill="#0060ff" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <p className="mb-4 text-xl font-bold text-blue-950">
          Out of Compliance Calendar
        </p>
        <div className="flex flex-row gap-4 items-center">
          <Tabs
            size="sm"
            aria-label="Options"
            selectedKey={selected5}
            onSelectionChange={setSelected5}
          >
            <Tab key="documents" title="Documents"></Tab>
            <Tab key="units" title="Units"></Tab>
            <Tab key="days" title="Days"></Tab>
          </Tabs>
          {selected5 === "units" && (
            <Popover placement="bottom" showArrow={true} size="sm">
              <PopoverTrigger>
                <Button variant="bordered" className="min-w-0" size="sm">
                  Unit Type
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <CheckboxGroup
                    label={<p className="text-sm">Select Unit Types</p>}
                    defaultValue={["truck", "driver"]}
                    size="sm"
                  >
                    <Checkbox value="truck">Truck</Checkbox>
                    <Checkbox value="driver">Driver</Checkbox>
                  </CheckboxGroup>
                </div>
              </PopoverContent>
            </Popover>
          )}
          {selected5 === "documents" && (
            <Popover placement="bottom" showArrow={true} size="sm">
              <PopoverTrigger>
                <Button variant="bordered" className="min-w-0" size="sm">
                  Document Type
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <CheckboxGroup
                    label={<p className="text-sm">Select Document Types</p>}
                    defaultValue={[
                      "license",
                      "mvr",
                      "medical",
                      "reg",
                      "inspection",
                      "liability",
                    ]}
                    size="sm"
                  >
                    <Checkbox value="license">Drivers License</Checkbox>
                    <Checkbox value="mvr">Annual MVR</Checkbox>
                    <Checkbox value="medical">Medical Certificate</Checkbox>
                    <Checkbox value="reg">Truck Registration</Checkbox>
                    <Checkbox value="inspection">Annual Inspection</Checkbox>
                    <Checkbox value="liability">Liability Proof</Checkbox>
                  </CheckboxGroup>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
        <div className="w-full flex items-center justify-center border rounded-lg p-8 mb-10 mt-2">
          <CalendarHeatmap range={12} />
        </div>
        <p className="text-xl font-bold text-blue-950 mb-4">
          High Alert Units (Most out of Compliance)
        </p>
        <div className="flex gap-2">
          <Input placeholder="Search here..." className="w-64" size="sm" />
          <Popover placement="bottom" showArrow={true} size="sm">
            <PopoverTrigger>
              <Button variant="bordered" className="mb-2 min-w-0" size="sm">
                Unit Type
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <CheckboxGroup
                  label={<p className="text-sm">Select Unit Types</p>}
                  defaultValue={["truck", "driver"]}
                  size="sm"
                >
                  <Checkbox value="truck">Truck</Checkbox>
                  <Checkbox value="driver">Driver</Checkbox>
                </CheckboxGroup>
              </div>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom" showArrow={true} size="sm">
            <PopoverTrigger>
              <Button
                variant="bordered"
                color="primary"
                className="mb-2 min-w-0"
                size="sm"
              >
                {"<"} 50% Compliance
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <Slider
                  size="sm"
                  step={10}
                  color="primary"
                  label="< Compliance %"
                  showSteps={true}
                  maxValue={100}
                  minValue={0}
                  defaultValue={50}
                  className="max-w-md w-60 text-foreground"
                />
              </div>
            </PopoverContent>
          </Popover>
          <Button size="sm" variant="bordered">
            Any Status
          </Button>
          <Button size="sm" variant="bordered">
            Any Compliance
          </Button>
        </div>
        <Table
          aria-label="Example table with custom cells"
          isHeaderSticky
          classNames={{
            base: "max-h-[755px]",
            table: "min-h-[420px]",
          }}
          // selectionMode="multiple"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        scrollBehavior="outside"
      >
        <ModalContent className="text-foreground">
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1 mt-2">
                Driver Details
              </ModalHeader> */}
              <ModalBody className="px-10">
                <p className="font-medium text-lg mt-5">Driver Details</p>
                <Table
                  aria-label="Example static collection table"
                  removeWrapper
                  color="primary"
                >
                  <TableHeader>
                    <TableColumn>Driver ID</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Company</TableColumn>
                    <TableColumn>Current Status</TableColumn>
                    <TableColumn>Current Compliance</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>
                        <p className="font-medium">314</p>
                      </TableCell>
                      <TableCell>
                        <User
                          avatarProps={{
                            radius: "lg",
                            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                          }}
                          description="william.howard@example.com"
                          name="William Howard"
                        >
                          william.howard@example.com
                        </User>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <p className="text-bold text-sm capitalize">
                            Clinica Las Mercedes Transportation Inc
                          </p>
                          <p className="text-bold text-sm capitalize text-default-400">
                            #1698
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Chip
                          className="capitalize"
                          color="success"
                          size="sm"
                          variant="flat"
                        >
                          <p className="text-xs">Active</p>
                        </Chip>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div
                            className={`h-2 w-2 mr-2 rounded-full bg-red-500`}
                          ></div>
                          <p className={`text-xs text-red-500`}>
                            Out of Compliance
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="font-medium text-lg mt-5">Documents Measured</p>
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>Document</TableColumn>
                    <TableColumn>Days out of Compliance</TableColumn>
                    <TableColumn>% in Compliance</TableColumn>
                    <TableColumn>Current Compliance</TableColumn>
                    <TableColumn>Actions</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>
                        <p className="font-medium">Driver&apos;s License</p>
                      </TableCell>
                      <TableCell>7</TableCell>
                      <TableCell>97%</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div
                            className={`h-2 w-2 mr-2 rounded-full bg-red-500`}
                          ></div>
                          <p className={`text-xs text-red-500`}>
                            Out of Compliance
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="relative flex items-center ml-2 gap-3">
                          <Tooltip
                            content="Missing"
                            className="text-white"
                            color="danger"
                          >
                            <span className="text-lg text-red-500 active:opacity-50">
                              <EyeIcon />
                            </span>
                          </Tooltip>
                          <Tooltip
                            content="Upload Document"
                            className="text-default-900"
                          >
                            <span className="text-lg text-default-500 cursor-pointer active:opacity-50">
                              <GoUpload />
                            </span>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>
                        <p className="font-medium">Medical Certificate</p>
                      </TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>92%</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div
                            className={`h-2 w-2 mr-2 rounded-full bg-green-500`}
                          ></div>
                          <p className={`text-xs text-green-500`}>Compliant</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="relative flex items-center ml-2">
                          <Tooltip
                            content="View Document"
                            className="text-default-900"
                          >
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                              <EyeIcon />
                            </span>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>
                        <p className="font-medium">Annual MVR</p>
                      </TableCell>
                      <TableCell>24</TableCell>
                      <TableCell>87%</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div
                            className={`h-2 w-2 mr-2 rounded-full bg-green-500`}
                          ></div>
                          <p className={`text-xs text-green-500`}>Compliant</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="relative flex items-center ml-2">
                          <Tooltip
                            content="View Document"
                            className="text-default-900"
                          >
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                              <EyeIcon />
                            </span>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="font-medium text-lg mt-5">
                  Out of Compliance Timeline
                </p>
                <div className="w-full">
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      width={800}
                      height={600}
                      data={dataGantt}
                      layout="vertical" // for a Gantt-like appearance
                      barSize={15}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 10]} />
                      <YAxis
                        type="category"
                        dataKey="document"
                        width={100}
                        tickMargin={10}
                      />
                      {/* <Tooltipp /> */}
                      {/* <Legend /> */}
                      {/* First bar showing the first missing period */}
                      <Bar
                        dataKey="period1_start"
                        stackId="a"
                        fill="transparent"
                        barSize={10}
                      />
                      <Bar
                        dataKey="period1_end"
                        stackId="a"
                        fill="#0b6ef5"
                        barSize={10}
                      />
                      {/* Second bar showing another missing period */}
                      <Bar
                        dataKey="period2_start"
                        stackId="a"
                        fill="transparent"
                        barSize={10}
                      />
                      <Bar
                        dataKey="period2_end"
                        stackId="a"
                        fill="#0b6ef5"
                        barSize={10}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="font-medium text-lg mt-5 mb-5">
                  Out of Compliance Calendar Heatmap
                </p>
                <div className="w-full flex items-center justify-center">
                  <CalendarHeatmap range={7} />
                </div>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="flat" onPress={onClose} className="min-w-0 px-2">
                  <IoMdClose size={20}/>
                </Button> */}
                <Button
                  color="primary"
                  onPress={onClose}
                  startContent={<MdEmail size={20} />}
                >
                  Notify Driver/Company
                </Button>
                <Button
                  className="text-white"
                  color="success"
                  onPress={onClose}
                  startContent={<FaFileExport size={20} />}
                >
                  Export
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Shell>
  );
};

export default Page;
