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

module.exports.convertfile = function (req, res) {
    // if (req.file) {
    //     const uploadedFile = req.file;
    //     const filePath = uploadedFile.path; // File path on the server
    //     console.log('File uploaded:', filePath);
    // } else {
    //     console.log('No file uploaded');
    // }

    // if (req.body && req.body.dname) {
    //     const dname = req.body.dname;
    //     console.log('dname:', dname);
    // } else {
    //     console.log('No dname input received');
    // }
    console.log(req.body);
    // console.log(req.body.dname);
    return res.render('user_profile', {
        title: "Covert It"
    });

};
