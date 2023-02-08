require('dotenv').config()
const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect(
  process.env.DATABASE_URL, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, 
  err => {
    if (err) {
      console.log("Failed to connect")
      console.log(err)
    } else {
      console.log("Connected")
      app.listen(80)
    }
  }
)


let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use( function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.status(200).json({ message: "" });
  }
  else {
  //move on
    next();
  }
});

const heroesRouter = require('./routes/heroes')
app.use('/heroes', heroesRouter)

const publishersRouter = require('./routes/publisher')
app.use('/publisher', publishersRouter)

const genderRouter = require('./routes/gender')
app.use('/gender', genderRouter)

const alignmentRouter = require('./routes/alignment')
app.use('/alignment', alignmentRouter)

const searchRouter = require('./routes/searchs')
app.use('/search', searchRouter)


app.use(function(req,res){
    res.type('text/plain');
    res.status(404).json({ message: "Not Found" });
  });
  
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500).json({ message: "Server Error" });
  });
  


app.listen( port, () => {
    console.log("server started on localhost:" + port);
});