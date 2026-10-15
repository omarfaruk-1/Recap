import express from "express";
import {data} from "./data/data.js"

const app = express();

const PORT=3000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send("Response from server");
})

app.get("/api/v1/users",(req,res)=>{
    // console.log(req.query)
    const {name}=req.query;
    if(name){
        const userData= data.filter((user)=>{
            return user.name===name;
        })
        return res.status(200).json(userData);
    }
    res.status(200).send(data)
})


//* get specific user by id
app.get("/api/v1/users/:id", (req,res)=>{
    const {id}=req.params;
    // console.log(id)
    const userInfo = data.find((user)=> user.id===id);
    return res.status(404).send(userInfo);
})

//* post method use for add new user data, it send data from client to server
app.post("/api/v1/users",(req,res)=>{
    const {id,name,displayName}= req.body;
    const newUser = {
        id,
        name,
        displayName
    }
    data.push(newUser);

    res.status(201).send({
        message: "New user added successfully",
        data: newUser
    });
})


//* Put method-> use for update (update all field)
app.put("/api/v1/users/:id", (req,res)=>{
    const {body, params:{id}}=req;
    // console.log(id)

    const userIndex = data.findIndex((user)=>user.id===id);

    if(userIndex===-1){
        return res.status(404).send({
            message:"User not found"
        });
    }
    data[userIndex]={...body,id}

    return res.status(200).send({
        message: "User information updated successfully",
    });
})


//* patch method-> use for update (update specific field)
app.patch("/api/v1/users/:id", (req,res)=>{
    const {body, params:{id}}=req;
    // console.log(id)

    const userIndex = data.findIndex((user)=>user.id===id);

    if(userIndex===-1){
        return res.status(404).send({
            message:"User not found"
        });
    }
    data[userIndex]={...data[userIndex],...body};

    return res.status(200).send({
        message: "User information updated successfully",
        data:data[userIndex]
    });
})


//* delete method-> it delete specific information
app.delete("/api/v1/users/:id",(req,res)=>{
    const {id}=req.params;
    const userIndex = data.findIndex((user)=>user.id===id);

    if(userIndex===-1){
        return res.status(404).send({
            message:"User not found"
        });
    }

    data.splice(userIndex,1);

    return res.status(200).send({
        message:"User delete successfully"
    })
})



//* delete (update specific field)




app.listen(PORT,()=>{
    console.log(`Server running PORT: ${PORT}`)
});
