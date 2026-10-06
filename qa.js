const fs=require("fs");
const html=fs.readFileSync("index.html","utf8");
const required=["Incident","Verification","Resource","Task","Dispatch","Field Feedback","Coordination","Timeline","Resolution","Reporting","Wildfire Response","Search & Rescue","Infrastructure Incident"];
const failures=[];
for(const x of required) if(!html.includes(x)) failures.push("missing: "+x);
if(!/^<!doctype html>/i.test(html)) failures.push("missing doctype");
if(!/<html lang="en">/i.test(html)) failures.push("missing English lang");
if(!html.includes('meta name="viewport"')) failures.push("missing viewport");
if(/https?:\/\//.test(html)) failures.push("external URL found in MVP HTML");
if(/fetch\s*\(|XMLHttpRequest|WebSocket/i.test(html)) failures.push("network/backend call found");
if(!html.includes("Capability + Availability + Distance + Priority")) failures.push("matching rule missing");
const script=(html.match(/<script>([\s\S]*?)<\/script>/i)||[])[1];
if(!script) failures.push("application script missing");
else fs.writeFileSync(".qa-extracted.js",script);
if(failures.length){console.error(failures.join("\n"));process.exit(1)}
console.log("STATIC PASS");
