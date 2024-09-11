const express = require('express');
const aboutController = require('../controllers/aboutController');

const router = express.Router();

// Định nghĩa route cho /about và gọi hàm trong controller
router.post('/about', aboutController.processAboutData);

module.exports = router;
