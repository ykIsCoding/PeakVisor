const express = require('express')
const cors = require('cors')
const sl = require('serverless-http')
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  

var corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:5173", // Allow CORS from any origin
    "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS", // Allow all HTTP methods
    "Access-Control-Allow-Headers": "*", // Allow specified headers
  },
};

app.listen(3000)

