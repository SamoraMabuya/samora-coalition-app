"use client";

import Image from "next/image";
import { DiagnosisHistoryEntry } from "@/types/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VitalSigns from "./vitalSigns";

type DiagnosisHistoryProps = {
  diagnosisHistory: DiagnosisHistoryEntry[];
};

type BloodPressureIndicatorProps = {
  color: string;
  label: string;
  value: number;
  levels: string;
  trend: "up" | "down";
};

const BloodPressureIndicator = ({
  color,
  label,
  value,
  levels,
  trend,
}: BloodPressureIndicatorProps) => (
  <div className="space-y-2 py-4 first:pt-0 last:pb-0">
    <div className="flex items-center gap-2 ">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className="font-bold">{label}</span>
    </div>
    <div className="space-y-2 block items-center ">
      <span className="font-bold text-2xl">{value}</span>
      <div className="flex items-center gap-1  pt-1 mt-1">
        <Image
          src={`assets/icons/arrow${trend}.svg`}
          alt={`${trend} Arrow`}
          width={12}
          height={12}
        />
        <span>{levels}</span>
      </div>
    </div>
  </div>
);

const DiagnosisHistory = ({ diagnosisHistory }: DiagnosisHistoryProps) => {
  const chartData = diagnosisHistory.map((entry) => ({
    month: `${entry.month}, ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));

  const latestData =
    diagnosisHistory[diagnosisHistory.length - 1].blood_pressure;

  const bloodPressureData = [
    {
      color: "#C26EB4",
      label: "Systolic",
      value: latestData.systolic.value,
      levels: latestData.systolic.levels,
      trend: "up" as const,
    },
    {
      color: "#7E6CAB",
      label: "Diastolic",
      value: latestData.diastolic.value,
      levels: latestData.diastolic.levels,
      trend: "down" as const,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Diagnosis History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 ">
        <div className="space-y-4">
          <div className="bg-[#F4F0FE] p-6 rounded-2xl">
            <div className="grid grid-cols-[1fr,auto] gap-8">
              <div className="h-64 2-">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Blood Pressure</h3>
                  <button className="flex items-center gap-2">
                    <span>Last 6 months</span>
                    <Image
                      src="assets/icons/expand_more.svg"
                      alt="Expand"
                      width={12}
                      height={12}
                    />
                  </button>
                </div>
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
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                      domain={[60, 180]}
                    />
                    {bloodPressureData.map((item) => (
                      <Line
                        key={item.label}
                        type="monotone"
                        dataKey={item.label.toLowerCase()}
                        stroke={item.color}
                        strokeWidth={2}
                        dot={{ fill: item.color, r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="min-w-[200px]">
                <div className="divide-y divide-gray-200">
                  {bloodPressureData.map((item) => (
                    <BloodPressureIndicator
                      key={item.label}
                      color={item.color}
                      label={item.label}
                      value={item.value}
                      levels={item.levels}
                      trend={item.trend}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <VitalSigns diagnosisHistory={diagnosisHistory} />
      </CardContent>
    </Card>
  );
};

export default DiagnosisHistory;
