"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import CustomLabel from "./Label";

export const description = "A radial chart with stacked sections";

const chartConfig = {
  desktop: {
    label: "Oui",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Non",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Component({
  oui,
  non,
  autour = false,
}: {
  oui: number;
  non: number;
  autour?: Boolean;
}) {
  const pOui = ((oui / (oui + non)) * 100).toFixed(0);
  const pNon = ((non / (oui + non)) * 100).toFixed(0);
  const chartData = [{ month: "", oui: oui, non: non }];
  const totalVotants = chartData[0].oui + chartData[0].non;

  return (
    <div className=" flex flex-col mx-auto bg-neutral-900 max-w-[300px] border rounded-xl text-white shadow-lg  dark:border-neutral-400 border-transparent">
      <div className="flex flex-row justify-between pt-4 px-5 ">
        <CustomLabel className="bg-neutral-800 border border-amber-200 text-amber-200">
          Oui {pOui}%
        </CustomLabel>
        <CustomLabel className="bg-neutral-800 border border-indigo-400 text-indigo-400">
          Non {pNon}%
        </CustomLabel>
      </div>
      <ChartContainer
        config={chartConfig}
        className="static h-full w-full min-h-52"
      >
        <RadialBarChart
          data={chartData}
          endAngle={180}
          innerRadius={80}
          outerRadius={100}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 20}
                        className=" text-lg fill-neutral-400 "
                      >
                        {totalVotants.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 0}
                        className=" text-lg fill-neutral-400"
                      >
                        votants
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 30}
                        className=" text-sm fill-neutral-700"
                      >
                        4 abstentions
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="non"
            stackId="a"
            cornerRadius={5}
            className={
              oui >= non
                ? "stroke-transparent stroke-1 fill-neutral-700 static"
                : "stroke-transparent stroke-1 fill-indigo-400 static"
            }
          />
          <RadialBar
            dataKey="oui"
            stackId="a"
            cornerRadius={5}
            className={
              oui >= non
                ? "stroke-transparent stroke-1 fill-amber-200 static"
                : "stroke-transparent stroke-1 fill-neutral-700 static"
            }
          />
        </RadialBarChart>
      </ChartContainer>
      <div className="-mt-14 flex flex-col">
        <hr className="flex mx-auto border-neutral-700 w-4/5  " />
        <p className="flex justify-center m-3 py-2">
          {autour ? "Dans votre circonscription" : "Vue d'ensemble"}
        </p>
      </div>
    </div>
  );
}
