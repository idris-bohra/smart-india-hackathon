const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const TeacherSchema = new Schema({

    schoolid : {
        type : Schema.Types.ObjectId,
        required : true

    },
    disecode : {
        type: String,
        required : true

    },
    teachername:{
        type:String,
        required : true
    },
    schoolname : {
        type: String,
        required : true
    },
    city : {
        type: String,
        required : true
    },
    state : {
        type: String,
        required : true
    },
    teacherid : {
        type: String,
        unique : true,
        required : true

    },
    teacherpassword : {
        type: String,
        required : true

    },
    section: {
        type : String
    },
    teachermail : {
        type: String,
        required : true,
        unique : true

    },
    role : {
        type: String,
        required : true

    },
    forclass : {
        type : Number,
    },
    teacherpassword : {
        type : String,
        required : true
    },
   
})

module.exports = (mongoose.model('Teacher' , TeacherSchema));