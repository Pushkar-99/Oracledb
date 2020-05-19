// const multer = require('multer');
// const express = require('express');
// const app = express();
// const router = express.Router();


// var upload = multer({storage: storage});
// var	

// router.post('/file', upload.single('file'), (req, res) => {
//   try {
//     res.send(req.file);
//   }catch(err) {
//     res.send(400);
//   }
// });


// var storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, './upload');
//      },
//     filename: function (req, file, cb) {
//         cb(null , file.originalname);
//     }
// });


// module.exports = multer;