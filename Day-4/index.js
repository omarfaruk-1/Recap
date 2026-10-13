const http = require("http");
const fs = require("fs")
const {Transform, pipeline} = require("stream")

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

    // readStream.on("data",(chunk)=>{
    //     console.log("Chunk: ",chunk);
    //     writeStream.write(chunk);
    // })

    //* bad way string process/ transforming
    // readStream.on("data",(chunk)=>{
    //     const modifiedWord= chunk.toString().toUpperCase().replaceAll(/ipsum/ig, "Omar");
    //     writeStream.write(modifiedWord);
    // })

    // res.end();

    //* good way string process/ transforming
    const transformString = new Transform({
        transform(chunk,encoding,callback){
            const modifiedWord = chunk.toString().toUpperCase().replaceAll(/dolor/ig, "Faruk");
            callback(null,modifiedWord);
        }
    });

    readStream.pipe(transformString).pipe(writeStream);
    // pipeline(readStream,transformString,pipeline,(err)=>console.log("Error: ",err))
    res.end("Success");

 
})




server.listen(PORT,()=>{
    console.log(`Server running PORT: ${PORT}`)
})