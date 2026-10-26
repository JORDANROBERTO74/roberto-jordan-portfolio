"use client";

import React from "react";
import { motion } from "framer-motion";
import TypewriterAnimation from "@/components/typewriterAnimation";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useMessages } from "next-intl";
import ProjectCard from "@/components/projectCard";

const Page = () => {
  const messages = useMessages();

  const object: any = messages?.home;
  const projects: any = messages?.projects;
  const projectList = projects?.slice().reverse();

  return (
    <div>
      <div className="w-full h-full md:h-[82vh] flex items-start justify-center pb-[20vh]">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-6 w-full h-full">
          <div className="flex flex-col justify-center gap-2 w-full h-full">
            <TypewriterAnimation
              texts={[
                {
                  type: "h1",
                  content: object?.title,
                  className: "text-6xl font-bold tracking-tighter md:text-8xl",
                },
                {
                  type: "p",
                  content: object?.subtitle,
                  className: "text-gray-500 text-2xl dark:text-gray-400",
                },
              ]}
            />
            <motion.p
              className="text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5, duration: 1 }}
            >
              {object?.paragraph1}
            </motion.p>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/img/devices.png"
                alt="devices"
                width={450}
                height={316}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-6 items-center justify-center py-10 md:py-0">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-6 justify-between w-full">
            <div className="hidden md:block w-full">
              <Separator />
            </div>
            <div className="text-center text-2xl font-bold w-full md:max-w-fit">
              {object?.projects?.title}
            </div>
            <div className="hidden md:block w-full">
              <Separator />
            </div>
          </div>
          <div className="text-center gap-2 text-gray-500 md:text-xl dark:text-gray-400">
            <span className="mr-2">{object?.projects?.subtitle}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList?.map((project: any) => (
            <ProjectCard key={project?.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
