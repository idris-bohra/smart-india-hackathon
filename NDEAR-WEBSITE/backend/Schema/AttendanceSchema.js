const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const Attendence = new Schema({

    schoolid: { type: mongoose.Schema.Types.ObjectId, ref: 'school', required: true },
    teacherid : {type : String, required : true},
    disecode : {type : String, required : true},
    role : {type : String, required : true},
    section : {type : String, required : true},
    forclass : {type : Number, required : true},
    teachermongoid : {type: mongoose.Schema.Types.ObjectId, ref: 'teacher', required: true },
    attendence: [
        {
            type: Object, 
            required: true             
        }
    ]
   
}, { timestamps: true })

module.exports = (mongoose.model('Attendence' , Attendence));