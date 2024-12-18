"use client";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectSection,
  SelectItem,
  Button,
  Input,
} from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import InfoIcon from "../components/InfoIcon";
import { Tooltip } from "@nextui-org/react";
import YouTube from "react-youtube";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { CiDeliveryTruck } from "react-icons/ci";

const Page = () => {
  const [fleet, setFleet] = React.useState(1);
  const [isSelected, setIsSelected] = React.useState(true);
  const basicPrice = isSelected ? 12.49 : 14.99;
  const optimusplusPrice = isSelected ? 24.99 : 29.99;
  const basicTotal = basicPrice * fleet;
  const optimusplusTotal = optimusplusPrice * fleet;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSelectionChange = (e) => {
    setFleet(e.target.value);
  };

  const videoId = "9WOqkS9Eyj0";

  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, // Set to 1 if you want the video to autoplay
    },
  };

  return (
    <div className="bg-white">
      <div className="flex min-h-screen flex-col items-center pb-24 pt-10 max-w-7xl mx-auto">
        <div className="pt-20 text-gray-900 flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-center px-3">
            Streamline your compliance. Start{" "}
            <span className="text-[#0279ed]">free</span>.
          </h1>
          <p className="text-gray-700 pt-8 text-xl tracking-wide">
            Simple. Safe. Intuitive.
          </p>
          <div className="bg-[#0279ed] rounded-full text-md text-white px-7 py-3 flex flex-row gap-2 justify-center items-center mt-10">
            <p>Get Started</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
          <div className=" w-[80%] sm:w-full flex flex-col sm:flex-row justify-between mt-5">
            <div className="flex flex-row w-full items-center justify-center mt-10">
              <p className="text-sm text-gray-700 w-60">
                Explore Dynamic Pricing:{" "}
              </p>
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input
                  className="w-28"
                  size="sm"
                  type="number"
                  label="Fleet Size"
                  labelPlacement="outside"
                  value={fleet}
                  placeholder="0"
                  startContent={<CiDeliveryTruck className="mr-2" size={40} />}
                  onChange={handleSelectionChange}
                />
              </div>
            </div>
            <Switch
              isSelected={isSelected}
              onValueChange={setIsSelected}
              size="md"
              className="mt-10"
            >
              {/* <p className="text-sm w-48 font-semibold text-[#0279ed] ml-3">
                Billed Yearly
                <br /> Save 18%
              </p> */}
              <p className="text-sm w-48 font-semibold text-[#0279ed] ml-3">
                Billed Yearly <br />
                <span className="hidden sm:block">
                  Save 18% <br />{" "}
                </span>
                (2 Months off!)
              </p>
            </Switch>
          </div>

          <div className="w-[90%] sm:w-full flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            {/* <div className="w-1/4 h-auto border p-8 flex flex-col">
              <p className="font-bold text-xl pb-1 mt-4">Free</p>
              <div className="flex flex-row items-center justify-start">
                <p className="text-[40px] pr-2 font-light">$0</p>
                <div className="flex flex-col font-light">
                  <p>free</p>
                  <p>forever</p>
                </div>
              </div>
              <p className="font-semibold mt-4 text-sm">Up to 5 documents</p>
              <Button
                color="primary"
                className="bg-[#0279ed] rounded-full w-36 mt-11"
              >
                Try for free
              </Button>
              <p className="text-sm text-gray-500 pr-16 mt-6">
                Test out the platform before committing.
              </p>
              <div className="w-full h-[1px] bg-gray-400 mt-[84px]"></div>
              <p className="font-bold mt-4">Free plan includes:</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">
                  90 day free trial to
                  <br /> Basic plan
                </p>
                <Tooltip
                  color="foreground"
                  content="Unlock full access to the Optimus Paper Basic Package for 3 months."
                  className="max-w-xs text-center"
                >
                  <div>
                    <InfoIcon className={"w-4 h-4 text-gray-500"} />
                  </div>
                </Tooltip>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">Up to 3 entities</p>
                <Tooltip
                  color="foreground"
                  content="Create a limited number of companies, drivers, trucks, and trailers."
                  className="max-w-xs text-center"
                >
                  <div>
                    <InfoIcon className={"w-4 h-4 text-gray-500"} />
                  </div>
                </Tooltip>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">Up to 5 documents</p>
                <Tooltip
                  color="foreground"
                  content="Store a limited amount of documents under drivers, trucks, and trailers."
                  className="max-w-xs text-center"
                >
                  <div>
                    <InfoIcon className={"w-4 h-4 text-gray-500"} />
                  </div>
                </Tooltip>
              </div>
            </div> */}
            <div className="sm:w-1/4 h-auto border rounded-md">
              <div className="w-full h-4 rounded-t-md bg-gradient-to-b from-[#4abefc] to-[#1d93f8]"></div>
              <div className="p-8 w-full h-auto flex flex-col">
                <p className="font-bold text-xl pb-1">Basic</p>
                <div className="flex flex-row items-center justify-start">
                  <p className="text-[40px] pr-4 font-light bg-gradient-to-b from-[#4abefc] to-[#1d93f8] bg-clip-text text-transparent">
                    ${basicPrice.toFixed(2)}
                  </p>
                  <div className="flex flex-col font-light">
                    <p>truck /</p>
                    <p>month</p>
                  </div>
                </div>
                <p className="font-semibold mt-4 text-sm">
                  Total ${basicTotal.toFixed(2)} / month
                </p>
                <p className="text-gray-600 text-sm">
                  Billed {isSelected ? "annually" : "monthly"}
                </p>
                <Button
                  color="primary"
                  className="bg-[#0279ed] rounded-full w-36 mt-6"
                >
                  Try for free
                </Button>
                <p className="text-sm text-gray-500 pr-16 mt-6">
                  Manage all your team&apos;s documents in one place.
                </p>
                <Button
                  color="primary"
                  className="border border-[#0279ed] rounded-full text-sm text-[#0279ed] bg-white mt-6"
                  onPress={onOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                  Watch why Basic
                </Button>
                <div className="w-full h-[1px] bg-gray-400 mt-5"></div>
                <p className="font-bold mt-4">Includes:</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Unlimited Entities</p>
                  <Tooltip
                    color="foreground"
                    content="Create limitless companies, drivers, trucks, and trailers effortlessly."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Flexible Document Storage
                  </p>
                  <Tooltip
                    color="foreground"
                    content="Store any document type in any quantity under drivers, trucks, and trailers."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Expiration Date Alerts
                  </p>
                  <Tooltip
                    color="foreground"
                    content="Stay compliant effortlessly with our notification calendar tracking expiration dates."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Instant Document Access
                  </p>
                  <Tooltip
                    color="foreground"
                    content="Access driver and truck documents on demand for streamlined compliance management."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Driver Application Management
                  </p>
                  <Tooltip
                    color="foreground"
                    content="Streamline the new driver application process for efficient onboarding."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Maintenance Module</p>
                  <Tooltip
                    color="foreground"
                    content="Keep track of maintenance invoices and costs with our dedicated maintenance module."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Drug and Alcohol Test Reporting
                  </p>
                  <Tooltip
                    color="foreground"
                    content="Manage drug and alcohol testing seamlessly within the platform."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">DQ File Management</p>
                  <Tooltip
                    color="foreground"
                    content="Manage your driver's DQ File."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Notifications for Renewable Documents
                  </p>
                  <Tooltip
                    color="foreground"
                    content="Notifications for Renewable Documents."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="sm:w-1/4 h-auto border rounded-md">
              <div className="w-full bg-blue-600 h-4 rounded-t-md"></div>
              <div className="p-8 w-full h-auto flex flex-col">
                <p className="font-bold text-xl pb-1">Optimus +</p>
                <div className="flex flex-row items-center justify-start">
                  <p className="text-[40px] pr-4 font-light text-blue-600">
                    ${optimusplusPrice.toFixed(2)}
                  </p>
                  <div className="flex flex-col font-light">
                    <p>truck /</p>
                    <p>month</p>
                  </div>
                </div>
                <p className="font-semibold mt-4 text-sm">
                  Total ${optimusplusTotal.toFixed(2)} / month
                </p>
                <p className="text-gray-600 text-sm">
                  Billed {isSelected ? "annually" : "monthly"}
                </p>
                <Button
                  color="primary"
                  className="bg-[#0279ed] rounded-full w-36 mt-6"
                >
                  Get started
                </Button>
                <p className="text-sm text-gray-500 pr-16 mt-6">
                  Streamline complex workflows at scale.
                </p>
                <Button
                  color="primary"
                  className="border border-[#0279ed] rounded-full text-sm text-[#0279ed] bg-white mt-6"
                  onPress={onOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                  Watch why Optimus+
                </Button>
                <div className="w-full h-[1px] bg-gray-400 mt-5"></div>
                <p className="font-bold mt-4">Includes basic, plus:</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Hassle-free Onboarding
                  </p>
                  <Tooltip
                    color="foreground"
                    content="We will onboard customers' data into their Optimus Paper account, ensuring a smooth setup process."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Monthly Compliance Audits
                  </p>
                  <Tooltip
                    color="foreground"
                    content="Optimus Plus includes regular audits to verify the presence and accuracy of all DOT-required documents."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">
                    Dedicated Customer Support Specialist
                  </p>
                  <Tooltip
                    color="foreground"
                    content="Optimus Plus includes a Dedicated Customer Support Specialist."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Driver Onboarding</p>
                  <Tooltip
                    color="foreground"
                    content="Optimus Plus includes Driver Onboarding."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Peace of Mind</p>
                  <Tooltip
                    color="foreground"
                    content="With Optimus Plus, customers can rely on our expertise and monitoring to ensure compliance with DOT regulations."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="sm:w-1/4 h-auto border rounded-md">
              <div className="w-full bg-[#003980] h-4 rounded-t-md"></div>
              <div className="p-8 w-full h-auto flex flex-col">
                <p className="font-bold text-xl pb-1">Enterprise</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="ml-6 mt-4 mb-1 w-24 h-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
                <Button
                  color="primary"
                  className="border border-[#0279ed] rounded-full text-sm text-[#0279ed] bg-white w-36 mt-6"
                >
                  Contact us
                </Button>
                <p className="text-sm text-gray-500 pr-16 mt-6">
                  Get exclusive features for your organization.
                </p>
                <div className="w-full h-[1px] bg-gray-400 mt-[84px]"></div>
                <p className="font-bold mt-4">Includes Optimus+, plus:</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Custom Features</p>
                  <Tooltip
                    color="foreground"
                    content="Custom made features for organizations."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Tailored Workflow</p>
                  <Tooltip
                    color="foreground"
                    content="Custom tailored workflow and process made for your efficiency."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm text-gray-600">Personalized Branding</p>
                  <Tooltip
                    color="foreground"
                    content="Make your workspace feel familiar."
                    className="max-w-xs text-center"
                  >
                    <div>
                      <InfoIcon className={"w-4 h-4 text-gray-500"} />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        hideCloseButton
        className="max-w-fit rounded-xl"
      >
        <ModalContent className="">
          {(onClose) => (
            <>
              <YouTube videoId={videoId} opts={opts} />
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Page;
