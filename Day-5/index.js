const crypto = require("crypto");


// 1. random 
const randomValue = crypto.randomBytes(8);
console.log(randomValue.toString("base64"));



// 2. createHash 
const hashValue = crypto.createHash("sha256").update("OmarFaruk").digest("hex")
console.log(hashValue)