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
const port = 8081;

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
});

const server = app.listen(port, () => {console.log(`running succesfully on local host: ${port}`)});