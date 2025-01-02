import Image from "next/image";
import getJessicaData from "../utils/data";
import Head from "next/head";
import Header from "@/components/header";
import PatientList from "@/components/patientSearchList";

const Home = async () => (
  <main className="space-y-4">
    <Header />

    <PatientList />
  </main>
);
export default Home;
