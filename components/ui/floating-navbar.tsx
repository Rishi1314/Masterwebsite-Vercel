"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

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
      <motion.nav
        aria-label="Main"
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
        {navItems.map((navItem) => (
          <a
            key={navItem.link}
            href={`#${navItem.link}`}
            className={cn(
              "relative flex items-center px-2 sm:px-3 py-1.5 rounded-lg",
              "text-white/50 hover:text-white hover:bg-white/[0.06]",
              "transition-all duration-200 text-xs sm:text-sm font-medium cursor-pointer"
            )}
          >
            <span>{navItem.name}</span>
          </a>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};