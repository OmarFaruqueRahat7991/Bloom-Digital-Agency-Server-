const express = require("express");
const cors = require("cors");
// const jwt = require('jsonwebtoken');
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('My Eleventh Assignment Server Is Running');
})

app.listen(port, () => {
  console.log(`My Eleventh Assignment Server Is Running On Port ${port}`);
})
