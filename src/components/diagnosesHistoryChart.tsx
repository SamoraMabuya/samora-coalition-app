"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { DiagnosisHistoryEntry } from "@/types/api";
import Image from "next/image";
import VitalSigns from "./vitalSigns";

interface DiagnosisHistoryProps {
  diagnosisHistory: DiagnosisHistoryEntry[];
}

const DiagnosisHistoryChart = ({ diagnosisHistory }: DiagnosisHistoryProps) => {
  // Transform the diagnosis history data for the chart
  const chartData = diagnosisHistory.map((entry) => ({
    month: `${entry.month}, ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));

  // Get the latest blood pressure readings
  const latestData =
    diagnosisHistory[diagnosisHistory.length - 1].blood_pressure;

  return (
    <div className="space-y-6 bg-white p-6 rounded-3xl h-fit">
      <h2 className="text-2xl font-extrabold">Diagnosis History</h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">Blood Pressure</h3>
          <div className="flex items-center gap-2">
            <span>Last 6 months</span>
            <img
              src="/assets/icons/expand_more.svg"
              alt="Expand"
              className="w-5 h-5"
            />
          </div>
        </div>

        <div className="bg-[#F4F0FE] p-6 rounded-2xl">
          <div className="grid grid-cols-[1fr,auto] gap-8">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={chartData}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                    minTickGap={40}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      const month = date.toLocaleDateString("en-ZA", {
                        month: "short",
                      });
                      const year = date.toLocaleDateString("en-ZA", {
                        year: "numeric",
                      });
                      return `${month}, ${year}`;
                    }}
                    reversed={true}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                    domain={[60, 180]}
                  />
                  <Line
                    type="monotone"
                    dataKey="systolic"
                    stroke="#C26EB4"
                    strokeWidth={2}
                    dot={{ fill: "#C26EB4", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    stroke="#7E6CAB"
                    strokeWidth={2}
                    dot={{ fill: "#7E6CAB", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-8 min-w-[200px]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C26EB4]" />
                  <span className="font-bold">Systolic</span>
                </div>
                <div className="block items-center gap-2">
                  <span className="font-bold text-2xl">
                    {latestData.systolic.value}
                  </span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/assets/icons/arrowup.svg"
                      alt="Up Arrow"
                      width={12}
                      height={12}
                      className="text-gray-400"
                    />
                    <span>{latestData.systolic.levels}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#7E6CAB]" />
                  <span className="font-bold">Diastolic</span>
                </div>
                <div className="block items-center gap-2">
                  <span className="font-bold text-2xl">
                    {latestData.diastolic.value}
                  </span>
                  <div className="flex items-center gap-1">
                    <Image
                      src="/assets/icons/arrowdown.svg"
                      alt="Down Arrow"
                      width={12}
                      height={12}
                      className="text-gray-400"
                    />
                    <span>{latestData.diastolic.levels}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VitalSigns diagnosisHistory={diagnosisHistory} />
    </div>
  );
};

export default DiagnosisHistoryChart;
