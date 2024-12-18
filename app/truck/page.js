"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
} from "@nextui-org/react";
import React from "react";

const Truck = () => {
  return (
    <div className="bg-white flex">
      <div className="sidebar w-[17rem] bg-blue-500 hidden md:block"></div>
      <div className="flex-1 flex min-h-screen flex-col pt-10 py-20 px-5 md:px-10 mx-auto text-black">
        {/* <Button color="primary" className="w-40 mb-2">
          Add New Record
        </Button> */}
        <Card className="w-full">
          <Accordion variant="bordered" isCompact>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title={
                <div className="text-sm text-foreground-500">
                  Add New Record
                </div>
              }
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-5">
                <Input
                  type="text"
                  label="Invoice Date"
                  placeholder="Enter the Invoice Date"
                />
                <Input
                  type="text"
                  label="Invoice Number"
                  placeholder="Enter the Invoice Number"
                />
                <Input type="text" label="Vendor" placeholder="Select Vendor" />
                <Input
                  type="text"
                  label="Vehicle Mileage"
                  placeholder="Enter the Vehicle Mileage"
                />
                <Input
                  type="text"
                  label="Invoice File"
                  placeholder="Select Invoice File"
                />
              </div>
              <Divider className="my-3" />
              <div className="bg-blue-500/20 rounded-xl p-3 my-3">
                <div className="grid grid-cols-3 pb-3 gap-4">
                  <Input
                    type="text"
                    label="Type of Service"
                    placeholder="Select Type of Service"
                    className="col-span-2"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                  <Input
                    type="number"
                    placeholder="0.00"
                    label="Service Cost"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                    className="col-span-1"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-row items-center justify-start pl-4">
                    <p className="font-semibold mr-3">Warranty:</p>
                    <Checkbox color="primary"></Checkbox>
                  </div>
                  <Input
                    type="text"
                    label="Warranty Date"
                    placeholder="Enter the Warranty Date"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                  <Input
                    type="text"
                    label="Warranty Mileage"
                    placeholder="Enter the Warranty Mileage"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                  <Input
                    type="text"
                    label="Warranty File"
                    placeholder="Select Warranty File"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                </div>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-3 my-3">
                <div className="grid grid-cols-3 pb-3 gap-4">
                  <Input
                    type="text"
                    label="Type of Service"
                    placeholder="Select Type of Service"
                    className="col-span-2"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                  <Input
                    type="number"
                    placeholder="0.00"
                    label="Service Cost"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                    className="col-span-1"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                </div>
                <div className="grid grid-cols-5 gap-4">
                  <div className="flex flex-row items-center justify-start pl-4">
                    <p className="font-semibold mr-3">Warranty:</p>
                    <Checkbox color="primary"></Checkbox>
                  </div>
                  <Input
                    type="text"
                    label="Warranty Date"
                    placeholder="Enter the Warranty Date"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                  <Input
                    type="text"
                    label="Warranty Mileage"
                    placeholder="Enter the Warranty Mileage"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                  <Input
                    type="text"
                    label="Warranty File"
                    placeholder="Select Warranty File"
                    size="sm"
                    classNames={{inputWrapper: "bg-white group-data-[focus=true]:bg-white"}}
                  />
                  <div></div>
                </div>
              </div>
              <div className="bg-foreground-300 rounded-xl p-2 mb-2 flex justify-between items-center gap-3">
                <Button color="primary">Add Service</Button>
                <div className="flex flex-row items-center">
                  <p className="text-xs font-semibold mr-2">Sales Tax</p>
                  <Input
                    type="number"
                    size="sm"
                    defaultValue={7.0}
                    placeholder="0.00"
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">%</span>
                      </div>
                    }
                    className="max-w-[6rem]"
                  />
                </div>
                <p>Total Cost: $</p>
                <Button color="primary">Submit New Record</Button>
              </div>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </div>
  );
};

export default Truck;
