"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartContainer } from "@/components/ui/chart";

interface SkillsRadarChartProps {
  data: any[];
  config: any;
  radarName: string;
  radarDataKey: string;
  dataKey: string;
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border rounded-lg shadow-lg w-full min-w-[120px] p-2">
        <p className="font-semibold">{payload[0].payload.skill}</p>
        {payload.map((entry, index) => {
          return (
            <p
              key={index}
              className="text-xs font-semibold flex items-center gap-1 justify-between w-full"
            >
              <span className="text-muted-foreground">{entry.name}:</span>
              <span>{entry.value}%</span>
            </p>
          );
        })}
      </div>
    );
  }
  return null;
};

export function SkillsRadarChart({
  data,
  config,
  radarName,
  radarDataKey,
  dataKey,
}: SkillsRadarChartProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-xl font-bold">{radarName}</h2>
      <ChartContainer
        config={config}
        className="h-[170px] md:h-[350px] w-full max-w-[280px] md:max-w-[500px]"
      >
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={dataKey} />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Radar
            name={radarName}
            dataKey={radarDataKey}
            stroke={config[radarDataKey]?.color}
            fill={config[radarDataKey]?.color}
            fillOpacity={0.5}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ChartContainer>
    </div>
  );
}
