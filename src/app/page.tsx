import getJessicaData from "../utils/data";
import Header from "@/components/header";
import PatientList from "@/components/patientSearchList";
import DiagnosisHistoryChart from "@/components/diagnosesHistoryChart";
import Profile from "@/components/profile";

const Home = async () => {
  const jessicaData = await getJessicaData();

  return (
    <main className="space-y-4">
      <Header />
      <div className="grid grid-cols-[450px,1fr,450px] gap-4 gap-x-6">
        <PatientList />
        <DiagnosisHistoryChart
          diagnosisHistory={jessicaData.diagnosis_history}
        />
        <Profile patient={jessicaData} />
      </div>
    </main>
  );
};
export default Home;
