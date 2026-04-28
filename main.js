console.log("tranzy data fetcher");
import { fetchAgency } from "./src/api/agency.js";
// import { API_KEY } from "./src/api/config.js";
import { selectAgency } from "./src/api/agency.js";
// await fetchAgency("agency");

const checkApiKey = document.getElementById("check-api-key");

checkApiKey.addEventListener("click", async function () {
  selectAgency.innerHTML = "";
  await fetchAgency("agency");
});
