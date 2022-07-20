const {readFileSync,writeFileSync}=require('fs')
console.log('start');
const read=readFileSync('./new/first.txt','utf8')
console.log(read);
console.log('finished');
console.log('restarted');
writeFileSync('./new/third.txt',`Hello everyone ${read}`)