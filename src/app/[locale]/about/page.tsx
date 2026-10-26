"use client";

import React from "react";
import { CardContent, CardDescription } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/ui/card";
import { Layers, Server, SquareTerminal } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterAnimation from "@/components/typewriterAnimation";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SkillsRadarChart } from "@/components/skillsRadarChart";
import { useMessages } from "next-intl";
import Image from "next/image";

const SkillCard = ({
  title,
  icon: Icon,
  description,
  skillTitle,
  skills,
  toolTitle,
  tools,
}: any) => (
  <div>
    <Card className="bg-muted h-full flex flex-col">
      <CardHeader className="flex flex-col gap-4">
        <CardTitle className="text-xl md:text-2xl">
          <div className="flex flex-col gap-4 items-center">
            <div className="rounded-full p-4 w-fit bg-primary/10">
              <Icon />
            </div>
            <div className="text-center">{title}</div>
          </div>
        </CardTitle>
        <CardDescription className="text-md text-center text-primary">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="text-center text-muted-foreground">{skillTitle}</div>
          <div className="text-center">{skills.join(", ")}</div>
          <div className="text-center text-muted-foreground">{toolTitle}</div>
          <div className="text-center flex flex-col gap-2">
            {tools.map((tool: any) => (
              <div key={tool}>{tool}</div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Page = () => {
  const messages = useMessages();

  const object: any = messages?.about;

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
              transition={{ delay: 8.5, duration: 1 }}
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
              <div className="flex items-end w-[250px] h-[350px] md:w-[390px] md:h-[280px] relative">
                <div className="absolute top-0 md:right-0">
                  <div className="relative bg-white dark:bg-muted p-4 rounded-2xl shadow-lg max-w-xs">
                    <TypewriterAnimation
                      texts={[
                        {
                          type: "span",
                          content: object?.avatarDialog?.title,
                          className: "block text-primary font-bold",
                        },
                      ]}
                    />
                    <div className="hidden md:block absolute drop-shadow-md rotate-[15deg] -bottom-[7px] -left-[3px] w-0 h-0 border-t-[15px] border-t-transparent border-l-[20px] border-l-white dark:border-l-muted border-b-[10px] border-b-transparent"></div>
                  </div>
                </div>
                <div className="w-[250px] h-[250px] rounded-full bg-muted">
                  <Image
                    src="/img/avatar.png"
                    alt="avatar"
                    className="absolute top-[70px] md:top-0 object-cover"
                    width={250}
                    height={275}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex items-center justify-center py-5 md:py-20 md:px-5">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full">
          <div className="flex flex-col gap-4 w-full text-center md:text-left md:max-w-[33%]">
            <h2 className="text-3xl font-bold">{object?.design?.title}</h2>
            <div className="flex flex-col gap-2 text-gray-500 text-lg dark:text-gray-400">
              {object?.design?.services?.map((service: any) => (
                <p key={service}>{service}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse md:flex-row gap-6 items-center justify-between w-full">
            <div className="flex justify-center text-center md:text-left md:justify-end w-full">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">
                  {object?.development?.title}
                </h2>
                <div className="flex flex-col gap-2 text-gray-500 text-lg dark:text-gray-400">
                  {object?.development?.services?.map((service: any) => (
                    <p key={service}>{service}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full md:max-w-fit h-full relative">
              <Image
                src="/img/pie-chart.png"
                alt="pie chart"
                width={278}
                height={206}
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="text-white text-sm font-medium absolute top-16 mr-28">
                  {object?.design?.label}
                </div>
                <div className="text-white text-sm font-medium absolute top-28 ml-32">
                  {object?.development?.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-10 items-center justify-center pt-20 md:py-10">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-6 justify-between w-full">
            <div className="hidden md:block w-full">
              <Separator />
            </div>
            <h2 className="text-center text-3xl font-bold w-full md:max-w-fit">
              {object?.skills?.title}
            </h2>
            <div className="hidden md:block w-full">
              <Separator />
            </div>
          </div>
          <div className="text-center gap-2 text-gray-500 md:text-xl dark:text-gray-400">
            <span className="mr-2">{object?.skills?.subtitle}</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 w-full max-w-[800px] flex-wrap">
          {object?.skills?.items?.map((item: any) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 md:py-12">
        <SkillCard
          title={object?.skills?.design?.title}
          icon={Layers}
          description={object?.skills?.design?.description}
          skillTitle={object?.skills?.design?.services?.title}
          skills={object?.skills?.design?.services?.items}
          toolTitle={object?.skills?.design?.tools?.title}
          tools={object?.skills?.design?.tools?.items}
        />
        <SkillCard
          title={object?.skills?.frontend?.title}
          icon={SquareTerminal}
          description={object?.skills?.frontend?.description}
          skillTitle={object?.skills?.frontend?.services?.title}
          skills={object?.skills?.frontend?.services?.items}
          toolTitle={object?.skills?.frontend?.tools?.title}
          tools={object?.skills?.frontend?.tools?.items}
        />
        <SkillCard
          title={object?.skills?.backend?.title}
          icon={Server}
          description={object?.skills?.backend?.description}
          skillTitle={object?.skills?.backend?.services?.title}
          skills={object?.skills?.backend?.services?.items}
          toolTitle={object?.skills?.backend?.tools?.title}
          tools={object?.skills?.backend?.tools?.items}
        />
      </div>

      <div className="flex flex-wrap justify-center items-center py-10">
        <div className="flex flex-col items-center">
          <SkillsRadarChart
            data={object?.skills.design.chartData.data}
            config={{
              value: {
                label: object?.skills?.design?.chartData?.radarName,
                color: "#ABABAB",
              },
            }}
            radarName={object?.skills?.design?.chartData?.radarName}
            radarDataKey={object?.skills?.design?.chartData?.radarDataKey}
            dataKey={object?.skills?.design?.chartData?.dataKey}
          />

          <div className="flex flex-wrap justify-center gap-6 w-full mt-6">
            <div className="h-full">
              <SkillsRadarChart
                data={object?.skills?.frontend?.chartData?.data}
                config={{
                  value: {
                    label: object?.skills?.frontend?.chartData?.radarName,
                    color: "hsl(var(--muted-foreground))",
                  },
                }}
                radarName={object?.skills?.frontend?.chartData?.radarName}
                radarDataKey={object?.skills?.frontend?.chartData?.radarDataKey}
                dataKey={object?.skills?.frontend?.chartData?.dataKey}
              />
            </div>
            <div className="h-full">
              <SkillsRadarChart
                data={object?.skills?.backend?.chartData?.data}
                config={{
                  value: {
                    label: object?.skills?.backend?.chartData?.radarName,
                    color: "hsl(var(--primary))",
                  },
                }}
                radarName={object?.skills?.backend?.chartData?.radarName}
                radarDataKey={object?.skills?.backend?.chartData?.radarDataKey}
                dataKey={object?.skills?.backend?.chartData?.dataKey}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center h-full py-5 md:pt-20 md:py-12">
        <div className="flex flex-col md:flex-row md:flex-row-reverse text-center md:text-left gap-6 md:gap-4 items-center w-full">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col gap-2 w-full md:max-w-[80%]">
              <div className="text-3xl font-bold w-full">
                {object?.random?.title}
              </div>
              <div className="text-gray-500 md:text-xl dark:text-gray-400">
                {object?.random?.items?.map((item: any) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/img/software&coffee.jpg"
              alt="avatar"
              width={460}
              height={258}
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
