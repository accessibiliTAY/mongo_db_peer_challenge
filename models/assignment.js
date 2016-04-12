var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignmentsSchema = new Schema({
  assignment_number: {type:Number, unique: true},
  student_name: {type: String},
  score: {type:Number},
  date_completed: {type:Date}

});
var Assignments = mongoose.model('studentAssignments', assignmentsSchema);
module.exports= Assignments;
