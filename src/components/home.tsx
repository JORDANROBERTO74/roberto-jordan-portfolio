"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { socialMedias } from "@/components/common/socialMedias";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMessages, useLocale } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import TypewriterAnimation from "@/components/typewriterAnimation";
import ProjectCard from "@/components/projectCard";

export default function Home() {
  const locale = useLocale();
  const router = useRouter();
  const messages = useMessages();

  const object: any = messages?.home;
  const projects: any = messages?.projects;
  const reversedProjects = projects?.slice().reverse();
  const projectList = reversedProjects?.slice(0, 3);

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 4200);
  }, []);

  return (
    <div>
      <div className="w-full h-[100vh] flex items-center justify-center -mt-[20vh]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <TypewriterAnimation
              texts={[
                {
                  type: "h1",
                  content: object?.title,
                  className:
                    "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none",
                },
              ]}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="mx-auto max-w-[700px] text-gray-500 text-xl dark:text-gray-400"
            >
              {object?.subtitle}
            </motion.p>
          </div>
          <div className="flex items-center gap-4">
            {socialMedias?.map((socialMedia, index) => {
              const delay = index * 0.5 * 1000;

              return (
                <TooltipProvider key={socialMedia?.name}>
                  <Tooltip>
                    <TooltipTrigger
                      asChild
                      style={{
                        transitionDelay: `${delay}ms`,
                      }}
                      className={`transition duration-300 ease-in-out ${
                        isVisible ? "opacity-100" : "opacity-0 cursor-default"
                      }`}
                    >
                      <Link
                        key={socialMedia?.name}
                        href={socialMedia?.url}
                        target="_blank"
                      >
                        <Button variant="outline" size="icon">
                          {socialMedia?.icon}
                          <span className="sr-only">{socialMedia?.name}</span>
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>{socialMedia?.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full h-full md:min-h-[100vh] flex flex-col gap-6 items-center justify-center py-10 md:py-0">
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
            <span>
              <Link
                target="_blank"
                href={object?.projects?.emailButton?.href}
                className="text-primary hover:underline"
              >
                {object?.projects?.emailButton?.label}
              </Link>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList?.map((project: any) => (
            <ProjectCard key={project?.name} project={project} />
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Button
            onClick={() =>
              router.push(`/${locale}/${object?.projects?.viewAllButton?.href}`)
            }
          >
            {object?.projects?.viewAllButton?.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
