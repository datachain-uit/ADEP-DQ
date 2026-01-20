"use client";

import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import CustomLegend from "@/components/custom-legend";
import {
  Activity,
  ChevronRight,
  Database,
  GraduationCap,
  Users,
} from "lucide-react";
import { Tab } from "@/components/ui/tab";
import { Shape } from "@/components/ui/shape";
import Link from "next/link";
import { CustomLineChart } from "@/components/line-chart";
import { RateBarChart } from "@/components/rate-bar-chart";
import { CustomPieChart } from "@/components/pie-chart";

// --- DỮ LIỆU GIẢ LẬP (MOCK DATA) ---

const lineData = [
  [
    { name: "Jun 2020", score: 66668 },
    { name: "Jul 2020", score: 61372 },
    { name: "Aug 2020", score: 94924 },
    { name: "Sep 2020", score: 243650 },
    { name: "Oct 2020", score: 31650 },
    { name: "Nov 2020", score: 22438 },
    { name: "Dec 2020", score: 794 },
  ],
];

const labelData = [
  { name: "Excellent", value: 0.1, color: "#67AA50" },
  { name: "Good", value: 0.26, color: "#EFC690" },
  { name: "Failed", value: 99.64, color: "#F5B562" },
];

const barChartData = [
  { name: "06/2020", rate: 30 },
  { name: "07/2020", rate: 96 },
  { name: "08/2020", rate: 20 },
  { name: "09/2020", rate: 80 },
  { name: "10/2020", rate: 55 },
  { name: "11/2020", rate: 90 },
  { name: "12/2020", rate: 70 },
];

const courseData = [
  { courseId: "C_936971", totalRegistration: 209703, passRate: 12 },
  { courseId: "C_697791", totalRegistration: 92350, passRate: 18 },
  { courseId: "C_801420", totalRegistration: 33911, passRate: 25 },
  { courseId: "C_696942", totalRegistration: 31335, passRate: 22 },
  { courseId: "C_696597", totalRegistration: 27996, passRate: 15 },
  { courseId: "C_707373", totalRegistration: 27470, passRate: 30 },
  { courseId: "C_696724", totalRegistration: 26440, passRate: 19 },
  { courseId: "C_947252", totalRegistration: 21917, passRate: 17 },
  { courseId: "C_707456", totalRegistration: 21140, passRate: 23 },
  { courseId: "C_1822804", totalRegistration: 20058, passRate: 14 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-800 border border-zinc-700 p-2 rounded shadow-md text-xs ">
        <p className="font-semibold mb-1">{label}</p>
        <p style={{ color: payload[0].color }}>
          {payload[0].name}: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

const stats = [
  {
    label: "Dataset",
    val: "MOOCCubeX",
    sub: "Online learning data",
    icon: Database,
  },
  {
    label: "Total Students",
    val: "2,324,544",
    sub: "active in system",
    icon: Users,
  },
  {
    label: "Avg Score",
    val: "0.66",
    sub: "+2.1% from last month",
    icon: GraduationCap,
  },
];

export default function OverviewPage() {
  return (
    <div className=" space-y-6 ">
      <h1 className="text-3xl font-bold  mb-2 tracking-tight drop-shadow-md">
        Overview
      </h1>

      {/* Row 1: 4 Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        {stats.map((item, i) => (
          <StatCard
            key={i}
            value={item.val}
            label={item.label}
            subtext={item.sub}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="  grid grid-cols-1  md:grid-cols-[2fr_1fr]  gap-6 w-full">
        <div className="grid grid-cols-1 lg:grid-row-[2fr_fr] auto-rows-min  gap-y-6">
          {/* Line Chart Area - Chiếm 2 phần */}
          <CustomLineChart
            data={lineData}
            labels={["Enrollment"]}
            title="Monthly Student Enrollment in Courses Nearly"
            className="h-[450px]"
          />

          <div className="grid grid-cols-1  lg:grid-cols-[2fr_4fr] auto-rows-min gap-6">
            {/* Pass Rate Gauge */}
            <Card className="h-full  bg-[linear-gradient(to_bottom,#2A2C2B_10%,#323734_100%)] border-0 shadow-xl shadow-black/30">
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  Pass Rate Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-46 h-36 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      className="text-zinc-800"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="14"
                      fill="transparent"
                      strokeDasharray={377}
                      strokeDashoffset={377 - (377 * 0.1) / 100}
                      className="text-green-500 transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <span className="text-3xl font-bold ">0.1%</span>
                  </div>
                </div>
                <p className="text-sm text-zinc-400">
                  Total pass rate this month
                </p>
              </CardContent>
            </Card>

            {/* monthly top 7 pass rate */}
            <RateBarChart
              data={barChartData}
              title="Top 7 Monthly Pass Rate of Users"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-[2fr_3fr] gap-6">
          {/* label distribution */}
          <CustomPieChart
            data={labelData}
            title="Learning outcome distribution"
          />
          {/* Leaderboard Table */}
          <Shape />
          <div className="w-full  mx-auto">
            <div className="flex items-center w-full pl-0 justify-between relative z-10">
              <>
                <Tab
                  variant="start"
                  active={true}
                  onClick={() => {}}
                  label="Top  10 courses"
                />
              </>
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-sm text-zinc-400 p-0"
              >
                <Link href="/dashboard/courses">
                  Show more
                  <ChevronRight className="ml-1 text-[var(--text-secondary)]" />
                </Link>
              </Button>
            </div>

            <div
              className={`
            bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border-0 text-white shadow-xxl shadow-black/30
            rounded-b-xl rounded-tr-xl rounded-tl-none 
            pt-4
            relative z-0

          `}
            >
              <div className="animate-in fade-in zoom-in-95 duration-300 h-full ">
                <Table>
                  <TableHeader>
                    <TableRow className=" border-zinc-800 hover:bg-transparent">
                      <TableHead className="pl-6  h-8 text-sm font-semibold py-6 ">
                        Course Id
                      </TableHead>
                      <TableHead className=" h-8  text-center text-sm  font-semibold">
                        Total Registration
                      </TableHead>
                      <TableHead className="  h-8 text-sm text-right font-semibold pr-4 ">
                        Pass Rate
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courseData.map((row, index) => (
                      <TableRow
                        key={row.courseId}
                        className="border-zinc-800 w-full hover:bg-zinc-800/50 transition-colors  "
                        style={{
                          backgroundColor:
                            index % 2 !== 0 ? "transparent" : "#ffffff3b",
                        }}
                      >
                        <TableCell className=" py-2 text-left text-zinc-300 pl-6">
                          {row.courseId}
                        </TableCell>
                        <TableCell className=" text-center text-zinc-400">
                          {row.totalRegistration}
                        </TableCell>
                        <TableCell className=" text-right font-bold text-green-400 pr-6">
                          {row.passRate}%
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
