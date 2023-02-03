require('dotenv').config()
const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');

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
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.send(200);
  }
  else {
  //move on
    next();
  }
});

const heroesRouter = require('./routes/heroes')
app.use('/heroes', heroesRouter)


app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
  });
  
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
  });
  


app.listen( port, () => {
    console.log("server started on localhost:" + port);
});