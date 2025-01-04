import getJessicaData from "../utils/data";
import Header from "@/components/header";
import Patients from "@/components/patients";
import DiagnosisHistory from "@/components/diagnosesHistory";
import Profile from "@/components/profile";
import DiagnosticList from "@/components/diagnosticList";
import LabResults from "@/components/labResults";

const Home = async () => {
  const jessicaData = await getJessicaData();

  return (
    <main className="space-y-4">
      <Header />
      <div className="grid grid-cols-[450px,1fr,400px] gap-4 gap-x-6">
        <Patients />
        <div className="space-y-4">
          <DiagnosisHistory diagnosisHistory={jessicaData.diagnosis_history} />
          <DiagnosticList diagnostics={jessicaData.diagnostic_list} />
        </div>
        <div className="space-y-4">
          <Profile patient={jessicaData} />
          <LabResults results={jessicaData.lab_results} />
        </div>
      </div>
    </main>
  );
};
export default Home;
