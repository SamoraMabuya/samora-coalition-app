export interface BloodPressure {
  systolic: {
    value: number;
    levels: string;
  };
  diastolic: {
    value: number;
    levels: string;
  };
}

export interface VitalSign {
  value: number;
  levels: string;
}

export interface DiagnosisHistoryEntry {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: VitalSign;
  respiratory_rate: VitalSign;
  temperature: VitalSign;
}

export interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryEntry[];
  diagnostic_list: Diagnostic[];
  lab_results: string[];
}
