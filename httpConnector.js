var http=require('http')
http.createServer(function(req,res){
res.write("hello")
res.end()
}).listen(8080)
