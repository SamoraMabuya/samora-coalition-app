import { Patient } from "@/types/api";
import getPatientData from "../lib/api";

const getPatientByName = async (name: string): Promise<Patient> => {
  const allPatientData = await getPatientData();
  const patientData = allPatientData.find(
    (patient: Patient) => patient.name === name
  );

  if (!patientData) {
    throw new Error(`Patient ${name} not found`);
  }

  return patientData;
};

export default getPatientByName;
