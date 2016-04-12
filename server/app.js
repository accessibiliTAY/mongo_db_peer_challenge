var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;
var index = require('./routes/index');
var assignmentroute= require('./routes/assignments');

app.use(bodyParser.json());
app.use('/', index);
app.use('/assignments', assignmentroute);
app.use(express.static('server/public'));

MongoDB.on('error', function(err){
  console.log('mongodb connection error:', err);

});

MongoDB.once('open', function() {
  console.log('mongodb connection is open!');
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port: ', port);
});
