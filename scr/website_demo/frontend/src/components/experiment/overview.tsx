"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Overview = ({ data }: { data: any[] }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-full w-full bg-[#18181b]" />;

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-zinc-400 text-sm font-medium flex items-center gap-2">
          Compare Models (4 phases on average)
        </h3>

        <div className="flex gap-4 text-xs">
          {[
            { label: "BalancedAcc", color: "#67AA50" },
            { label: "F1-Macro", color: "#F5B562" },
            { label: "MCC", color: "#D21B1B" },
            { label: "Kappa", color: "#A3B79C" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <span
                style={{ backgroundColor: item.color }}
                className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"
              ></span>
              <span className="text-zinc-300 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full min-h-[450px]">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 0, right: 30, left: 40, bottom: 0 }}
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
            <XAxis
              type="number"
              stroke="#52525b"
              fontSize={10}
              domain={[0, 1]}
              tickFormatter={(v) => v.toFixed(1)}
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#d4d4d8"
              fontSize={12}
              fontWeight={600}
              width={100}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              cursor={{ fill: "#27272a", opacity: 0.4 }}
              contentStyle={{
                backgroundColor: "#09090b",
                borderColor: "#3f3f46",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              formatter={(value: number) => value.toFixed(5)}
            />
            <Bar
              dataKey="BalancedAcc"
              fill="#67AA50"
              radius={[0, 3, 3, 0]}
              barSize={8}
              animationDuration={1000}
            />
            <Bar
              dataKey="F1Macro"
              fill="#F5B562"
              radius={[0, 3, 3, 0]}
              barSize={8}
              animationDuration={1000}
            />
            <Bar
              dataKey="MCC"
              fill="#D21B1B"
              radius={[0, 3, 3, 0]}
              barSize={8}
              animationDuration={1000}
            />
            <Bar
              dataKey="Kappa"
              fill="#A3B79C"
              radius={[0, 3, 3, 0]}
              barSize={8}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
