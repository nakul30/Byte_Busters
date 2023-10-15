const express = require('express') ; 
const router = express() ; 
router.get('/profile' , passport.checkAuthentication , userscontroller.profile) ;

module.exports = router ; 