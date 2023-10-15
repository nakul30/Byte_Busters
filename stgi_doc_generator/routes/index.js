const express = require('express') ; 
const router = express() ; 
const convertercontroller = require( '../controllers/converter_controller') ; 
const indexcontroller = require('../controllers/index_controller');
const passport = require('passport') ; 
console.log("ROUTER DEPLOYED ") ; 
router.get('/' , indexcontroller.index) ; 
// router.use('/converterpage' , require('./converterpage')) ;

router.use('/users' , require('./users.js'));
console.log("2.1"); 
console.log("chkpoint r1.1");
module.exports = router ; 