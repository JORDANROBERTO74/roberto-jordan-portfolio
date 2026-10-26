import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { CodeXml, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div key={project.name} className="group relative">
      <Card className="bg-background dark:bg-muted relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-muted-foreground/10 rounded-lg hidden group-hover:flex  justify-center transition-opacity duration-300">
          <div className="flex justify-center gap-4 mt-[90px]">
            <Button
              onClick={() => window.open(project?.code?.url, "_blank")}
              variant="outline"
            >
              <CodeXml className="w-4 h-4 mr-2" /> Code
            </Button>
            <Button
              onClick={() => window.open(project?.demo?.url, "_blank")}
              variant="outline"
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Demo
            </Button>
          </div>
        </div>
        <CardHeader>
          <div className="flex items-center justify-center">
            <Image
              src={project?.image?.url}
              alt={project?.image?.alt || "Project image"}
              width={300}
              height={190}
              className="rounded-lg mb-2"
            />
          </div>
          <CardTitle className="text-xl md:text-2xl">{project?.name}</CardTitle>
          <CardDescription className="text-md">
            {project?.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ProjectCard;
