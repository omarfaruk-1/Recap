const http = require("http");
const fs = require("fs")

const PORT=3000;
const server = http.createServer((req,res)=>{
    // res.end("Hello from server");


    //* without Stream
    // const file = fs.readFileSync("sample.txt");
    // res.end(file)

    //* with Stream
    // const readStream = fs.createReadStream("Sample.txt");
    // readStream.pipe(res)
    // res.end()

    //* copy file without stream one file to another file 
    // const file = fs.readFileSync("sample.txt");
    // fs.writeFileSync("output.txt", file);
    // res.end("Copied successfully");

    //* copy file with stream one file to another file 
    const readStream = fs.createReadStream("sample.txt");
    const writeStream = fs.createWriteStream("output.txt");

    readStream.on("data",(chunk)=>{
        console.log("Chunk: ",chunk);
        writeStream.write(chunk);
    })


})




server.listen(PORT,()=>{
    console.log(`Server running PORT: ${PORT}`)
})