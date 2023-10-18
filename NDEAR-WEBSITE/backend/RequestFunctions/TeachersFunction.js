const Teacher = require('../Schema/TeacherSchema');

exports.signupforteachers = (req , res)=>{

    console.log("sign for teachers is running ")
    
    const {schoolid , disecode , forclass, teacherid,schoolname, city,state, teachername,teachermail,section, role, teacherpassword} = req.body;

    if(forclass != undefined)
    {
        console.log('forclass')
        var teacher = new Teacher({schoolid , disecode ,schoolname, city,state, teachername, forclass,section, teacherid, teachermail, role, teacherpassword});

        teacher.save((err , data)=>{
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
    else
    {
        console.log('fornotclass')

        var teacher = new Teacher({schoolid , disecode ,schoolname, city,state,teachername, teacherid, teachermail, role, teacherpassword});

        teacher.save((err , data)=>{
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
}


exports.registeredTeachersforNdear=async (req,res)=>{

    console.log('registered teachers for ndear')
    const data = await Teacher.find({disecode:req.params.id})
    res.status(200).json(data);
}

exports.registeredTeachersforschool = async (req, res)=>{
    console.log('registered teachers for school')
    const disecode= req.rootuser.disecode;
    const data = await Teacher.find({disecode})
    // console.log('teachers datils for school',data)
    res.status(200).json({'details' : data , 'user' : true});
}


