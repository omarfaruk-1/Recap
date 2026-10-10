// global object 

setTimeout(()=>{
    console.log("Hello set timeout")
},3000);

let count =0;
const interval= setInterval(()=>{
    console.log(`Interval count ${++count}`);
    if(count===4) clearInterval(interval)
},1000)