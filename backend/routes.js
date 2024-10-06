// backend/router.js
const express = require('express');
const router = express.Router();
const HomeController = require('./controllers/HomeController.js');
const TeamCardController = require('./controllers/TeamCardController.js')

// Định nghĩa route để lấy dữ liệu từ HomeController
router.get('/home', HomeController.getHomeData);
router.get('/team', TeamCardController.getTeamData);

module.exports = router;
