"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Home, User } from "@geist-ui/icons";
import { Tabs } from "@geist-ui/core";

const Navbar = () => {
  // const links = [
  //   { label: "Home", url: "/" },
  //   { label: "Cities", url: "/" },
  //   { label: "Listings", url: "/" },
  //   { label: "Policy", url: "/" },
  //   { label: "Blog", url: "/" },
  // ];
  return (
    <nav className="flex flex-col w-full z-30 fixed bg-white shadow-lg ">
      {/* top */}
      <div className="w-full flex justify-between items-center text-white bg-darkBlue px-8 py-2 md:px-16 lg:px-32">
        <h1>
          <span>Kigali, RWANDA kk509st</span>
        </h1>
        <div className="flex gap-4">
          <span>+250782454192</span>
          <span>support@alustudent.com</span>
        </div>
      </div>
      <div
        className="px-8
        flex flex-row justify-between py-4 md:px-16 lg:px-32"
      >
        <div className="w-full flex flex-row justify-between">
          <div className="flex gap-4 text-lg font-normal items-center">
            {/* {links.map((items, i) => (
              <Link key={i} href={"/"} className="">
                <Tabs initialValue="1">
                  <Tabs.Item label={items.label} value={i.toString()}>
                  </Tabs.Item>
                </Tabs>
              </Link>
            ))} */}
            <Tabs initialValue="1">
              <Link href={"/home"}>
                <Tabs.Item label="Home" value="1"></Tabs.Item>
              </Link>
              <Link href={""}>
                <Tabs.Item label="About" value="2"></Tabs.Item>
              </Link>
              <Link href={""}>
                <Tabs.Item label="About Us" value="3"></Tabs.Item>
              </Link>
              <Link href={""}>
                <Tabs.Item label="Features" value="4"></Tabs.Item>
              </Link>
              <Link href={""}>
                <Tabs.Item label="Pricing" value="5"></Tabs.Item>
              </Link>
            </Tabs>
          </div>
          <h1 className="text-3xl font-bold">3steps</h1>
          <div className="flex gap-4">
            <Button variant={"ghost"}>
              <Link href={"/login"} className="flex  gap-2 items-center">
                <User /> Login/Register
              </Link>
            </Button>
            <Button>
              <Home />
              Add Listing
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
