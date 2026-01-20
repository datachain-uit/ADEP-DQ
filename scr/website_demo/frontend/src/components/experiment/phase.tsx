"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PHASE_DATA } from "../../../../data/experiment";

const METRICS = ["Accuracy", "BalancedAcc", "F1-Score Macro", "MCC", "Kappa"];

const MODELS_CONFIG = {
  LightGNB: "#F5B562",
  "Random Forest": "#67AA50",
  RNN: "#D21B1B",
  LSTM: "#A3B79C",
  GRU: "#EFC690",
  BiLSTM: "#FFFCE6",
};

interface PhaseProps {
  version?: string;
}

export const Phase = ({ version = "V0" }: PhaseProps) => {
  const [activeMetric, setActiveMetric] = useState("Accuracy");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentData = PHASE_DATA[version]?.[activeMetric] || PHASE_DATA["V0"]["Accuracy"];

  if (!mounted) return <div className="h-full w-full bg-[#292B2A]" />;

  return (
    <div className="h-full flex flex-col w-full">
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {METRICS.map((metric) => (
          <button
            key={metric}
            onClick={() => setActiveMetric(metric)}
            className={`
              px-7 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border
              ${
                activeMetric === metric
                  ? "bg-[#F5B562] text-[#2A2C2B] border-[#F5B562] shadow-[0_0_10px_rgba(245,181,98,0.4)]"
                  : "bg-transparent text-[#FFFCE6] border-[#A3B79C]/30 hover:border-[#F5B562] hover:text-[#F5B562]"
              }
            `}
          >
            {metric}
          </button>
        ))}
      </div>

      <div className="flex-1 w-full min-h-[400px] flex flex-col">
        <h3 className="text-[#A3B79C] text-sm font-medium mb-4 pl-2 flex items-center gap-2">
          Phase Trend Analysis:{" "}
          <span className="text-[#FFFCE6] ml-1">{activeMetric}</span>
        </h3>

        <div className="flex-1 w-full flex flex-col">
          <ResponsiveContainer width="100%" height={360}>
            <LineChart
              data={currentData}
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#A3B79C"
                opacity={0.15}
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#A3B79C"
                fontSize={11}
                tickLine={false}
                axisLine={{ stroke: "#A3B79C", opacity: 0.3 }}
                dy={10}
              />
              <YAxis
                stroke="#A3B79C"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => val.toFixed(2)}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#2A2C2B",
                  borderColor: "#67AA50",
                  color: "#FFFCE6",
                  borderRadius: "8px",
                  fontSize: "12px",
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.8)",
                }}
                itemStyle={{ padding: 0 }}
                formatter={(val: number) => val.toFixed(5)}
              />

              {Object.entries(MODELS_CONFIG).map(([modelName, color]) => (
                <Line
                  key={modelName}
                  type="monotone"
                  dataKey={modelName}
                  stroke={color}
                  strokeWidth={2}
                  dot={{
                    r: 3,
                    fill: "#2A2C2B",
                    stroke: color,
                    strokeWidth: 2,
                  }}
                  activeDot={{
                    r: 5,
                    fill: color,
                    stroke: "#FFFCE6",
                  }}
                  animationDuration={1500}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>

          <div className="flex flex-wrap justify-center gap-6 mt-2 pt-4 border-t border-zinc-800/50">
            {Object.entries(MODELS_CONFIG).map(([name, color]) => (
              <div key={name} className="flex items-center gap-1.5 cursor-default">
                <span
                  className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: color }}
                />
                <span className="text-zinc-300 font-medium text-xs">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
