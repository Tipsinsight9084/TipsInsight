const express = require('express');
const router = express.Router();
const Match = require('../model/match');

// Get previous matches based on today's date
router.get('/', async (req, res) => {
  try {
    const today = new Date();

//     // Get current date and time
// // const today = new Date();

// // Get current time zone offset in minutes
// const offsetMinutes = today.getTimezoneOffset();

// // Indian Standard Time (IST) offset is UTC+5:30
// const istOffset = 5 * 60 + 30; // Convert hours to minutes and add 30 minutes

// // Add the offset for IST
// const indianTime = new Date(today.getTime() + (offsetMinutes + istOffset) * 60000);

// console.log("Current Indian Time:", indianTime);

    console.log("today : ", today)
    today.setHours(0, 0, 0, 0);
    console.log("after today: ", today)
    const previousMatches = await Match.find({ matchDate: { $lt: today } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;