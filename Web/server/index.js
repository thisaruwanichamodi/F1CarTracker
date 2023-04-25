import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";





const app = express();

const {Router} = require("express");
const mongoose = require("mongoose");

const dataGPSSchema = new mongoose.Schema({
    Year: String,
    Month: String,
    Date: String,
    Speed: String,
    Latitude: String,
    Longitude: String,
});
const sensorGPS = mongoose.model("sensorGPS", dataGPSSchema);
module.exports = sensorGPS;

app.use(bodyParser.json({limit: "30mb", extended: true})); // for send over req
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors);

app.get('/', (req, res) => {
    res.send('hello to world');
})

const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://F1racing:<F1racingabcd>@cluster0.6ymdxws.mongodb.net/test').then(() => app.listen(PORT, () => console.log('server running on port: ${PORT}')))
.catch((error) => console.log(error.message));