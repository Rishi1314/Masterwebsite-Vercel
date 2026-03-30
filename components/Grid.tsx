import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Grid = () => {
  return (
    <div id="about" className="bg-[#05060f] py-16 px-4 md:px-8">
      <BentoGrid className="max-w-6xl mx-auto w-full">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            className={item.className}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const items = [
  {
    id: 1,
    title:
      "Hi, I'm Rishi Raj Bobbarapalli! I'm a CS grad student passionate about AI, full-stack dev, and building things that actually ship. I love working across the stack — from microservices and distributed systems to polished UIs. When I'm not coding, you'll find me on the basketball court or exploring new ideas with friends. It's all about learning, growing, and making an impact.",
    description: "Who am I?",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start text-base sm:text-lg lg:text-xl text-white/85",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "text-white font-bold text-xl justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-indigo-400 text-xl font-bold",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "📍 Charlotte, NC",
    description: "Currently in",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "text-white font-bold text-xl justify-start",
  },
  {
    id: 5,
    title: "Shipping in Go",
    description: "What I'm building now",
    className: "relative md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center font-bold text-white text-xl md:justify-start lg:justify-center",
    img: "/b5.svg",
  },
  {
    id: 6,
    title: "Open to collabs, convos & coffee chats ☕",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center text-base sm:text-lg lg:text-xl font-semibold text-white md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export default Grid;
