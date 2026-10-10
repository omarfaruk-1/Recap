import http from "http"
import fs from 'fs';

const server = http.createServer((req,res)=>{

    const log = `${Date.now().toString()} : From ${req.url} New request received\n`;
    fs.appendFile("./log.txt",log,(err)=>{
        if(err){
            console.error("Error writing to the log file: ", err);
            res.statusCode=500;
            res.end("Internal server error");
            return;
        }
        res.end("Text append in log file")
    })



})


server.listen(3000,()=>{
    console.log("Server running port 3000")
})