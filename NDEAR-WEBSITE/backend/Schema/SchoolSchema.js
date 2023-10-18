const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
var Schema = mongoose.Schema;

// {schoolname , disecode , address, city, state,  pincode, Principalname, Principalaadhar, Principalpancard, schoolemail, schoolpassword} 

const SchoolSchema = new Schema({

    schoolname : {
        type: String,
        required : true
    },
    disecode : {
        type : Number,
        unique : true,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    pincode : {
        type : Number,
        required : true
    },
    Principalname : {
        type : String,
        required : true
    },
    Principalaadhar : {
        type : Number,
        required : true
    },
    Principalpancard : {
        type : String,
        required : true
    },
    startclass : {
        type : String,
        required : true
    },
    endclass : {
        type : String,
        required : true
    },

    schoolemail : {
        type : String,
        required : true
    },
    schoolpassword : {
        type : String,
        required : true
    },
    tokens : [{
        token :  {
            type : String,
            required : false
        }
    }]
   
})

SchoolSchema.methods.generateTokenforschool = async function (){

    // console.log("generateTokenforschool");
    try{
        const token = jwt.sign({ _id : this._id.toString() }, process.env.SECRET_TOKEN,{

            expiresIn: '1h' // expires in 24 hours

             })
        this.tokens = this.tokens.concat({token})
        // console.log('this = ',this)
        // console.log("token = ",token);
        this.save();
        return {data : this , token : token};
    }
    catch(err)
    {
        res.status(500).json({'error' : "json not working"})
    }
}

module.exports = (mongoose.model('School' , SchoolSchema));