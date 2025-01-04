import { Patient } from "@/types/api";
import getPatientData from "../lib/api";

const getPatientByName = async (name: string): Promise<Patient> => {
  const allPatientData = await getPatientData();
  const jessicaData = allPatientData.find(
    (paitent: Patient) => paitent.name === name
  );

  return jessicaData;
};

export default getPatientByName;
