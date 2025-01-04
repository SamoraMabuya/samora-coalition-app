import Image from "next/image";
import { Patient } from "@/types/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

type ProfileProps = {
  patient: Patient;
};

const Profile = ({ patient }: ProfileProps) => {
  const formattedBirthDate = new Date(patient.date_of_birth).toLocaleDateString(
    "en-ZA",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  const patientInfo = [
    {
      icon: "/assets/icons/birthIcon.svg",
      title: "Date Of Birth",
      info: formattedBirthDate,
    },
    {
      icon: "/assets/icons/femaleIcon.svg",
      title: "Gender",
      info: patient.gender,
    },
    {
      icon: "/assets/icons/phoneIcon.svg",
      title: "Contact Info.",
      info: patient.phone_number,
    },
    {
      icon: "/assets/icons/phoneIcon.svg",
      title: "Emergency Contacts",
      info: patient.emergency_contact,
    },
    {
      icon: "/assets/icons/insuranceIcon.svg",
      title: "Insurance Provider",
      info: patient.insurance_type,
    },
  ];

  type InfoItemProps = {
    icon: string;
    title: string;
    info: string;
  };

  const InfoItem = ({ icon, title, info }: InfoItemProps) => (
    <div className="flex gap-3 items-start space-x-2">
      <div className="p-2 bg-[#F6F7F8] rounded-full">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-custom">{title}</h3>
        <p className="font-bold">{info}</p>
      </div>
    </div>
  );

  return (
    <Card className="h-fit">
      <CardContent className="p-6 space-y-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-32 w-32">
            <AvatarImage
              src={patient.profile_picture}
              alt={patient.name}
              className="object-contain"
            />
          </Avatar>
          <h2 className="text-2xl font-extrabold">{patient.name}</h2>
        </div>
        <div className="space-y-6">
          {patientInfo.map((item) => (
            <InfoItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              info={item.info}
            />
          ))}
        </div>
        <Button
          className="px-8 mx-auto flex bg-[#01F0D0] hover:bg-[#00d8bb] text-black font-bold rounded-2xl"
          variant="ghost"
        >
          Show All Information
        </Button>
      </CardContent>
    </Card>
  );
};

export default Profile;
