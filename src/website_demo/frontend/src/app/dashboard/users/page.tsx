"use client";

import React, { useState, useMemo } from "react";
import { Search, Eye, Users, CheckCircle } from "lucide-react";
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

export default function UsersPage() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  const users = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: `USR_${1000 + i}`,
      name: `User Name ${i + 1}`,
      email: `user${i + 1}@example.com`,
      completionRate: Math.floor(Math.random() * 100), // Tỷ lệ hoàn thành %
      status: Math.random() > 0.2 ? "Active" : "Inactive",
    }));
  }, []);

  const totalUsers = users.length;
  const avgCompletionRate = (
    users.reduce((acc, curr) => acc + curr.completionRate, 0) / totalUsers
  ).toFixed(1);

  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.id.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const safeTotalPages = totalPages > 0 ? totalPages : 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="text-white font-sans relative overflow-hidden min-h-screen p-4">
      <Shape />
      
      <div className="w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-zinc-800/40 border border-zinc-700 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Users className="text-blue-400 w-6 h-6" />
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Total Users</p>
              <h3 className="text-2xl font-bold">{totalUsers}</h3>
            </div>
          </div>

          <div className="bg-zinc-800/40 border border-zinc-700 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-green-500/20 rounded-xl">
              <CheckCircle className="text-green-400 w-6 h-6" />
            </div>
            <div>
              <p className="text-zinc-400 text-sm">Avg. Completion Rate</p>
              <h3 className="text-2xl font-bold">{avgCompletionRate}%</h3>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full justify-between mb-0">
          <div>
            <Tab variant="start" active={true} onClick={() => {}} label="All Users" />
          </div>

          <div className="relative w-64 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <Input
              placeholder="Search by User ID or Name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-9 bg-zinc-800/50 rounded-2xl focus-visible:ring-zinc-600 border-zinc-700 text-white placeholder:text-zinc-500 h-10"
            />
          </div>
        </div>

        <div className="bg-[linear-gradient(to_bottom,#2A2C2B_70%,#303231_100%)] border border-zinc-800 text-white shadow-2xl rounded-b-xl rounded-tr-xl relative overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="text-center h-14 text-zinc-300 font-semibold">User ID</TableHead>
                <TableHead className="text-left h-14 text-zinc-300 font-semibold">Full Name</TableHead>
                <TableHead className="text-left h-14 text-zinc-300 font-semibold">Email</TableHead>
                <TableHead className="text-center h-14 text-zinc-300 font-semibold">Completion Rate</TableHead>
                <TableHead className="text-center h-14 text-zinc-300 font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user, index) => (
                  <TableRow
                    key={user.id}
                    className="border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
                    style={{
                      backgroundColor: index % 2 === 0 ? "#3f403d" : "transparent",
                    }}
                  >
                    <TableCell className="text-center py-4 font-mono text-sm">{user.id}</TableCell>
                    <TableCell className="text-left py-4 font-medium">{user.name}</TableCell>
                    <TableCell className="text-left py-4 text-zinc-400">{user.email}</TableCell>
                    <TableCell className="text-center py-4">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-16 bg-zinc-700 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="bg-green-500 h-full" 
                            style={{ width: `${user.completionRate}%` }}
                          />
                        </div>
                        <span className="text-xs">{user.completionRate}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center py-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-zinc-700 text-zinc-400 hover:text-white"
                        onClick={() => router.push(`/dashboard/users/${user.id}`)}
                      >
                        <Eye className="w-5 h-5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-32 text-center text-zinc-500">
                    No users found matching &quot;{searchQuery}&quot;
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={safeTotalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}