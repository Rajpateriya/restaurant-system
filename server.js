const express = require("express")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const db = require("./db/db")
dotenv.config();
const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;
db();
app.get('/',(req,res)=>{
    res.send("welcome to the hotel........**Raj villa**........")
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})