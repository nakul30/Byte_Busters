const User = require('../models/user');
const Document = require('../models/hfile');
// const User = require('path-to-user-model'); // Replace with the actual path to your User model

module.exports.loadpage = function (req, res) {
    User.findById(req.user.id)
        .populate({ path: 'products' })
        .exec()
        .then((user) => {
            res.render('converterpage', {
                title: "Converter",
                all_users: user
            });
        })
        .catch((err) => {
            console.log("ERROR: ", err);
            // Handle the error or render an error page
        });
};
 