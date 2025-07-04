import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
const Grid = () => {
    return (
      <div id="about" className=" bg-[#010307] rounded-b-[30px] pb-5">
        
            <BentoGrid className="w-[70vw]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          id={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          imgClassName={item.imgClassName}
          // header={item.header}
          //   icon={item.icon}
          className={item.className}
          titleClassName={item.titleClassName}
        />
      ))}
    </BentoGrid>
      </div>
    
  )
}

// const Skeleton = () => (
//     <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
//   );
  const items = [
    {
    id: 1,
      title: "Hi, I'm Rishi Raj Bobbarapalli! I'm a Computer Science grad student who's passionate about AI, web development, and using technology to solve real-world problems. I love building things that make a difference and sharing knowledge through workshops and collaboration. When I'm not coding or brainstorming ideas, you'll probably find me on the basketball court or diving into fun challenges with friends. For me, it's all about learning, growing, and making an impact while having a little fun along the way!",
    description: "Who am I?",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start sm:text-lg  lg:text-2xl text-[#fff]",
    // img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "text-white font-bold text-2xl justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 bg-white md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-[#0D92F4] text-xl  font-bold",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Charlotte, NC",
    description: "currently in",
    className: " lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "text-white font-bold text-2xl justify-start",
    // img: "/grid.svg",
    // spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Learning GoLang",
    description: "What am i upto now?",
    className: "relative  md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center font-bold text-white text-xl md:justify-start lg:justify-center",
    img: "/b5.svg",
    // spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's Talk.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center sm:text-lg lg:text-xl font-bold text-white md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
    
  ];
export default Grid