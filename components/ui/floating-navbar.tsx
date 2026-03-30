"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed z-[5000] top-5 inset-x-0 mx-auto items-center justify-evenly",
          "w-[95vw] max-w-2xl",
          "px-3 sm:px-6 py-2.5 gap-1 sm:gap-2",
          "rounded-2xl",
          "shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
          className
        )}
        style={{
          backdropFilter: "blur(20px) saturate(200%)",
          backgroundColor: "rgba(7, 8, 20, 0.85)",
          border: "1px solid rgba(129, 140, 248, 0.15)",
          borderRadius: "16px",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            onClick={e => {
              let div = document.getElementById(navItem.link);
              e.preventDefault()
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              div && div.scrollIntoView();

            }}
            className={cn(
              "relative flex items-center px-2 sm:px-3 py-1.5 rounded-lg",
              "text-white/50 hover:text-white hover:bg-white/[0.06]",
              "transition-all duration-200 text-xs sm:text-sm font-medium cursor-pointer"
            )}
          >
            <span>{navItem.name}</span>
          </Link>
        ))}
        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};