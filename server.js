var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var expressServer = http.createServer(app);
app.use("/dist", express.static(path.join(__dirname, '/dist')));
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname, './resources/views', 'index.html'));
})

expressServer.listen(9000,()=>{
    console.log('Listening to port 9000');
})