const {readFile,writeFile}=require('fs')

console.log('started');

readFile('./new/third.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const third=result
    readFile('./new/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result
        readFile('./new/first.txt','utf8',(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            const first=result 
            writeFile('./new/fourth.txt',`Please have look ${third } ${second} ${first}`,(err,result)=>{
                if(err){
                    console.log(err);
                    return
                }else{
                    console.log(result);
                }
            })
            console.log('finished');
        })
    })
})
console.log('restarted');