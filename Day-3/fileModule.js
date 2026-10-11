// console.log("Hello")
// path module 

// import path from "node:path";
const path = require("path");

console.log("FILENAME", __filename);
console.log("DIRNAME", __dirname);



// path 
//* folder/student/data.txt
const filepath = path.join("Folder", "Student", "data.txt");

console.log(filepath);

const parseDataPath = path.parse(filepath);
const resolvePath =path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);


console.log({
    parseDataPath,
    resolvePath,
    extname,
    basename,
    dirname
})