const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/uploadPdf', upload.single('pdfFile'), (req, res) => {
  // Handle file upload logic here
  // Save the file to the database or perform necessary operations

  res.status(200).send('PDF Uploaded!');
});

module.exports = router;
