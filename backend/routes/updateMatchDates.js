const express = require('express');
const router = express.Router();
const Match = require('../model/match');
const moment = require('moment-timezone');


router.get('/', async (req, res) => {
  try {
    
    const cursor = await Match.updateMany( {},
      [
        {
          $set: {
            matchDate: {
              $dateFromParts: {
                year: { $year: "$matchDate" },
                month: { $month: "$matchDate" },
                day: { $dayOfMonth: "$matchDate" },
                hour: 18,
                minute: 30,
                second: { $second: "$matchDate" },
                millisecond: { $millisecond: "$matchDate" }
              }
            }
          }
        }
      ]);

    // await cursor.forEach(async doc => {
      
      console.log("working....")
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;