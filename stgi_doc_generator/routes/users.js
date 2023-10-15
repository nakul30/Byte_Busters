const express = require('express') ; 
const router = express() ; 
const passport = require ('passport') ; 
const userscontroller = require('../controllers/user_controller');
router.get('/signin' , userscontroller.signin) ; 
router.get('/signup' , userscontroller.signup) ; 
// router.get('/profile' , passport.checkAuthentication , userscontroller.profile) ;
// router.post('/create-session', passport.authenticate(
//     'local' , 
//     {failureRedirect : 'signin'} , 
// ) ,userscontroller.createsession) ; 
router.post('/create' , userscontroller.create );
router.get('/create-session' , userscontroller.createsession) ; 

module.exports = router ; 