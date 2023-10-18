const School = require('../Schema/SchoolSchema');
const AttendanceSchema = require('../Schema/AttendanceSchema')
const MealSchema = require('../Schema/MealSchema');
const Resource = require('../../../APP/DOCTRACK-APP/backend/Schema/Resource');
const ResourceSchema = require('../Schema/ResourceSchema');

exports.signupschool = (req , res)=>{

    console.log("sign is running ")
    
    const {schoolname , disecode , address, city, state,  pincode, Principalname, Principalaadhar, Principalpancard,startclass, endclass, schoolemail, schoolpassword} = req.body;
    
    const school = new School({schoolname , disecode , address, city, state,  pincode, Principalname, Principalaadhar, Principalpancard,startclass, endclass, schoolemail, schoolpassword});

    school.save((err , data)=>{
        if(err)
        {
            return res.status(400).json({messege : `${err}`});
        }
        else
        {
            return res.status(200).json({data});
        }
    })

}

exports.loginschool = (req, res) => {
    
    // console.log("log is running =",req.body)

    School.findOne({disecode : req.body.disecode}).exec().then(async (user)=>{

        if(user)
        {
            // console.log(user)
            
            if(user.schoolpassword == req.body.schoolpassword)
            {
                const data = await user.generateTokenforschool();
                // console.log(data.token)
                // return res.status(200).json({messege : "SUCCESS", detail : data});
                return res.status(200).cookie('token' , data.token,{
                    sameSite : 'strict',
                    path : '/',
                    httpOnly : true,
                    expires: new Date(Date.now() + 3600000) 
                }).json({messege : "SUCCESS", detail : user});
            }
            else
            {
                res.status(400).json({Error : "some error found"})
            }
                
                
        }
        else
        {
            return res.status(400).json({messege : "Please provide a valid email-id or password"})
        }
        

    }).catch((error)=>{
        res.status(400).json({messege : `${error}`})
    })
};

exports.getschooldetails= async (req,res)=>{
    return res.status(200).json({'user' : true , 'details' : req.rootuser})
}

exports.schoollogout = async (req,res)=>{
    // console.log('logging out',req.cookies.token, req.rootuser.disecode)

    School.findOneAndUpdate({disecode : req.rootuser.disecode} , {
        $pull: {
           tokens: {
            token: req.cookies.token
        }
       }
      }).exec().then((result)=>{
            // console.log('logging out result = ',result)
            return res.status(200).clearCookie("token").json({'user' : "user logout"})
      }).catch((err)=>{
        console.log(err)
      })
}

exports.checkloginforSchool = (req,res)=>{

    res.status(200).json({'user' : true})

}

exports.getAttendanceForSchool = async (req,res)=>{
    const body= req.query;

    // console.log(body)
    try {
        const data= await AttendanceSchema.findOne(body)
        // console.log('attendence',data)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getMealconsumptionForSchool = async (req ,res)=>{

    console.log('getting meal for school')
    try
    {
        const data = await MealSchema.findOne({'disecode' : req.rootuser.disecode})
        // console.log('meal data = ',data)
        res.status(200).json(data)

    }
    catch(error){
        console.log(error)
        res.status(200).json({error , user:'true'})
    }
}

exports.getResourcesForSchool = async (req ,res)=>{

    console.log('getting resource for school')
    try
    {
        const data = await ResourceSchema.findOne({'disecode' : req.rootuser.disecode})
        // console.log('resource data = ',data)
        res.status(200).json(data)

    }
    catch(error){
        console.log(error)
        res.status(200).json({error , user:'true'})
    }
}

