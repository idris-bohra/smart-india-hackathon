const express = require('express');
const {authenticateNdear} = require('../middleware/NdearAuthentication')
const {authenticateSchool} = require('../middleware/SchoolAuthentication')
const { signupschool, loginschool,getschooldetails,schoollogout,checkloginforSchool,getAttendanceForSchool,getMealconsumptionForSchool,getResourcesForSchool } = require('../RequestFunctions/SchoolFunction');
const router = express.Router();

router.post('/registerschool', signupschool);
router.post('/loginschool', loginschool);
router.get('/schoollogout',authenticateSchool, schoollogout);
router.post('/getschooldetails',authenticateSchool, getschooldetails);
router.get('/checkloginforschool',authenticateSchool, checkloginforSchool);
router.get('/getAttendanceForSchool',authenticateSchool, getAttendanceForSchool);
router.get('/getMealconsumptionForSchool',authenticateSchool, getMealconsumptionForSchool);
router.get('/getResourcesForSchool',authenticateSchool, getResourcesForSchool);


module.exports = router;