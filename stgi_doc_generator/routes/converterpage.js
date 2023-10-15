const express = require('express') ; 
const router = express() ; 

const convertercontroller= require('../controllers/converter_controller')
const passport = require('passport') ; 

router.get('/' ,convertercontroller.loadpage ) ; 

module.exports = router ; 