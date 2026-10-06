const fs=require("fs");
const html=fs.readFileSync("index.html","utf8");
const checks=[
["HTML exists",/^<!doctype html>/i.test(html)],
["English UI",/<html lang="en">/.test(html)],
["Three scenarios",["Wildfire Response","Search & Rescue","Infrastructure Incident"].every(x=>html.includes(x))],
["Core modules",["Incident","Verification","Resource","Task","Dispatch","Field Feedback","Coordination","Timeline","Resolution","Reporting"].every(x=>html.includes(x))],
["Interactive actions",html.includes('confirmIncident()')&&html.includes('addFeedback()')&&html.includes('resolutionPage()')],
["No backend calls",!/fetch\s*\(|XMLHttpRequest|WebSocket|\/api\//i.test(html)],
["Responsive UI",/@media/.test(html)]
];
const script=(html.match(/<script>([\\s\\S]*?)<\\/script>/i)||[])[1];
if(!script) checks.push(["Application script",false]); else { try{new Function(script);checks.push(["JavaScript syntax",true])}catch(e){checks.push(["JavaScript syntax",false]);console.error(e.message)} }
let failed=0;for(const [name,ok] of checks){console.log((ok?"PASS":"FAIL")+" "+name);if(!ok)failed++}process.exit(failed?1:0);
