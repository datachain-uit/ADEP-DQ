"use client";

import { useState } from "react";

import { Tab } from "@/components/ui/tab";
import { Shape } from "@/components/ui/shape";
import CourseDashboard from "@/components/course-detail/basic-info";
import { useParams } from "next/navigation";
import UserCourse from "@/components/course-detail/user-course";

export default function DetailCoursePage() {
  const params = useParams();
  const courseId = params.courseId as string;

  const [activeTab, setActiveTab] = useState<"Course Infomation" | "User Infomation">(
    "Course Infomation"
  );

  return (
    <div
      className="w-full font-sans relative text-white"
      style={{
        background: "bg-[#292B2A]/50",
      }}
    >
      <Shape />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight drop-shadow-md">
            Course Details
          </h1>
          <p className="text-zinc-500 text-sm font-medium italic">
            Detailed information about the course and enrolled students.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex items-end w-full pl-0 relative z-10">
          <Tab
            variant="start"
            active={activeTab === "Course Infomation"}
            onClick={() => setActiveTab("Course Infomation")}
            label="Course Infomation"
          />
          <Tab
            variant="middle"
            active={activeTab === "User Infomation"}
            onClick={() => setActiveTab("User Infomation")}
            label="User Infomation"
          />
        </div>

        <div
          className={`
            bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border-0 text-white shadow-xxl shadow-black/30
            rounded-b-xl rounded-tr-xl 
            ${activeTab === "Course Infomation" ? "rounded-tl-none" : "rounded-tl-xl"} 
            p-4 md:p-6 
            min-h-[400px] 
            relative z-0
          `}
        >
          <div className="animate-in fade-in zoom-in-95 duration-300 h-full pt-2">
            {activeTab === "Course Infomation" && <CourseDashboard />}
            {activeTab === "User Infomation" && <UserCourse id={courseId} />}
          </div>
        </div>
      </div>
    </div>
  );
}
