import express from "express";
import {data} from "./data/data.js"

const app = express();

const PORT=3000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Response from server");
})

app.get("/api/v1/users",(req,res)=>{
    res.status(200).send(data)
})


app.listen(PORT,()=>{
    console.log(`Server running PORT: ${PORT}`)
});
