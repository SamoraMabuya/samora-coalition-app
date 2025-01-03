import React from "react";
import Image from "next/image";
import { DiagnosisHistoryEntry, VitalSign } from "@/types/api";

interface VitalSignCardProps {
  icon: string;
  title: string;
  data: VitalSign;
  bgColor: string;
  unit: string;
}

const VitalSignCard = ({
  icon,
  title,
  data,
  bgColor,
  unit,
}: VitalSignCardProps) => {
  return (
    <div className={`${bgColor} p-6 rounded-3xl space-y-4`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={icon} alt={title} width={24} height={24} />
          <h3 className="font-medium">{title}</h3>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold">{data.value}</span>
          <span className="text-lg">{unit}</span>
        </div>
        <span className="text-sm text-gray-600">{data.levels}</span>
      </div>
    </div>
  );
};

interface VitalSignsProps {
  diagnosisHistory: DiagnosisHistoryEntry[];
}
const VitalSigns = ({ diagnosisHistory }: VitalSignsProps) => {
  const latestData = diagnosisHistory[diagnosisHistory.length - 1];

  return (
    <div className="grid grid-cols-3 gap-4">
      <VitalSignCard
        icon="/assets/graphics/respiratory-rate.svg"
        title="Respiratory Rate"
        data={latestData.respiratory_rate}
        bgColor="bg-[#E0F3FA]"
        unit="bpm"
      />
      <VitalSignCard
        icon="/assets/graphics/temperature.svg"
        title="Temperature"
        data={latestData.temperature}
        bgColor="bg-[#FFE6E9]"
        unit="°F"
      />
      <VitalSignCard
        icon="/assets/graphics/heartbpm.svg"
        title="Heart Rate"
        data={latestData.heart_rate}
        bgColor="bg-[#FFE6E9]"
        unit="bpm"
      />
    </div>
  );
};

export default VitalSigns;
