import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

interface DiagnosticListProps {
  diagnostics: Diagnostic[];
}

const DiagnosticList = ({ diagnostics }: DiagnosticListProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 space-y-4">
      <h2 className="text-2xl font-extrabold">Diagnostic List</h2>

      <div className="max-h-[300px] overflow-y-auto px-4">
        <Table>
          <TableHeader className="px-4 mx-4 space-x-3">
            <TableRow className="rounded-2xl overflow-hidden px-4 mx-4 space-x-3">
              <TableHead className="font-bold h-14 bg-[#F6F7F8] first:rounded-l-full last:rounded-r-full">
                Problem/Diagnosis
              </TableHead>
              <TableHead className="font-bold h-14 bg-[#F6F7F8]">
                Description
              </TableHead>
              <TableHead className="font-bold h-14 bg-[#F6F7F8] first:rounded-l-full last:rounded-r-full">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {diagnostics.map((diagnostic, index) => (
              <TableRow key={index} className="hover:bg-transparent">
                <TableCell className="font-medium py-6">
                  {diagnostic.name}
                </TableCell>
                <TableCell className="text-gray-600 py-6">
                  {diagnostic.description}
                </TableCell>
                <TableCell className="py-6">{diagnostic.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DiagnosticList;
