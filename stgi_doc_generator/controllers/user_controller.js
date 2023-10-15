const User = require('../models/user');

module.exports.signup = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render("user_signup", {
        title: "SIGNUP",
    })
}
module.exports.create = async function (req, res) {
    try {
        if (req.body.password !== req.body.confirm_password) {
            return res.redirect('back');
        }
        const existingUser = await User.findOne({ email: req.body.email });

        if (!existingUser) {

            User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                contact: req.body.contact,
                address: req.body.address
            })
            // console.log(req.body.name) ; 
            return res.redirect('/users/signin');
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.log("Error:", err);
        return res.redirect('/');
    }
};
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
    if (req.isAuthenticated()) {
        console.log("hello") ;
        return res.redirect('/');
    }
    console.log("hello.0") ;
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