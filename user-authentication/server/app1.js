const express = require("express");
const mysql=require("mysql2");
const dotenv=require("dotenv");
const cors=require("cors");
const { message } = require("antd");

//const App=require('../src/App')

dotenv.config({ path: './.env'});

const app= express();

app.use(express.json());
app.use(cors());

const db= mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((error)=>{
    if(error)
        console.log(error);
    else
        console.log("MYSQL Connected...");
});

app.post("/register",(req, res)=>{
    //res.send("<h1>Home Page</h1>")
    //res.render('App')

    const username=req.body.username
    const password=req.body.password
    const User_ID=req.body.User_ID

    db.query(
        "INSERT INTO usersnew (user_id,username, password) values (?,?,?)",
        [User_ID,username,password],
        (err,result)=>{
        console.log(err);
    });
});

app.post("/login", (req,res)=>{
    const username=req.body.username
    const password=req.body.password
    const User_ID=req.body.User_ID

    db.query(
        "SELECT * FROM usersnew WHERE user_id=? AND password=?",
        [User_ID, password],
        (err,result)=>{
            if(err){
                res.send({err:err});
            }
            if(result.length>0){
                res.send(result);
            }
            else{
                res.send({message: "Wrong username/password combination!"});
            }
    });
});

app.listen(4000, ()=>{
   console.log("Server started on Port 4000"); 
})