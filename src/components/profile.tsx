import React from "react";
import Image from "next/image";
import { Patient } from "@/types/api";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  patient: Patient;
}

const InfoItem = ({
  icon,
  title,
  info,
}: {
  icon: string;
  title: string;
  info: string;
}) => (
  <div className="flex gap-3 items-start">
    <div className="p-2 bg-[#F6F7F8] rounded-full">
      <Image src={icon} alt={title} width={38} height={38} />
    </div>
    <div className="space-y-1">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="font-bold">{info}</p>
    </div>
  </div>
);

const Profile = ({ patient }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 space-y-6 h-fit">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <Image
            src={patient.profile_picture}
            alt={patient.name}
            width={128}
            height={128}
            className="rounded-full object-contain"
            priority
            quality={100}
          />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold">{patient.name}</h2>
        </div>
      </div>

      <div className="space-y-6">
        <InfoItem
          icon="/assets/icons/birthIcon.svg"
          title="Date Of Birth"
          info={new Date(patient.date_of_birth).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        />

        <InfoItem
          icon="/assets/icons/femaleIcon.svg"
          title="Gender"
          info={patient.gender}
        />

        <InfoItem
          icon="/assets/icons/phoneIcon.svg"
          title="Contact Info."
          info={patient.phone_number}
        />

        <InfoItem
          icon="/assets/icons/phoneIcon.svg"
          title="Emergency Contacts"
          info={patient.emergency_contact}
        />

        <InfoItem
          icon="/assets/icons/insuranceIcon.svg"
          title="Insurance Provider"
          info={patient.insurance_type}
        />
      </div>

      <Button className="w-full bg-[#01F0D0] hover:bg-[#00d8bb] text-black font-bold  px-4 rounded-2xl">
        Show All Information
      </Button>
    </div>
  );
};

export default Profile;
