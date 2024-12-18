"use client";
import Image from "next/image";
import { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-24 pt-10 bg-gradient-to-r from-sky-400 to-blue-500">
      <Navbar isBordered className="max-w-7xl rounded-full">
        <NavbarBrand>
          <p className="font-semibold text-lg text-blue-950">Optimus Paper</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-12" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/pricing" className="">
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/example" className="">
              Documents
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/lapsereport" className="">
              Lapse Report
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/signup" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <div class="mx-auto max-w-2xl py-24">
        <Image
          src="/LogoOptimus.png"
          width={3638}
          height={733}
          className="pb-36"
        />
      </div>
    </main>
  );
}
