const express = require('express');
const router = express.Router();
const Match = require('../model/match');


router.get('/', async (req, res) => {
    try {
      const today = new Date();
      
      // Find the next upcoming match by sorting matches by matchDate in ascending order
      // and limiting the result to 1 match
      const nextMatch = await Match.findOne({ matchDate: { $gte: today } }).sort({ matchDate: 1 }).limit(1);
      
      if (nextMatch) {
        res.json(nextMatch);
      } else {
        res.json({ message: 'No upcoming matches found.' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;