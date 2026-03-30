"use client";
import React from 'react'
import { FloatingNav } from "./ui/floating-navbar";

const Navbar = () => {
    const navItems = [
        {
          name: "About",
          link: "about",
        },
        {
          name: "Experience",
          link: "work",
        },
        {
          name: "Projects",
          link: "projects",
        },
        {
          name: "Skills",
          link: "skills",
        },
        {
          name: "Contact",
          link: "socials",
        },
      ];

  return (
    <div>
      <FloatingNav navItems={navItems} />
    </div>
  )
}

export default Navbar
