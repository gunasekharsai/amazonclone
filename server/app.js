require("dotenv").config();
const express = require("express");
const app = express();
const mongoose =require("mongoose");
require ("./db/conn");

const products = require("./models/productSchema");

const DefaultData = require("./default");
const cors = require("cors");
const router = require("./routers/router");

app.use(express.json()); // data will be in json format
app.use(cors()); // front end is running in 300 port and backend is running in 800prt so when we get data from backend to frontend it cause an eror called cross platform to get rid of it we install cors
app.use(router);

app.listen(5007,() =>{
    console.log('server is running on port number 5007');
});

DefaultData();
