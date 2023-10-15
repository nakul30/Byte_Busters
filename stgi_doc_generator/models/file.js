const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const DOC_PATH = path.join('/uploads/documents');

const docschema = new mongoose.Schema({
    dname: {
        type: String,
        required: true
    },
    dpdf: {
        type: String, // This will store the path to the PDF file
    },
    puser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

let storageForPDF = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', DOC_PATH));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filename = 'pdf-' + uniqueSuffix + path.extname(file.originalname); // Keep the original extension
        cb(null, filename);
    }
});

docschema.statics.uploadedPpdf = multer({ storage: storageForPDF }).single('ppdf');
docschema.statics.docPath = DOC_PATH;

const Document = mongoose.model('Product', docschema);
module.exports = Document;
