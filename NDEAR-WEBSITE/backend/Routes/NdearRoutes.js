const express = require('express');
const { signup, login,getallSchoolForNdear,getAttendanceForNdear,logoutNdear,checkloginforNdear,getMealForNdear,getResourcesForNdear } = require('../RequestFunctions/NdearFunctions');
const {authenticateNdear} = require('../middleware/NdearAuthentication')
const router = express.Router();

router.post('/registeradmin', signup);
router.post('/loginadmin', login);
router.get('/logoutNdear',authenticateNdear,logoutNdear)
router.get('/getAttendanceForNdear/:id',authenticateNdear,getAttendanceForNdear)
router.get('/getMealForNdear/:id',authenticateNdear,getMealForNdear)
router.get('/getResourcesForNdear/:id',authenticateNdear,getResourcesForNdear)
router.get('/getallschools',authenticateNdear,getallSchoolForNdear)
router.get('/checkloginforNdear', authenticateNdear,checkloginforNdear)

module.exports = router;