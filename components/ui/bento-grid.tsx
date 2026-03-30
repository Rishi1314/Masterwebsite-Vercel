"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { BackgroundBeams } from "./background-beams";
import GitHubCalendar from "react-github-calendar";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-5 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

/* Per-card background styles — all unified to deep navy-indigo palette */
function cardStyle(id: number): React.CSSProperties {
  if (id === 1) return {
    background: "linear-gradient(145deg, #0c0d22 0%, #0f1030 60%, #0a0b1e 100%)",
    border: "1px solid rgba(129,140,248,0.12)",
  };
  if (id === 2) return {
    background: "linear-gradient(145deg, #080918 0%, #0c0d24 100%)",
    border: "1px solid rgba(129,140,248,0.1)",
  };
  if (id === 3) return {
    background: "linear-gradient(145deg, #0c0920 0%, #110f2e 100%)",
    border: "1px solid rgba(167,139,250,0.15)",
  };
  if (id === 4) return {
    background: "linear-gradient(145deg, #060f18 0%, #0b1a28 100%)",
    border: "1px solid rgba(34,211,238,0.15)",
  };
  if (id === 5) return {
    background: "linear-gradient(145deg, #0a0a1a 0%, #0d0d24 100%)",
    border: "1px solid rgba(129,140,248,0.12)",
  };
  /* id === 6 */
  return {
    border: "1px solid rgba(129,140,248,0.12)",
  };
}

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  /* Updated stacks to match actual skills */
  const leftLists  = ["TypeScript", "Go", "Python"];
  const rightLists = ["Next.js", "FastAPI", "Redis"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rishirajprof@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-2xl group/bento hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 justify-between flex flex-col space-y-4",
        className
      )}
      style={cardStyle(id)}
    >
      {/* Top highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none" />

      {/* Background beams on card 5 — dimmed so text stays readable */}
      {id === 5 && <div className="opacity-30"><BackgroundBeams /></div>}

      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
        {/* Optional background image */}
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt=""
              className={cn(imgClassName, "object-cover object-center opacity-30")}
            />
          )}
        </div>

        {/* Spare image */}
        <div className={`absolute right-0 -bottom-5 ${id === 5 ? "w-full opacity-25" : ""}`}>
          {spareImg && (
            <img src={spareImg} alt="" className="object-cover object-center w-full h-full" />
          )}
        </div>

        {/* Card 6: gradient animation background */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none" />
          </BackgroundGradientAnimation>
        )}

        {/* Content */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-1 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 py-5 lg:p-8"
          )}
        >
          {/* Description label */}
          <div
            className={cn(
              "font-sans text-xs md:text-sm z-10 mb-2",
              id === 4
                ? "text-cyan-300 font-semibold uppercase tracking-widest"
                : "text-white/55 font-medium uppercase tracking-wider"
            )}
          >
            {description}
          </div>

          {/* Title / main text */}
          <div className="font-sans z-10 leading-relaxed">
            {title}
          </div>

          {/* Card 2: GitHub contribution calendar */}
          {id === 2 && (
            <div className="mt-4 z-10 scale-90 origin-left">
              <GitHubCalendar
                username="rishi1314"
                hideColorLegend
                colorScheme="dark"
                theme={{
                  dark: ["#0d0e20", "#312e81", "#4338ca", "#6366f1", "#a5b4fc"],
                }}
              />
            </div>
          )}

          {/* Card 3: Tech stack pills */}
          {id === 3 && (
            <div className="flex gap-2 lg:gap-3 w-fit absolute -right-2 top-8">
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-sm rounded-xl text-center text-indigo-300 bg-indigo-500/15 border border-indigo-500/20 whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-3 px-3 rounded-xl bg-indigo-500/5" />
              </div>
              <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                <span className="py-3 px-3 rounded-xl bg-violet-500/5" />
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-xs lg:text-sm rounded-xl text-center text-violet-300 bg-violet-500/15 border border-violet-500/20 whitespace-nowrap"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Card 6: copy email button */}
          {id === 6 && (
            <div className="mt-5 relative z-10">
              <MagicButton
                title={copied ? "Copied! ✅" : "Copy my email"}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#0a0b1e]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
