"use client";

import React, { useState } from "react";
import { Search, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { Shape } from "@/components/ui/shape";
import { Tab } from "@/components/ui/tab";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";

export default function CoursesPage() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  // mock data
  const courses = Array.from({ length: 500 }).map((_, i) => ({
    id: `U_32132${i}`,
    name: `Nguyen Van A ${i + 1}`,
    school: "Information Technology",
    totalRegistration: `${Math.floor(Math.random() * 100)}`,
  }));

  const filteredCourses = courses.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.name.toLowerCase().includes(query) ||
      course.id.toLowerCase().includes(query) ||
      course.school.toLowerCase().includes(query)
    );
  });

  // pagination
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const safeTotalPages = totalPages > 0 ? totalPages : 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= safeTotalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="text-white font-sans relative overflow-hidden">
      <Shape />
      <div className="w-full mx-auto">
        <div className="flex items-center w-full pl-0 justify-between relative z-10">
          <div>
            <Tab variant="start" active={true} onClick={() => {}} label="Courses" />
          </div>

          <div className="relative w-64 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search by ID, Name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-9 bg-zinc-800/50 rounded-2xl focus-visible:ring-zinc-600 border-zinc-300 text-white placeholder:text-zinc-500 h-9"
            />
          </div>
        </div>

        <div className="bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border-0 text-white shadow-xxl shadow-black/30 rounded-b-xl rounded-tr-xl rounded-tl-none relative z-0">
          <div className="animate-in fade-in zoom-in-95 duration-300 h-full">
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-center h-16 text-base font-semibold text-zinc-300">
                    Course Id
                  </TableHead>
                  <TableHead className="h-16 text-center text-base font-semibold text-zinc-300">
                    Course Name
                  </TableHead>
                  <TableHead className="h-16 text-center text-base font-semibold text-zinc-300">
                    School
                  </TableHead>
                  <TableHead className="h-16 text-center text-base font-semibold text-zinc-300">
                    Registration
                  </TableHead>
                  <TableHead className="h-16 text-base text-center font-semibold text-zinc-300 pr-4">
                    Detail
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {currentCourses.length > 0 ? (
                  currentCourses.map((course, index) => (
                    <TableRow
                      key={course.id}
                      className="border-zinc-800 hover:bg-zinc-800/50 transition-colors"
                      style={{
                        backgroundColor: index % 2 !== 0 ? "transparent" : "#3f403d",
                      }}
                    >
                      <TableCell className="font-sm text-center py-3">
                        {course.id}
                      </TableCell>
                      <TableCell className="text-center font-sm py-3">
                        {course.name}
                      </TableCell>
                      <TableCell className="text-center font-sm py-3">
                        {course.school}
                      </TableCell>
                      <TableCell className="text-center font-sm py-3">
                        {course.totalRegistration}
                      </TableCell>
                      <TableCell className="text-center py-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-zinc-700 text-zinc-400 hover:text-white"
                          onClick={() => router.push(`/dashboard/courses/${course.id}`)}
                        >
                          <Eye className="w-5 h-5" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-zinc-500">
                      No results found for &quot;{searchQuery}&quot;
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={safeTotalPages}
          onPageChange={handlePageChange}
          className="mt-4"
        />
      </div>
    </div>
  );
}
