"use client";
import React from 'react'
import { FloatingNav } from "./ui/floating-navbar";
const Navbar = () => {
    const navItems = [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Work",
          link: "/work",
        },
        {
          name: "Projects",
          link: "/projects",
      },
      {
        name: "Socials",
        link:"/socials"
        },
      ];
  return (
    <div>
              <FloatingNav navItems={navItems} />

    </div>
  )
}

export default Navbar