"use client";
import React from "react";
import { Accordion, AccordionItem, Divider, Input } from "@nextui-org/react";
import Image from "next/image";
import { EyeIcon } from "../drivers/EyeIcon";
import { EditIcon } from "../drivers/EditIcon";
import { DeleteIcon } from "../drivers/DeleteIcon";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { SearchIcon } from "../drivers/SearchIcon";
import Link from "next/link";



const Shell = ({ children }) => {
  return (
    <div className="bg-white flex min-h-screen">
      <div className="sidebar w-80 bg-blue-500 hidden md:block">
        <Link href="/">
        <Image
          src={"/LogoOptimus.png"}
          width={3638}
          height={733}
          className="p-5"
          alt="logo"
        />
        </Link>
        <Accordion className="">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title={
              <div className="flex items-center">
                <EditIcon className="text-white mx-1 h-5 w-5" />
                <p className="text-white font-medium text-base">Manage</p>
              </div>
            }
          >
            <p className="text-sm">Subdomains</p>
            <p className="text-sm">Users</p>
            <p className="text-sm">Admins</p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={
              <div className="flex items-center">
                <EyeIcon className="text-white mx-1 h-5 w-5" />
                <p className="text-white font-medium text-base">Database</p>
              </div>
            }
          >
            <Link href="/drivers">Drivers</Link>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title={
              <div className="flex items-center">
                <DeleteIcon className="text-white mx-1 h-5 w-5" />
                <p className="text-white font-medium text-base">Billing</p>
              </div>
            }
          >
            hello13
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 1"
            title={
              <div className="flex items-center">
                <EditIcon className="text-white mx-1 h-5 w-5" />
                <p className="text-white font-medium text-base">Reports</p>
              </div>
            }
          >
            <Link className="text-sm" href="/lapsereport">Lapse Report</Link>
            <p className="text-sm">Maintenance Report</p>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col w-full p-3">
        <div className="w-full flex justify-between">
          <Input
            color="default"
            startContent={<SearchIcon className="mr-2" />}
            placeholder="Type to search..."
            className="text-default-600 w-64"
          >
            Ok
          </Input>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="group flex items-center hover:cursor-pointer mr-4">
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform mr-3"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <div className="flex flex-col">
                  <p className="text-sm font-bold text-black">Omar Casey</p>
                  <p className="text-sm text-default-500 group-hover:text-black transition-all">
                    Super Admin
                  </p>
                </div>
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="shadow">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold text-black">Signed in as</p>
                <p className="font-semibold text-black">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings" className="text-black">
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings" className="text-black">
                Team Settings
              </DropdownItem>
              <DropdownItem key="analytics" className="text-black">
                Analytics
              </DropdownItem>
              <DropdownItem key="system" className="text-black">
                System
              </DropdownItem>
              <DropdownItem key="configurations" className="text-black">
                Configurations
              </DropdownItem>
              <DropdownItem key="help_and_feedback" className="text-black">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger" className="text-red-500">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Divider className="mt-2 -mx-3" />
        {children}
      </div>
    </div>
  );
};

export default Shell;
