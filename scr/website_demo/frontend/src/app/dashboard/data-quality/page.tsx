"use client";

import { useState } from "react";
import { Database, Rows3, Columns3 } from "lucide-react";

import { StatCard } from "@/components/ui/stat-card";
import { Tab } from "@/components/ui/tab";
import { Shape } from "@/components/ui/shape";
import { TheorySection } from "@/components/data-quality/theory-section";
import { AccDQSection } from "@/components/data-quality/acc-dq-section";
import { QualityBarChart } from "@/components/data-quality/charts/quality-bar-chart";
import { QualityDonutChart } from "@/components/data-quality/charts/quality-donut-chart";

import { DQ_DATA } from "../../../../../data/quality";

export default function DataQualityPage() {
  const [activeTab] = useState<"overview">("overview");
  const statIcons = [Database, Rows3, Columns3];

  return (
    <div className="text-white font-sans relative overflow-hidden">
      <Shape />

      <div className="w-full mx-auto mb-8 relative z-10">
        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
          Data Quality Analysis
        </h1>
        <p className="text-zinc-500 text-sm font-medium italic">
          Comprehensive validation for MOOCCubeX dataset.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full mx-auto relative z-10">
        {DQ_DATA.headerStats.map((stat, i) => (
          <StatCard key={i} {...stat} icon={statIcons[i]} />
        ))}
      </div>

      <div className="w-full mx-auto">
        <div className="flex items-end relative z-10">
          <Tab
            variant="start"
            active={activeTab === "overview"}
            onClick={() => {}}
            label="Overview"
          />
        </div>

        <div className="bg-[#292B2A] rounded-b-2xl rounded-tr-2xl rounded-tl-none p-6 md:p-10 relative z-0 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] border border-zinc-700/30">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <TheorySection content={DQ_DATA.theory} />
              <QualityBarChart data={DQ_DATA.barChart} />

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                {DQ_DATA.donutCharts.map((chart, index) => (
                  <QualityDonutChart
                    key={index}
                    title={chart.title}
                    percent={chart.percent}
                    label={chart.label}
                    data={chart.data}
                  />
                ))}
              </div>

              <div className="lg:col-span-2 pt-10 border-t border-white/10">
                <AccDQSection data={DQ_DATA.diagnostic} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
