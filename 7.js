function j(id){ return document.getElementById(id); }
function convertJsonToObject() {
  try { j("objectOutput").textContent = JSON.stringify(JSON.parse(j("jsonInput").value), null, 2); }
  catch { j("objectOutput").textContent = "Invalid JSON"; }
}
function convertJsonToDate() {
  try {
    let obj = JSON.parse(j("dateInput").value);
    j("dateOutput").textContent = new Date(obj.date);
  } catch {
    j("dateOutput").textContent = "Invalid JSON or date";
  }
}
function convertJsonToCsv() {
  try {
    let arr = JSON.parse(j("jsonCsvInput").value);
    let h = Object.keys(arr[0]).join(",");
    let rows = arr.map(o => Object.values(o).join(",")).join("\n");
    j("csvOutput").textContent = h + "\n" + rows;
  } catch {
    j("csvOutput").textContent = "Invalid JSON";
  }
}
function convertCsvToJson() {
  let lines = j("csvToJsonInput").value.trim().split("\n");
  let h = lines[0].split(",");
  let out = lines.slice(1).map(l => {
    let v = l.split(",");
    let o = {};
    h.forEach((k,i)=> o[k]=v[i]);
    return o;
  });
  j("jsonOutput").textContent = JSON.stringify(out, null, 2);
}
async function createHash() {
  let data = new TextEncoder().encode(j("hashInput").value);
  let buf = await crypto.subtle.digest("SHA-256", data);
  j("hashOutput").textContent =
    [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,"0")).join("");
}
