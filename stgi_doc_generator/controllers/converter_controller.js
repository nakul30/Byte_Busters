const User = require('../models/user');
const Document = require('../models/hfile');
const mammoth = require("mammoth");
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

// module.exports.convertfile = function (req, res) {
//     if (req.file) {
//         const uploadedFile = req.file;
//         const fileBuffer = uploadedFile.buffer; 
//         console.log('File received as buffer:');
//     } else {
//         console.log('No file uploaded');
//     }    
//     return res.render('user_profile', {
//         title: "Convert It"
//     });
// };
// const mammoth = require("mammoth");

module.exports.convertfile = function (req, res) {
    if (req.file) {
        const uploadedFile = req.file;
        const fileBuffer = uploadedFile.buffer;

        // Convert the HTML buffer to a Word document
        mammoth.convertToHtml({ buffer: fileBuffer })
            .then(result => {
                const wordDocument = result.value; // The Word document as HTML
                const messages = result.messages;

                
                res.render('user_profile', {
                    title: "Convert It",
                    wordDocument: wordDocument 
                });
            })
            .catch(error => {
                console.error("Error converting HTML to Word:", error);
                res.status(500).send("Error converting HTML to Word");
            });
    } else {
        console.log('No file uploaded');
        res.status(400).send('No file uploaded');
    }
};

