const express  = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const cors = require("cors");
const homeRouter = require('./router/home')
const crudRouter = require('./router/crud')
const port  = process.env.port || 5000;
const bcrypt = require('bcrypt')
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kgzzpjr.mongodb.net/groups?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const db = mongoose.connection
app.use(cors());
app.use(express.json());

db.on('error',()=>{console.log('error in connection');})
db.once('open',()=>{console.log('connected');})

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kgzzpjr.mongodb.net/?retryWrites=true&w=majority`;


app.set('view engine','ejs')
app.use(express.static('Design'))

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/',homeRouter)
app.use("/crud", crudRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
