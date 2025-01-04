import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold">
          Diagnostic List
        </CardTitle>
      </CardHeader>
      <CardContent>
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
                  <TableCell className="py-6">{diagnostic.name}</TableCell>
                  <TableCell className="py-6">
                    {diagnostic.description}
                  </TableCell>
                  <TableCell className="py-6">{diagnostic.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosticList;
