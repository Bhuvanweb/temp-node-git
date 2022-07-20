const {readFile,writeFile}=require('fs')
// const first=readFile('./new/first.txt','utf8')
// const second=readFile('./new/second.txt','utf8')

readFile('./new/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result
    readFile('./new/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result
        writeFile('./new/first-asnyc.txt',`Please have a look ${first} ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})