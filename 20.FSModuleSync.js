const { readFileSync, writeFileSync } = require("fs");

const first=readFileSync('./new/first.txt','utf8')
const second=readFileSync('./new/second.txt','utf8')

// console.log(first);
// console.log(second);

writeFileSync('./new/result-sync.txt',`Hi look at these values: ${first} ${second}`,
{flag:'a'})