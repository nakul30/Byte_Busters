const User = require('../models/user');

module.exports.signup = function (req, res) {

    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render("user_signup", {
        title: "SIGNUP",
    })
}
module.exports.profile = function (req, res) {
    //if params had came then it would run else onluy pass local users 
    User.findById(req.params.id)
        .exec()
        .then(user => {
            return res.render('user_profile', {
                title: 'User Profile',
                profilebyparam: user
            });
        })
        .catch(err => {
            console.error(err);
            // Handle the error, such as sending an error response or redirecting to an error page
        });
};
module.exports.signin = function (req, res) {
    // console.log(req.user.name) ;  
    // so that button us no tvisiboe when use signed in 
    if (req.isAuthenticated()) {
        return res.redirect('/users/profile');
    }
    return res.render('user_signin', {
        title: "Sign IN",
        // console.log(req.user.name) 
    })
}; 
module.exports.createsession = function (req, res) {
    return res.render('converterpage',{
        title:"Covert It"
    });
};