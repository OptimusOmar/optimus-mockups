"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
  ButtonGroup,
  Listbox,
  ListboxItem,
  Divider,
  Input,
  Tooltip,
  Chip,
  Tabs,
  Tab,
  Select,
  SelectItem,
  Checkbox,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { EditIcon } from "../drivers/EditIcon";
import { DeleteIcon } from "../drivers/DeleteIcon";
import { FaCheck } from "react-icons/fa";
import { BsFillCalendar2CheckFill } from "react-icons/bs";

const Page = () => {
  const [isAddSidebarOpen, setIsAddSidebarOpen] = useState(false);
  const [newDocumentName, setNewDocumentName] = useState("");
  const [selectedCompanies, setSelectedCompanies] = useState(new Set([]));
  const [selectedUnit, setSelectedUnit] = useState(new Set([]));
  const [selectedAutoDeleteDate, setSelectedAutoDeleteDate] = useState(
    new Set(["never"])
  );

  const companies = ["Company One", "Company Two", "Company Three"];

  const toggleAddSidebar = () => {
    setIsAddSidebarOpen(!isAddSidebarOpen);
  };

  const handleCompanyChange = (companyName) => {
    setSelectedCompanies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(companyName)) {
        newSet.delete(companyName);
      } else {
        newSet.add(companyName);
      }
      return newSet;
    });
  };

  const handleSelectAllCompanies = () => {
    if (selectedCompanies.size === companies.length) {
      setSelectedCompanies(new Set([]));
    } else {
      setSelectedCompanies(new Set(companies));
    }
  };

  const handleAddDocument = () => {
    console.log("New document:", {
      name: newDocumentName,
      companies: Array.from(selectedCompanies),
      unit: Array.from(selectedUnit)[0],
      autoDeleteDate: Array.from(selectedAutoDeleteDate)[0],
    });
    setNewDocumentName("");
    setSelectedCompanies(new Set([]));
    setSelectedUnit(new Set([]));
    setSelectedAutoDeleteDate(new Set([]));
    setIsAddSidebarOpen(false);
  };

  return (
    <div className="bg-white flex text-foreground">
      <div className="sidebar w-80 bg-blue-500 mr-6 hidden md:block"></div>
      <div className="flex min-h-screen flex-col pt-10 py-20 text-black max-w-4xl w-full">
        <h1 className="text-xl font-bold text-blue-950">
          Custom Document Types
        </h1>
        <div className="bg-yellow-400 rounded-xl w-16 h-[6px] mt-3 mb-6"></div>
        <div className="flex justify-between">
          <div className="flex flex-row items-center">
            <p className="font-medium mr-4 text-sm">Select Company:</p>
            <Select className="w-80" size="sm">
              <SelectItem className={"text-black"} key="company1">
                Company One
              </SelectItem>
              <SelectItem className={"text-black"} key="company2">
                Company Two
              </SelectItem>
              <SelectItem className={"text-black"} key="company3">
                Company Three
              </SelectItem>
            </Select>
          </div>
          <Button color="primary" size="sm" onClick={toggleAddSidebar}>
            Add +
          </Button>
        </div>
        <div className="w-full flex flex-col items-baseline mt-10">
          <p className="font-medium mb-2">Driver Documents</p>
          <div className=" w-full">
            <Table
              fullWidth
              isCompact
              removeWrapper
              color="primary"
              aria-label="Example table with dynamic content"
            >
              <TableHeader>
                <TableColumn>Document Name</TableColumn>
                <TableColumn>Default Auto Delete Date</TableColumn>
                <TableColumn>Expiration Date Required</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-row items-center">
                      <Image
                        src="pdfblue.png"
                        width={1000}
                        height={1000}
                        alt="pdf"
                        className="w-12 h-12 mr-3"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium">
                          Custom Document Name Example
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color="warning"
                      size="sm"
                      variant="flat"
                    >
                      <p className="text-xs">10 Years</p>
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <FaCheck />
                  </TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Edit" className="text-default-900">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="font-medium mb-2 mt-8">Truck Documents</p>
          <div className=" w-full">
            <Table
              fullWidth
              isCompact
              removeWrapper
              color="primary"
              aria-label="Example table with dynamic content"
            >
              <TableHeader>
                <TableColumn>Document Name</TableColumn>
                <TableColumn>Default Auto Delete Date</TableColumn>
                <TableColumn>Expiration Date Required</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-row items-center">
                      <Image
                        src="pdfblue.png"
                        width={1000}
                        height={1000}
                        alt="pdf"
                        className="w-12 h-12 mr-3"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium">
                          Custom Document Name Example
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color="warning"
                      size="sm"
                      variant="flat"
                    >
                      <p className="text-xs">10 Years</p>
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <FaCheck />
                  </TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Edit" className="text-default-900">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-row items-center">
                      <Image
                        src="pdfblue.png"
                        width={1000}
                        height={1000}
                        alt="pdf"
                        className="w-12 h-12 mr-3"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium">Custom Eample 2</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color="warning"
                      size="sm"
                      variant="flat"
                    >
                      <p className="text-xs">10 Years</p>
                    </Chip>
                  </TableCell>
                  <TableCell>
                    {/* <FaCheck /> */}
                  </TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Edit" className="text-default-900">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="font-medium mb-2 mt-8">Trailer Documents</p>
          <div className=" w-full">
            <Table
              fullWidth
              isCompact
              removeWrapper
              color="primary"
              aria-label="Example table with dynamic content"
            >
              <TableHeader>
                <TableColumn>Document Name</TableColumn>
                <TableColumn>Default Auto Delete Date</TableColumn>
                <TableColumn>Expiration Date Required</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-row items-center">
                      <Image
                        src="pdfblue.png"
                        width={1000}
                        height={1000}
                        alt="pdf"
                        className="w-12 h-12 mr-3"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium">
                          Custom Document Name Example
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color="warning"
                      size="sm"
                      variant="flat"
                    >
                      <p className="text-xs">10 Years</p>
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <FaCheck />
                  </TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Edit" className="text-default-900">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="font-medium mb-2 mt-8">Company Documents</p>
          <div className=" w-full">
            <Table
              fullWidth
              isCompact
              removeWrapper
              color="primary"
              aria-label="Example table with dynamic content"
            >
              <TableHeader>
                <TableColumn>Document Name</TableColumn>
                <TableColumn>Default Auto Delete Date</TableColumn>
                <TableColumn>Expiration Date Required</TableColumn>
                <TableColumn>Actions</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="flex flex-row items-center">
                      <Image
                        src="pdfblue.png"
                        width={1000}
                        height={1000}
                        alt="pdf"
                        className="w-12 h-12 mr-3"
                      />
                      <div className="flex flex-col">
                        <p className="font-medium">
                          Custom Document Name Example
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip
                      className="capitalize"
                      color="warning"
                      size="sm"
                      variant="flat"
                    >
                      <p className="text-xs">10 Years</p>
                    </Chip>
                  </TableCell>
                  <TableCell>
                    {/* <FaCheck /> */}
                  </TableCell>
                  <TableCell>
                    <div className="relative flex items-center gap-2">
                      <Tooltip content="Edit" className="text-default-900">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <EditIcon />
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <DeleteIcon />
                        </span>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Add Document Sidebar */}
      {isAddSidebarOpen && (
        <div className="fixed right-0 top-0 h-full w-96 bg-gray-300 p-6 shadow-lg overflow-y-auto flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Add Custom Document Type</h2>
            <div className="hover:cursor-pointer" onClick={toggleAddSidebar}>X</div>
          </div>
          <Input
            label="Document Name"
            placeholder="Enter document name"
            value={newDocumentName}
            onChange={(e) => setNewDocumentName(e.target.value)}
            className="mb-4"
          />
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="mb-4 border-gray-400">
                Select Companies ({selectedCompanies.size})
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Select Companies"
              closeOnSelect={false}
              selectedKeys={selectedCompanies}
              selectionMode="multiple"
              onSelectionChange={setSelectedCompanies}
            >
              <DropdownItem key="select-all">
                <Checkbox
                  isSelected={selectedCompanies.size === companies.length}
                  onValueChange={handleSelectAllCompanies}
                >
                  Select All
                </Checkbox>
              </DropdownItem>
              <DropdownItem key="divider">
                <Divider />
              </DropdownItem>
              {companies.map((company) => (
                <DropdownItem key={company}>
                  <Checkbox
                    isSelected={selectedCompanies.has(company)}
                    onValueChange={() => handleCompanyChange(company)}
                  >
                    {company}
                  </Checkbox>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Select
            label="Select Module"
            placeholder="Choose a module"
            selectedKeys={selectedUnit}
            onSelectionChange={setSelectedUnit}
            className="mb-4"
          >
            <SelectItem key="company" className="text-black">
              Company
            </SelectItem>
            <SelectItem key="driver" className="text-black">
              Driver
            </SelectItem>
            <SelectItem key="truck" className="text-black">
              Truck
            </SelectItem>
            <SelectItem key="trailer" className="text-black">
              Trailer
            </SelectItem>
          </Select>
          <Select
            label="Default Auto Delete Date"
            placeholder="Choose a duration"
            selectedKeys={selectedAutoDeleteDate}
            onSelectionChange={setSelectedAutoDeleteDate}
            className="mb-4"
          >
            <SelectItem key="never" className="text-black">
              Never
            </SelectItem>
            <SelectItem key="1" className="text-black">
              1 Year
            </SelectItem>
            <SelectItem key="3" className="text-black">
              3 Years
            </SelectItem>
            <SelectItem key="5" className="text-black">
              5 Years
            </SelectItem>
          </Select>
          <Checkbox className="mb-2" defaultSelected>
            Expiration Date Required
          </Checkbox>
          <Button color="primary" onClick={handleAddDocument}>
            Add Document
          </Button>
        </div>
      )}
    </div>
  );
};

export default Page;
