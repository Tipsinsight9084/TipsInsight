const express = require('express');
const router = express.Router();
const IPL24 = require('../model/match');
const Bigbash23 = require('../model/bigbash');
const WC23 = require('../model/WC23');
const SA24 = require('../model/SA24');
const ENGvPAK24 = require('../model/ENGvPAK24');
const WIvSA24 = require('../model/WIvSA24');
const WC24 = require('../model/WC24');
const LPL24 = require('../model/LPL24');
const TH24 = require('../model/TH24')
const TNPL24 = require('../model/TNPL24');

const moment = require('moment-timezone');

// Get previous matches based on today's date
router.get('/', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');



    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await IPL24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/IPL24', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');
// //     // Get current date and time
// const newtoday = new Date();

// const today = new Date();

// // Adjust the time to Indian Standard Time (IST)

// today.setHours(today.getHours() + 5); // Add 5 hours
// today.setMinutes(today.getMinutes() + 30); // Add 30 minutes

// today.setUTCHours(today.getUTCHours() + 5); // Add 5 hours
// today.setUTCMinutes(today.getUTCMinutes() + 30); // Add 30 minutes



// console.log("Current Indian Time:", newtoday);


    console.log("1st IPL today : ", today.format());
    console.log("2nd IPL today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await IPL24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/Bigbash23', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');
// //     // Get current date and time
// const newtoday = new Date();

// const today = new Date();

// // Adjust the time to Indian Standard Time (IST)

// today.setHours(today.getHours() + 5); // Add 5 hours
// today.setMinutes(today.getMinutes() + 30); // Add 30 minutes

// today.setUTCHours(today.getUTCHours() + 5); // Add 5 hours
// today.setUTCMinutes(today.getUTCMinutes() + 30); // Add 30 minutes



// console.log("Current Indian Time:", newtoday);


    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await Bigbash23.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/WC23', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');
// //     // Get current date and time
// const newtoday = new Date();

// const today = new Date();

// // Adjust the time to Indian Standard Time (IST)

// today.setHours(today.getHours() + 5); // Add 5 hours
// today.setMinutes(today.getMinutes() + 30); // Add 30 minutes

// today.setUTCHours(today.getUTCHours() + 5); // Add 5 hours
// today.setUTCMinutes(today.getUTCMinutes() + 30); // Add 30 minutes



// console.log("Current Indian Time:", newtoday);


    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await WC23.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/SA24', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');

    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await SA24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/LPL24', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');

    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await LPL24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/ENGvPAK24', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');
// //     // Get current date and time
// const newtoday = new Date();

// const today = new Date();

// // Adjust the time to Indian Standard Time (IST)

// today.setHours(today.getHours() + 5); // Add 5 hours
// today.setMinutes(today.getMinutes() + 30); // Add 30 minutes

// today.setUTCHours(today.getUTCHours() + 5); // Add 5 hours
// today.setUTCMinutes(today.getUTCMinutes() + 30); // Add 30 minutes



// console.log("Current Indian Time:", newtoday);


    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await ENGvPAK24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/WIvSA24', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');
// //     // Get current date and time
// const newtoday = new Date();

// const today = new Date();

// // Adjust the time to Indian Standard Time (IST)

// today.setHours(today.getHours() + 5); // Add 5 hours
// today.setMinutes(today.getMinutes() + 30); // Add 30 minutes

// today.setUTCHours(today.getUTCHours() + 5); // Add 5 hours
// today.setUTCMinutes(today.getUTCMinutes() + 30); // Add 30 minutes



// console.log("Current Indian Time:", newtoday);


    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await WIvSA24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/WC24', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');



    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await WC24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/TNPL24', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');



    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await TNPL24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/TH24', async (req, res) => {
  try {
    // const today = new Date();
    // const today = "May, 10, 2023, 24:00";

    const today = moment().tz('Asia/Kolkata');



    console.log("1st today : ", today.format());
    console.log("2nd today : ", today)
    // today.setHours(0,0, 0, 0);
    // console.log("after today: ", today)
    const previousMatches = await TH24.find({ matchDate: { $lt: today.format() } }).sort({ matchDate: -1 });
    res.send(previousMatches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;