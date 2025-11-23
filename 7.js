function j(id){ return document.getElementById(id); }
function JsonToObject() {
  let txt = j("jsonInput").value;
  let obj = JSON.parse(txt);
  j("objectOutput").textContent = JSON.stringify(obj, null, 2);
}
function JsonToDate() {
  let txt = j("dateInput").value;
  let obj = JSON.parse(txt);
  j("dateOutput").textContent = new Date(obj.date);
}
function JsonToCsv() {
  let arr = JSON.parse(j("jsonCsvInput").value);
  let header = Object.keys(arr[0]).join(",");
  let rows = arr.map(x => Object.values(x).join(",")).join("\n");
  j("csvOutput").textContent = header + "\n" + rows;
}
function CsvToJson() {
  let lines = j("csvToJsonInput").value.split("\n");
  let header = lines[0].split(",");
  let out = [];
  for (let i = 1; i < lines.length; i++) {
    let values = lines[i].split(",");
    let obj = {};
    for (let j2 = 0; j2 < header.length; j2++) {
      obj[header[j2]] = values[j2];
    }
    out.push(obj);
  }
  j("jsonOutput").textContent = JSON.stringify(out, null, 2);
}
async function createHash() {
  let txt = j("hashInput").value;
  let bytes = new TextEncoder().encode(txt);
  let hash = await crypto.subtle.digest("SHA-256", bytes);
  let hex = [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2,"0")).join("");
  j("hashOutput").textContent = hex;
}
