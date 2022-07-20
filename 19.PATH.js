const path=require('path')

console.log(path.sep);

const join=path.join('/new','apple','hello.txt')

console.log(join);

const baseName=path.basename(join)
console.log(baseName);

const absolute=path.resolve(__dirname,'new','apple','hello.txt')
console.log(absolute);



