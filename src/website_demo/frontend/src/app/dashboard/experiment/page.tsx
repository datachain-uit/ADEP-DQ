"use client";

import { useState } from "react";

import { EXPERIMENT_DATA, VERSIONS } from "../../../../../data/experiment";
import { Selector } from "@/components/ui/selector";
import { Tab } from "@/components/ui/tab";
import { Shape } from "@/components/ui/shape";
import { Overview } from "@/components/experiment/overview";
import { Phase } from "@/components/experiment/phase";

export default function ExperimentPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "phase">("overview");
  const [selectedVersion, setSelectedVersion] = useState<string>("V0");

  const currentData = EXPERIMENT_DATA[selectedVersion] || EXPERIMENT_DATA["V0"];

  return (
    <div className="text-white font-sans relative overflow-hidden">
      <Shape />

      <div className="w-full mx-auto mb-8 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
            Experiment Results
          </h1>
          <p className="text-zinc-500 text-sm font-medium italic">
            Comprehensive analysis of model performance metrics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#F5B562] text-sm font-bold uppercase tracking-widest drop-shadow-sm">
            Version :
          </span>
          <Selector
            value={selectedVersion}
            onChange={setSelectedVersion}
            options={VERSIONS}
          />
        </div>
      </div>

      <div className="w-full mx-auto">
        <div className="flex items-end w-full pl-0 relative z-10">
          <Tab
            variant="start"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
            label="Overview"
          />
          <Tab
            variant="middle"
            active={activeTab === "phase"}
            onClick={() => setActiveTab("phase")}
            label="Phase"
          />
        </div>

        <div
          className={`
            bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border-0 text-white shadow-xxl shadow-black/30
            rounded-b-xl rounded-tr-xl 
            ${activeTab === "overview" ? "rounded-tl-none" : "rounded-tl-xl"} 
            p-4 md:p-6 
            min-h-[400px] 
            relative z-0
          `}
        >
          <div className="animate-in fade-in zoom-in-95 duration-300 h-full pt-2">
            {activeTab === "overview" && <Overview data={currentData} />}
            {activeTab === "phase" && <Phase version={selectedVersion} />}
          </div>
        </div>
      </div>
    </div>
  );
}
