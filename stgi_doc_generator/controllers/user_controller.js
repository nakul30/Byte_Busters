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