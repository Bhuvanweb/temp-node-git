const http=require('http')

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.end('Welcome to my home page')
   }else if(req.url==='/about'){
    res.end('History')
   }else{
      res.end(`
   <h1>Oops!</h1>
   <p>Hello everyone</p>
   <a href="/">Home</a>`)
   }
    
})

server.listen(5000)