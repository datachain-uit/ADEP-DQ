"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  GraduationCap, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Shape } from "@/components/ui/shape";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UserDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const userData = {
    id: id,
    name: "Nguyen Van A",
    email: "nguyenvana@university.edu.vn",
    school: "Information Technology",
    major: "Data Science",
    averageProgress: 65,
    overallRisk: "High", 
  };

  const userCourses = [
    {
      id: "CS101",
      name: "Introduction to Programming",
      progress: 90,
      predictedGrade: "A",
      dropoutRisk: "Low",
    },
    {
      id: "MA202",
      name: "Advanced Mathematics",
      progress: 45,
      predictedGrade: "C-",
      dropoutRisk: "Medium",
    },
    {
      id: "AI303",
      name: "Machine Learning Basic",
      progress: 20,
      predictedGrade: "F",
      dropoutRisk: "High", 
    },
  ];

  const getRiskStyle = (risk: string) => {
    switch (risk) {
      case "High": return "text-red-500 bg-red-500/10 border-red-500/50";
      case "Medium": return "text-yellow-500 bg-yellow-500/10 border-yellow-500/50";
      default: return "text-green-500 bg-green-500/10 border-green-500/50";
    }
  };

  return (
    <div className="text-white font-sans relative overflow-hidden min-h-screen p-6">
      <Shape />

      <div className="max-w-6xl mx-auto relative z-10">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-6 text-zinc-400 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back to List
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-3xl">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mb-4 border-2 border-zinc-700">
                  <User size={48} className="text-zinc-400" />
                </div>
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-zinc-500 text-sm">ID: {userData.id}</p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-zinc-300">
                  <Mail size={18} className="text-zinc-500" />
                  <span className="text-sm">{userData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <GraduationCap size={18} className="text-zinc-500" />
                  <span className="text-sm">{userData.school}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-300">
                  <TrendingUp size={18} className="text-zinc-500" />
                  <span className="text-sm">Major: {userData.major}</span>
                </div>
              </div>
            </div>

            {userData.overallRisk === "High" && (
              <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-2xl flex items-start gap-3">
                <AlertTriangle className="text-red-500 shrink-0" />
                <div>
                  <h4 className="text-red-500 font-bold text-sm">Critical Warning</h4>
                  <p className="text-red-200/70 text-xs mt-1">
                    This user has a high probability of dropping out based on current engagement patterns.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl overflow-hidden">
              <div className="p-6 border-b border-zinc-800">
                <h3 className="text-lg font-semibold">Enrolled Courses & Predictions</h3>
              </div>
              
              <Table>
                <TableHeader className="bg-zinc-800/30">
                  <TableRow className="border-zinc-800">
                    <TableHead className="text-zinc-400">Course</TableHead>
                    <TableHead className="text-center text-zinc-400">Progress</TableHead>
                    <TableHead className="text-center text-zinc-400">Predicted Grade</TableHead>
                    <TableHead className="text-center text-zinc-400">Risk Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userCourses.map((course) => (
                    <TableRow key={course.id} className="border-zinc-800 hover:bg-zinc-800/20">
                      <TableCell>
                        <div>
                          <p className="font-medium">{course.name}</p>
                          <p className="text-xs text-zinc-500">{course.id}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-sm font-mono">{course.progress}%</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={`font-bold text-lg ${course.predictedGrade.includes('F') ? 'text-red-500' : 'text-green-400'}`}>
                          {course.predictedGrade}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium ${getRiskStyle(course.dropoutRisk)}`}>
                          {course.dropoutRisk === "High" && <AlertTriangle size={12} className="mr-1" />}
                          {course.dropoutRisk === "Low" && <CheckCircle size={12} className="mr-1" />}
                          {course.dropoutRisk}
                        </div>
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
  );
}