const User = require('../models/user');
const Document = require('../models/hfile');
const mammoth = require("mammoth");
// const { spawn } = require('child_process');
const { spawn } = require('child_process');
const fs = require('fs');
const temp = require('temp');
// const User = require('path-to-user-model'); // Replace with the actual path to your User model
const pandocPath = ' C:\Users\nakul\AppData\Roaming\pandoc'; // Replace with the actual path
// const pandoc = spawn(pandocPath, [tempHtmlPath, '-o', wordFilename]);


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
// const { spawn } = require('child_process');

module.exports.convertfile = function (req, res) {
    if (req.file) {
        const uploadedFile = req.file;
        // const uploadedFile = req.file;
        const fileBuffer = uploadedFile.buffer.toString('utf-8'); // Convert to UTF-8

        // const fileBuffer = uploadedFile.buffer;
        const wordFilename = `converted_${Date.now()}.docx`;

        const pandoc = spawn('pandoc', [
            // '--input-encoding=utf-8', 
            '--from=html',
            '--to=docx',
            '-o', wordFilename,
        ]);

        pandoc.stdin.write(fileBuffer);
        pandoc.stdin.end();

        pandoc.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        pandoc.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        pandoc.on('close', (code) => {
            if (code === 0) {
                res.setHeader('Content-Disposition', `attachment; filename="${wordFilename}"`);
                res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
                res.sendFile(wordFilename);
                console.log("CONERSION MADE")
                
            } else {
                console.error('Error converting HTML to Word');
                res.status(500).send('Error converting HTML to Word');
            }
        }); 
    } else {
        console.log('No file uploaded');
        res.status(400).send('No file uploaded');
    }
};
