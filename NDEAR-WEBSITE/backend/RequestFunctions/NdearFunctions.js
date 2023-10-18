const Admin = require('../Schema/NdearSchema');
const School= require('../Schema/SchoolSchema')
const AttendanceSchema = require('../Schema/AttendanceSchema');
const MealSchema = require('../Schema/MealSchema')
const ResourceSchema = require('../Schema/ResourceSchema')
var jwt = require('jsonwebtoken')


exports.signup = async (req , res)=>{

    // console.log("sign is running =",req.body)
    const {adminid, adminpassword} = req.body;

    let admin = new Admin({adminid , adminpassword});
    // console.log('admin = ',admin)

    const data = await admin.generateToken();
    console.log(data)

    
    if(!data.data)
    {
        return res.status(400).json({messege : 'not working'});
    }
    else
    {
        return res.status(200).json({'data' : data.data});
    }

}

exports.login = (req, res) => {
    // console.log('login', req.body)
    Admin.findOne({adminid : req.body.adminid}).exec().then(async (user)=>{

        if(user)
        {
            // console.log(user)
            if(user.adminpassword == req.body.adminpassword)
            { 

                const data = await user.generateToken(); 
                // console.log('data in login = ',data)
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

exports.logoutNdear  = async (req , res)=>{

    // console.log('logging out',req.cookies.token, req.rootuser.adminid)

    Admin.findOneAndUpdate({adminid : req.rootuser.adminid} , {
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

exports.getallSchoolForNdear=async (req,res)=>{
    // console.log('Working')
    const data = await School.find();
    res.status(200).json({data , 'user': true, 'ndearadmin' : req.rootuser});
}

exports.getAttendanceForNdear=async (req,res)=>{
    const body= req.query;

    console.log(body, req.params.id)
    try {
        const data= await AttendanceSchema.findOne({...body , disecode : req.params.id})
        // console.log('tobereturned',data)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getMealForNdear=async (req,res)=>{

    console.log('getting meal for ndear', req.params.id)
    try {
        const data= await MealSchema.findOne({disecode : req.params.id})
        // console.log('tobereturned',data)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.getResourcesForNdear=async (req,res)=>{

    console.log('getting resource for ndear', req.params.id)
    try {
        const data= await ResourceSchema.findOne({disecode : req.params.id})
        // console.log('tobereturned',data)
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({error})
    }
}

exports.checkloginforNdear = (req,res)=>{

    res.status(200).json({'user' : true})

}