"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Home, User, Menu, X } from "@geist-ui/icons";
import { DialogDemo } from "./Model";
import Addlistings from "./Addlistings";
import Image from "next/image";
// import { Tabs } from "@geist-ui/core";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home", url: "/" },
    { label: "Cities", url: "#cities" },
    { label: "Listings", url: "#listings" },
    { label: "Policy", url: "/#olicy" },
    { label: "Blog", url: "#blog" },
  ];

  return (
    <nav className="flex flex-col w-full z-30 fixed bg-white shadow-lg">
      {/* Top */}
      <div className="w-full flex justify-between items-center text-white bg-darkBlue px-2 py-2 md:px-16 lg:px-32">
        <p className="uppercase text-sm">Kigali, RWANDA kk509st</p>
        <div className="flex flex-col md:flex-row lg:flex-row gap-0 md:gap-4 lg:gap-4 text-sm">
          <span>+250782454192</span>
          <span>support@alustudent.com</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-2 flex justify-between items-center py-4 md:px-16 lg:px-32">
        <div className="flex flex-col items-center">
          <div className=" h-12 w-24 relative">
            <Image src={'/3steps1.png'} alt="" className="object-contain" fill/>
          </div>

          {/* Action Buttons for Mobile */}
          {isMobileMenuOpen && (
            <div className="flex flex-col items-center gap-2 md:hidden py-4">
              <div className="absolute flex flex-col gap-4 top-56 bg-white p-8 rounded-2xl text-2xl">
                {links.map((link, index) => (
                  <Link key={index} href={link.url} className="text-justify">{link.label}</Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="flex flex-row md:hidden">
          <div className="w-full flex items-center gap-2">
              <User />
              <DialogDemo/>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Links - Mobile & Desktop */}
        {!isMobileMenuOpen && (
          <div
            className={`flex-col md:flex-row flex md:flex gap-x-8 text-lg font-normal items-center ${isMobileMenuOpen ? "flex" : "hidden md:flex"
              }`}
          >
            {links.map((link, index) => (
              <Link key={index} href={link.url}>
                {link.label}
              </Link>
            ))}
          </div>
        )}


        {/* Action Buttons */}
        <div className="hidden md:flex gap-4">
        <div className="w-full flex gap-2 items-center">
              <User />
              <DialogDemo/>
          </div>
          <div className="flex items-center gap-2">
            <Home />
            <Addlistings/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
