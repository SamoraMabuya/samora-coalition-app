import { Patient } from "@/types/api";
import getPatientData from "./api";

const getJessicaData = async (): Promise<Patient> => {
  const allPatientData = await getPatientData();
  const jessicaData = allPatientData.find(
    (paitent: Patient) => paitent.name === "Jessica Taylor"
  );

  return jessicaData;
};

export default getJessicaData;
