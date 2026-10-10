import fs from "node:fs"


// write 
// fs.writeFile("./test.txt","This text from async non-blocking code",(err)=>{
//     console.log(err)
// })

//read 
// const read= fs.readFileSync("./test.txt","utf8");
// console.log(read)
// fs.readFile("./test.txt", "utf8",(err,res)=>{
//     if(err){
//         console.log(err)
//     }else(
//         console.log(res)
//     )
// })

fs.appendFile("./test.txt", " My name is Omar faruk ",(err,res)=>{
    if(err){
        console.log(err)
    }else(
        console.log(res)
    )
})

fs.copyFile("./test.txt","./cpy.txt",(err)=>{
    console.log(err)
})

fs.mkdir("./New",(err)=>{
    console.log(err)
})