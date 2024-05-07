const express = require('express');
const router = express.Router();
const Match = require('../model/match');
const moment = require('moment-timezone');


router.get('/', async (req, res) => {
  try {
      const today = moment().tz('Asia/Kolkata');
      // const today = new Date();
      console.log(today)
      today.setHours(0, 0, 0, 0);
      console.log(today)
      const upcomingMatches = await Match.find({ matchDate: { $gte: today } }).sort({ matchDate: 1 });
      res.json(upcomingMatches);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  module.exports = router;