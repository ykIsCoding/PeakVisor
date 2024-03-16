require("dotenv").config()
const express = require('express')
const cors = require('cors')
const sl = require('serverless-http')
const app = express();
const bodyParser = require('body-parser');
const schema = require('../graphql/schema')
const tripAdvisorRoutes = require('../routes/tripadvisor')
const authenticationRoutes = require('../routes/authentication')
const meetupRoutes = require('../routes/meetup')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors(corsOptions));
app.use('/tripadvisor',tripAdvisorRoutes)
app.use('/authentication',authenticationRoutes)
app.use('/meetup',meetupRoutes)



app.get('/', function (req, res) {
    res.send('Hello World')
  })


//app.all('/graphql', createHandler({ schema }));
  

var corsOptions = {
  origin: "http://localhost:4200",
  credentials: true,
  optionsSuccessStatus: 200,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:4200", // Allow CORS from any origin
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS", // Allow all HTTP methods
    "Access-Control-Allow-Headers": "*", // Allow specified headers
  },
};



app.listen(3000)

