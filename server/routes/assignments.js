var express = require('express');
var router = express.Router();
var path = require('path');
var Assignments = require('../../models/assignment');
var bodyParser = require('body-parser');


router.get('/', function(request, response){
  Assignments.find({}, function(err, assignment){
    if(err){
      console.log(err);
    } else {
      response.send(assignment);
    }
  });
});

router.post('/', function(request, response){
  console.log(request.body);
  // response.sendStatus(200);
  var assignment = new Assignments({
    assignment_number: request.body.assignment_number,
    student_name: request.body.student_name,
    score: request.body.score,
    date_completed: request.body.date_completed

  });
  assignment.save(function(err){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else{

      response.send(assignment);

    }
  });

});

module.exports = router;
