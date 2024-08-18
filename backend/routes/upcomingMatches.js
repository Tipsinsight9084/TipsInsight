const express = require('express');
const router = express.Router();
const Match = require('../model/match');
const WC24 = require('../model/WC24');
const moment = require('moment-timezone');
const LPL24 = require('../model/LPL24');
const TNPL24 = require('../model/TNPL24')
const TH24 = require('../model/TH24')
const KSCA24 = require('../model/KSCA24')

router.get('/', async (req, res) => {
  try {
      const today = moment().tz('Asia/Kolkata');
      // const today = new Date();
      console.log(today)
      // today.setHours(0, 0, 0, 0);
      console.log(today)
      const upcomingMatches = await Match.find({ matchDate: { $gte: today.format() } }).sort({ matchDate: 1 });
      res.json(upcomingMatches);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

router.get('/WC24', async (req, res) => {
  try {
      const today = moment().tz('Asia/Kolkata');
      // const today = new Date();
      console.log(today)
      // today.setHours(0, 0, 0, 0);
      console.log(today)
      const upcomingMatches = await WC24.find({ matchDate: { $gte: today.format() } }).sort({ matchDate: 1 });
      res.json(upcomingMatches);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get('/LPL24', async (req, res) => {
    try {
        const today = moment().tz('Asia/Kolkata');
        // const today = new Date();
        console.log(today)
        // today.setHours(0, 0, 0, 0);
        console.log(today)
        const upcomingMatches = await LPL24.find({ matchDate: { $gte: today.format() } }).sort({ matchDate: 1 });
        res.json(upcomingMatches);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });


    router.get('/KSCA24', async (req, res) => {
      try {
          const today = moment().tz('Asia/Kolkata');
          // const today = new Date();
          console.log(today)
          // today.setHours(0, 0, 0, 0);
          console.log(today)
          const upcomingMatches = await KSCA24.find({ matchDate: { $gte: today.format() } }).sort({ matchDate: 1 });
          res.json(upcomingMatches);
        } catch (err) {
          res.status(500).json({ message: err.message });
        }
      });

      router.get('/TH24', async (req, res) => {
        try {
            const today = moment().tz('Asia/Kolkata');
            // const today = new Date();
            console.log(today)
            // today.setHours(0, 0, 0, 0);
            console.log(today)
            const upcomingMatches = await TH24.find({ matchDate: { $gte: today.format() } }).sort({ matchDate: 1 });
            res.json(upcomingMatches);
          } catch (err) {
            res.status(500).json({ message: err.message });
          }
        });
  

  
  module.exports = router;