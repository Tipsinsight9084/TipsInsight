const express = require('express');
const router = express.Router();
// const Match = require('../model/match');
// const WC24 = require('../model/WC24');
const LPL24= require('../model/LPL24')
const moment = require('moment-timezone');
const TNPL24 = require('../model/TNPL24')
const TH24 = require('../model/TH24')
const KSCA24 = require('../model/KSCA24')


router.get('/TH24', async (req, res) => {
  try {
    const today = moment().tz('Asia/Kolkata');
    console.log("next today: ", today.format());
    // const today = new Date();
      // today.setHours(0, 0, 0, 0);
      console.log("why")
      
      // Find the next upcoming match by sorting matches by matchDate in ascending order
      // and limiting the result to 1 match
      const nextMatch = await TH24.findOne({ matchDate: { $gt: today.format() } }).sort({ matchDate: 1 }).limit(1).maxTimeMS(20000);
      
      if (nextMatch) {
        res.json(nextMatch);
      } else {
        res.json({ message: 'No upcoming matches found.' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

    router.get('/KSCA24', async (req, res) => {
      try {
        const today = moment().tz('Asia/Kolkata');
        console.log("next today: ", today.format());
        // const today = new Date();
          // today.setHours(0, 0, 0, 0);
          console.log("why")
          
          // Find the next upcoming match by sorting matches by matchDate in ascending order
          // and limiting the result to 1 match
          const nextMatch = await KSCA24.findOne({ matchDate: { $gt: today.format() } }).sort({ matchDate: 1 }).limit(1).maxTimeMS(20000);
          
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