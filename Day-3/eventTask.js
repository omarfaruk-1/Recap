const fs = require("fs")
const EventEmitter = require("events");

const userEmitter = new EventEmitter();

const eventCount = {
    login:0,
    logout:0,
    purchase:0,
    updateProfile:0
}

const logFile = "eventCount.json";

if(fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile, "utf-8");
    Object.assign(eventCount,JSON.parse(data))
};

function eventCountFun(){
    fs.writeFileSync(logFile, JSON.stringify(eventCount, null, 2))
}


// events 
userEmitter.on("LOGIN",(username)=>{
    console.log(`${username} Logged Successfully`);
    eventCount.login++;
    eventCountFun();
})

userEmitter.on("LOGOUT",(username)=>{
    console.log(`${username} Logout  Successfully`);
    eventCount.logout++;
    eventCountFun();
})

userEmitter.on("PURCHASE",(username,item)=>{
    console.log(`${username}  Purchase ${item}`);
    eventCount.purchase++;
    eventCountFun();
})

userEmitter.on("PROFILE_UPDATE",(username,field)=>{
    console.log(`${username}  update the profile ${field}`);
    eventCount.updateProfile++;
    eventCountFun();
})

userEmitter.on("SUMMARY", ()=>{
    console.log("\n----EVENT SUMMARY----");
    console.log(`Logins: ${eventCount.login}`);
    console.log(`Logouts: ${eventCount.logout}`);
    console.log(`Purchases: ${eventCount.purchase}`);
    console.log(`Updates: ${eventCount.updateProfile}`);
});


// emit event different argument 
userEmitter.emit("LOGIN", "Omar");
userEmitter.emit("LOGOUT", "Omar");
userEmitter.emit("PURCHASE", "Omar", "MOBILE");
userEmitter.emit("PROFILE_UPDATE", "Omar", "Email");
userEmitter.emit("SUMMARY");
