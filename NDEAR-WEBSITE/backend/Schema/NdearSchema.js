const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jwt = require('jsonwebtoken')

const ndearSchema = new Schema({

    adminid : {
        type: String,
        unique : true,
        required : true

    },
    adminpassword : {
        type : String,
        required : true
    },
    tokens : [{

        token : {
            type : String,
            required : true
        }
    }]
   
})

ndearSchema.methods.generateToken = async function (){

    // console.log("generateToken");
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

module.exports = (mongoose.model('Admin' , ndearSchema));