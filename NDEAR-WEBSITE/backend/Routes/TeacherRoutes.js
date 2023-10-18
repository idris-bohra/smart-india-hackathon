const express = require('express');
const router = express.Router();
const {authenticateNdear} = require('../middleware/NdearAuthentication')
const {authenticateSchool} = require('../middleware/SchoolAuthentication')
const { signupforteachers,registeredTeachersforNdear,registeredTeachersforschool } = require('../RequestFunctions/TeachersFunction');


router.post('/registerteacher',authenticateSchool, signupforteachers);
router.get('/registeredTeachersforNdear/:id', authenticateNdear,registeredTeachersforNdear);
router.get('/registeredTeachersforschool',authenticateSchool, registeredTeachersforschool);



module.exports = router;