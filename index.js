// only the hackiest code

const IFILE = "en_us.json", OFILE = "out.json";

const fs = require('fs'), owoify = require("./owoify.js");

console.log(`reading file ${IFILE}`);
let rawdata = fs.readFileSync(IFILE);
console.log("parsing JSON data");
let langfile = JSON.parse(rawdata);

var i = 0;
for(entry in langfile){
    console.info(`#${i}/${Object.keys(langfile).length} | ${entry}`);
    langfile[entry] = owoify(langfile[entry]);
    i++;
}

console.log("stringifying...");
let data = JSON.stringify(langfile, null, 2);
console.log(`writing ${OFILE}`);
fs.writeFileSync(OFILE, data);
console.log("done");