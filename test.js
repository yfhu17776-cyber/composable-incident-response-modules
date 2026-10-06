const fs = require("fs");
const html = fs.readFileSync("index.html","utf8");
const checks = [
  ["HTML exists", html.includes("<!doctype html>")],
  ["Incident module", html.includes("Incident")],
  ["Verification module", html.includes("Verification")],
  ["Resource module", html.includes("Resource")],
  ["Dispatch module", html.includes("Dispatch")],
  ["Three scenarios", ["Wildfire Response","Search & Rescue","Infrastructure Incident"].every(x=>html.includes(x))],
  ["Core workflow", html.includes("Field Feedback") && html.includes("Resolution") && html.includes("Reporting")]
];
let failed=0;
for (const [name,ok] of checks) { console.log((ok?"PASS":"FAIL")+" "+name); if(!ok) failed++; }
process.exit(failed?1:0);
