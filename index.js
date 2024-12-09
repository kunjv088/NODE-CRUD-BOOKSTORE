const express = require("express");
const port = 2356;

const app = express();
const db = require("./config/db");
const adminSchema = require("./model/firstSchema");

app.set("view engine" , "ejs");
app.use(express.urlencoded());

app.get("/" , async (req,res)=>{
    let data = await adminSchema.find({});
    data && res.render("index" , {data});
});

app.post("/addData" , async (req,res)=>{
    let data = await adminSchema.create(req.body);
    data && res.redirect("/");
});

app.get("/deleteData", async (req,res)=>{
    let data = await adminSchema.findByIdAndDelete(req.query.id);
    data && res.redirect("/");
});

app.get("/editData", async (req,res)=>{
    let singledata = await adminSchema.findById(req.query.id);
    singledata && res.render("edit" , {singledata});
});

app.post("/updateData" , async(req,res)=>{
    let update = await adminSchema.findByIdAndUpdate(req.body.id , req.body);
    update && res.redirect("/");
});

app.listen(port, (err)=>{
    err ? console.log(err) : console.log("server create on port "+ port) ;
});


