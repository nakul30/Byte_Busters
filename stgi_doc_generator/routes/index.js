const express = require('express') ; 
const router = express() ; 
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const convertercontroller = require( '../controllers/converter_controller') ; 
const indexcontroller = require('../controllers/index_controller');
const passport = require('passport') ; 
console.log("ROUTER DEPLOYED ") ; 
router.get('/' , indexcontroller.index) ; 
router.get('/convert' , convertercontroller.loadpage);
// router.post('/converthtml',passport.checkAuthentication,upload.single('dpdf') , convertercontroller.convertfile);
router.post('/converthtml', upload.single('dpdf'),passport.checkAuthentication, convertercontroller.convertfile);


router.use('/users' , require('./users.js'));
console.log("chkpoint r1.1");
module.exports = router ;  