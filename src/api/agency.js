import { API_KEY, URL, getOption } from "./config.js";
export const selectAgency = document.getElementById("select-agency");
const generateData = document.getElementById("generate-data");
export async function fetchAgency(endpoint) {
  const statusKey = document.getElementById("status-key");
  try {
    const response = await fetch(`${URL}${endpoint}`, getOption());
    const data = await response.json();
    console.log(data);

    data.forEach((agency) => {
      const option = document.createElement("option");
      option.value = agency.agency_id;
      option.textContent = agency.agency_name;

      selectAgency.appendChild(option);
    });
    if (data) {
      statusKey.textContent = "SUCCESS!";
      generateData.textContent = "GENERATE DATA()";
    }

    selectAgency.addEventListener("change", function () {
      console.log("agencySelected", this.value);
    });
  } catch (error) {
    console.error(error);

    statusKey.textContent = "ERROR:INVALID KEY!";
  }
}
