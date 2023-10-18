const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const Resource = new Schema({

    schoolid: { type: mongoose.Schema.Types.ObjectId, ref: 'school', required: true },
    teacherid : {type : String, required : true},
    disecode : {type : String, required : true},
    role : {type : String, required : true},
    teachermongoid : {type: mongoose.Schema.Types.ObjectId, ref: 'teacher', required: true },
    resource: [
        {
            type: Object, 
            required: true             
        }
    ]
   
}, { timestamps: true })

module.exports = (mongoose.model('Resource' , Resource));