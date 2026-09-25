"use client";
import { MotionConfig } from "framer-motion";
import React from "react";

/** Makes every framer-motion animation respect the OS "reduce motion" setting. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
