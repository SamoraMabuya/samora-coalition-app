import getJessicaData from "../utils/data";
import Header from "@/components/header";
import PatientList from "@/components/patientSearchList";
import DiagnosisHistoryChart from "@/components/diagnosesHistoryChart";
import Profile from "@/components/profile";
import DiagnosticList from "@/components/diagnosticList";

const Home = async () => {
  const jessicaData = await getJessicaData();

  return (
    <main className="space-y-4">
      <Header />
      <div className="grid grid-cols-[450px,1fr,450px] gap-4 gap-x-6">
        <PatientList />
        <div className="space-y-4">
          <DiagnosisHistoryChart
            diagnosisHistory={jessicaData.diagnosis_history}
          />
          <DiagnosticList diagnostics={jessicaData.diagnostic_list} />
        </div>
        <Profile patient={jessicaData} />
      </div>
    </main>
  );
};
export default Home;
