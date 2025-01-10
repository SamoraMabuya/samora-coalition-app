import { Patient } from "@/types/api";
import { supabase } from "./supabase";

const getPatientData = async (): Promise<Patient[]> => {
  try {
    const { data, error } = await supabase
      .from("patients")
      .select("*")
      .order("created_at");

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error("Failed to fetch patient data:", error);
    throw error;
  }
};

export default getPatientData;
