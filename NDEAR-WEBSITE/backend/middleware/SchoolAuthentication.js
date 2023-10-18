const jwt = require('jsonwebtoken')
const School = require('../Schema/SchoolSchema')

exports.authenticateSchool = async (req, res, next)=> {
    // console.log(req.body)
    // console.log(req.cookies.token, "req.cookies.token")

    if(req.cookies.token == null)
    {
        res.status(200).json({"user" : false})
    }
    else
    {
        try
        {
            var verified = jwt.verify(req.cookies.token , process.env.SECRET_TOKEN)
            // console.log('authentication working', verified)
        }
        catch(err)
        {
            console.log(err)
            res.status(200).json({"user" : false})
            return;
        }
        if(verified)
        {

            const rootuser = await School.findOne({_id : verified._id , tokens : { $elemMatch : {token : req.cookies.token} }})
            // console.log("rootuser of school= ",rootuser)
            if(!rootuser)
            {
                res.status(200).json({"user" : false})
            }
            else
            {
                req.rootuser = rootuser;
                console.log('School got authenticated')
                next();
            }
        }
        else
        {
            res.status(200).json({"user" : false})   
        }
    

    }

   
}
