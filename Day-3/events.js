const EventEmitter = require("events");

const emitter = new EventEmitter();
 
// it has two method 
// 1. on --->it just create: it take two parameter (EventName as a string, listener/ callback function)

// 2. emit--->it execute: it take two parameter (eventName as string, [arguments...])

emitter.on("GREET",(arguments)=>{
    console.log(`Hello Sir ${arguments.username} Your user id is: ${arguments.id}`);
});

emitter.emit("GREET", {
    username: "Omar Faruk",
    id: "ahfaahdiuew21931283120"
})
