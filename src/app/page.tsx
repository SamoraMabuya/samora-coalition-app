import getJessicaData from "../utils/data";
import Header from "@/components/header";
import PatientList from "@/components/patientSearchList";
import DiagnosisHistoryChart from "@/components/diagnosesHistoryChart";
import VitalSigns from "@/components/vitalSigns";

const Home = async () => {
  const jessicaData = await getJessicaData();

  return (
    <main className="space-y-4">
      <Header />
      <div className="grid grid-cols-[350px,1fr,350px] gap-4 gap-x-6">
        <PatientList />
        <DiagnosisHistoryChart
          diagnosisHistory={jessicaData.diagnosis_history}
        />
      </div>
    </main>
  );
};
export default Home;
