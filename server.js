const express = require("express");
const path = require("path");

const app = express(); //app=>server//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is listening on port " + PORT));
const mysql = require("mysql");

//
const authRoute= require('./routes/Auth')
//
app.use("/auth",    authRoute);

//


//Create Connections

const connectDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projet_stage",
});
connectDB.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connection done");
});

// path , config, nodemoon
