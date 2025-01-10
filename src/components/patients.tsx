import Image from "next/image";
import getPatientData from "@/lib/api";
import { Patient } from "@/types/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const PatientCard = ({ patient }: { patient: Patient }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg  hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 relative overflow-hidden">
          <AvatarImage
            src={patient.profile_picture}
            alt={patient.name}
            className="object-cover w-full h-full"
          />
        </Avatar>
        <div>
          <h3 className="font-medium">{patient.name}</h3>
          <p className="text-sm text-gray-500">
            {patient.gender}, {patient.age}
          </p>
        </div>
      </div>
      <button className="p-1 hover:bg-gray-100 rounded-full">
        <Image
          src="assets/icons/more.svg"
          alt="More options"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

const Patients = async () => {
  const patients = await getPatientData();

  return (
    <Card className="h-fit ">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Patients</CardTitle>
          <div className="relative">
            <Image
              src="assets/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="text-gray-custom"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-2">
          {patients.map((patient: Patient) => (
            <PatientCard key={patient.name} patient={patient} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Patients;
