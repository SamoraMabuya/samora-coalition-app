import Image from "next/image";
import getPatientData from "@/utils/api";
import { Patient } from "@/types/api";

const PatientList = async () => {
  const patients = await getPatientData();

  return (
    <div className="bg-white rounded-3xl shadow-sm h-fit">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900">Patients</h2>
          <div className="relative">
            <Image
              src="/assets/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="text-gray-400"
            />
          </div>
        </div>

        {/* Patient List */}
        <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 space-y-2">
          {patients.map((patient: Patient) => (
            <PatientCard key={patient.name} patient={patient} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PatientCard = ({ patient }: { patient: Patient }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src={patient.profile_picture}
            alt={patient.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{patient.name}</h3>
          <p className="text-sm text-gray-500">
            {patient.gender}, {patient.age}
          </p>
        </div>
      </div>
      <button className="p-1 hover:bg-gray-100 rounded-full">
        <Image
          src="/assets/icons/more.svg"
          alt="More options"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default PatientList;
