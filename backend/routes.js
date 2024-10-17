// backend/router.js
const express = require('express');
const router = express.Router();
const HomeController = require('./controllers/HomeController.js');
const TeamCardController = require('./controllers/TeamCardController.js')
const DriverController = require("./controllers/DriverController.js")
const ScheduleController = require("./controllers/ScheduleController.js")
const StandingController = require("./controllers/StandingController.js")
const InforDriverController = require("./controllers/InforDriverController.js")
const InforTeamController = require("./controllers/InforTeamController.js")
// Định nghĩa route để lấy dữ liệu từ HomeController
router.get('/home', HomeController.getHomeData);
router.get('/team', TeamCardController.getTeamData);
router.get('/drivers', DriverController.getDriverData);
router.get('/schedule', ScheduleController.getSchedule);
router.get('/standings', StandingController.getStandings);
router.get('/driver/:id', InforDriverController.getDriverInfo);
router.get('/teams/:id', InforTeamController.getTeamInfo);

module.exports = router;
