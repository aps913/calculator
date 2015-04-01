// Require the modules we're going to need:
var express = require("express"),
    ejs = require("ejs"),
    bodyParser = require("body-parser");

// Now instantiate our express app:
var app = express();

// Set the view engine to be "EJS"
app.set('view engine', 'ejs');

// Set up body parser
app.use(bodyParser.urlencoded({extended: true}));

// Let's add some routes here together:
app.get('/', function(req, res) {
   res.render("index")  
});

// app.post('/add', function(req,res) {
//   //req.params // request params
//   //req.query // query params
//   //req.body // body params
//   //res.send('you got this far!');
//   classmates.push (req.body);
//   res.redirect('/');
// });

app.post('/add', function(req, res){
  var x = Number(req.body.n1);
  var y = Number(req.body.n2);
  var sum = x + y;
  res.send("The Sum is " + sum);
  //res.redirect('/');
});

app.post('/subtract', function(req, res){
  var x = Number(req.body.n3);
  var y = Number(req.body.n4);
  var subtract = x - y;
  res.send("The Sum is " + subtract);
  //res.redirect('/');
});

app.post('/multiply', function(req, res){
  var x = Number(req.body.n5);
  var y = Number(req.body.n6);
  var multiply = x * y;
  res.send("The product is " + multiply );
  //res.redirect('/');
});

app.post('/divide', function(req, res){
  var x = Number(req.body.n7);
  var y = Number(req.body.n8);
  var divide = x/y;
  res.send("The division is " + divide);
});


// Start the server on port 3000
app.listen(3000);