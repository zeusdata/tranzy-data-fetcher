console.log("tranzy data fetcher");
import { fetchAgency } from "./src/api/agency.js";
import { fetchVehicles } from "./src/api/vehicles.js";
// import { API_KEY } from "./src/api/config.js";
import { selectAgency } from "./src/api/agency.js";
// await fetchAgency("agency");
import { selectUi } from "./src/api/agency.js";
import { statusData } from "./src/api/agency.js";
import { selectedAgency } from "./src/api/agency.js";
import { downloadVehicles } from "./src/api/vehicles.js";
import { statusKey } from "./src/api/agency.js";
import { apiKeyUi } from "./src/api/agency.js";
import { downloadRoutes, fetchRoutes } from "./src/api/routes.js";
import { downloadShapes, fetchShapes } from "./src/api/shapes.js";
import { downloadStopTimes, fetchStopTimes } from "./src/api/stopTimes.js";
import { downloadStops, fetchStops } from "./src/api/stops.js";
import { downloadTrips, fetchTrips } from "./src/api/trips.js";
const statusDownload = document.getElementById("status-download");

const checkApiKey = document.getElementById("check-api-key");
const downloadFilesUi = document.getElementById("download-files-ui");
checkApiKey.addEventListener("click", async function () {
  selectAgency.innerHTML = "<option>Choose an agency</option>";
  await fetchAgency("agency");
});

const generateData = document.getElementById("generate-data");

console.log("mainSelectedAgency", selectedAgency);
generateData.addEventListener("click", async function () {
  if (selectedAgency === null) {
    statusData.textContent = "ERROR: AGENCY REQUIRED!";
    selectUi.style.border = "1px solid crimson";
  } else {
    await fetchVehicles("vehicles");
    await fetchRoutes("routes");
    await fetchTrips("trips");
    await fetchShapes("shapes");
    await fetchStopTimes("stop_times");
    await fetchStops("stops");
    selectUi.style.border = "1px solid #67bf82";
    statusData.textContent = "DATA GENERATED!";
    statusDownload.textContent = `FILES FOR AGENCY ID: ${selectedAgency}`;
    setInterval(() => {
      downloadFilesUi.style.transition = "1s ease-in-out";
      downloadFilesUi.style.border = "1px solid #67bf82";
    }, 100);
  }
});

let errorHandler = [
  downloadVehicles,
  downloadRoutes,
  downloadTrips,
  downloadShapes,
  downloadStops,
  downloadStopTimes,
];

errorHandler.forEach((e) => {
  e.addEventListener("click", function () {
    if (
      (selectedAgency === null && statusKey.textContent == "") ||
      statusKey.textContent == "ERROR:INVALID KEY!"
    ) {
      apiKeyUi.style.border = "1px solid crimson";
      selectUi.style.border = "1px solid crimson";
      downloadFilesUi.style.border = "1px solid crimson";
    }
  });
});

selectAgency.addEventListener("click", function () {
  if (
    statusKey.textContent == "" ||
    statusKey.textContent == "ERROR:INVALID KEY!"
  ) {
    selectUi.style.border = "1px solid crimson";
    statusData.textContent = "KEY NEEDED!";
  }
});
