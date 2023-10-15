const User = require('../models/user');
const Document = require('../models/file');
module.exports.loadpage = function (req, res) {
    return res.render('convertpage', {
        title: "Converter",
        // console.log(req.user.name) 
    })
}; 