const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;
const API_URL = process.env.NEXT_PUBLIC_URL as string;

const authHeader = "Basic " + btoa(`${username}:${password}`);

const getPatientData = async () => {
  try {
    const data = await fetch(API_URL, {
      headers: {
        Authorization: authHeader,
      },
    });

    if (!data.ok) throw new Error(`Error status:${data.status}`);
    return data.json();
  } catch (error) {
    console.error("Failed to fetch patient data", error);
    throw error;
  }
};

export default getPatientData;
