export const URL = "https://api.tranzy.ai/v1/opendata/";
export let API_KEY;
export function getOption() {
  return {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-API-KEY": API_KEY,
    },
  }; //return end
}
const inputApiKey = document.getElementById("input-api-key");

inputApiKey.addEventListener("input", function (e) {
  API_KEY = e.target.value;
});
