/**
 * DOTENV CONFIG
 */

const dotenv = require('dotenv');
dotenv.config();


/**
 * LOCAL SERVER
 */

//Express
const express = require('express');
const app = express();

//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


//Init server
app.use(express.static('dist'));
const port = 8080;

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
});

const server = app.listen(port, () => {console.log(`running succesfully on local host: ${port}`)});


//GET route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
  });


// Setting up empty JS object to act as endpoint for all routes
projectData = {};

//POST route adds incoming projectData
app.post('/add', function (req, res) {
    projectData.cityInput = req.body.city;
    projectData.dateInput = req.body.date;
    projectData.weather = req.body.weather;
    projectData.daysUntil = req.body.daysUntil;
    res.send(projectData);
});
    
module.exports = app;