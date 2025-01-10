import Image from "next/image";
import { DiagnosisHistoryEntry, VitalSign } from "@/types/api";
import { Card, CardContent } from "@/components/ui/card";

type VitalSignCardProps = {
  icon: string;
  title: string;
  data: VitalSign;
  bgColor: string;
  unit: string;
};

const VitalSignCard = ({
  icon,
  title,
  data,
  bgColor,
  unit,
}: VitalSignCardProps) => (
  <Card className={`${bgColor}`}>
    <CardContent className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <Image
            className="mb-4"
            src={icon}
            alt={title}
            width={80}
            height={80}
          />
          <h3 className="font-medium">{title}</h3>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-baseline gap-1 mb-8 text-3xl font-extrabold">
          <span>{data.value}</span>
          <span>{unit}</span>
        </div>
        <span className="text-sm text-base-gray">{data.levels}</span>
      </div>
    </CardContent>
  </Card>
);

type VitalSignsProps = {
  diagnosisHistory: DiagnosisHistoryEntry[];
};

const VitalSigns = ({ diagnosisHistory }: VitalSignsProps) => {
  const latestData = diagnosisHistory[diagnosisHistory.length - 1];

  const vitalsData = [
    {
      icon: "assets/graphics/respiratory-rate.svg",
      title: "Respiratory Rate",
      data: latestData.respiratory_rate,
      bgColor: "bg-[#E0F3FA]",
      unit: "bpm",
    },
    {
      icon: "assets/graphics/temperature.svg",
      title: "Temperature",
      data: latestData.temperature,
      bgColor: "bg-[#FFE6E9]",
      unit: "°F",
    },
    {
      icon: "assets/graphics/heartbpm.svg",
      title: "Heart Rate",
      data: latestData.heart_rate,
      bgColor: "bg-[#FFE6E9]",
      unit: "bpm",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {vitalsData.map((vital) => (
        <VitalSignCard
          key={vital.title}
          icon={vital.icon}
          title={vital.title}
          data={vital.data}
          bgColor={vital.bgColor}
          unit={vital.unit}
        />
      ))}
    </div>
  );
};

export default VitalSigns;
