const express = require('express');
const router = express.Router();
const Match = require('../model/match');
const Bigbash = require('../model/bigbash')
const WC23 = require('../model/WC23');
const SA24 = require('../model/SA24');
const ENGvPAK24 = require('../model/ENGvPAK24');
const WIvSA24 = require('../model/WIvSA24');

// Create a new match
router.post('/IPL', async (req, res) => {
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, tossDate, tossTime, matchWinner, matchwinnerDate, matchwinnerTime, uniqueId, team1Run , team1Wicket, team1Over, team2Run , team2Wicket, team2Over, actualmatchWinner, actualtossWinner, highlight} = req.body;

    const newMatch = new Match({
      team1,
      team2,
      matchDate,
      time,
      venue,
      tossWinner,
      tossDate,
      tossTime,
      matchWinner,
      matchwinnerDate,
      matchwinnerTime,
      uniqueId,
      team1Run ,
      team1Wicket,
      team1Over, 
      team2Run , 
      team2Wicket, 
      team2Over,
      actualmatchWinner,
      actualtossWinner,
      highlight
    });

    console.log(req.body)
    console.log("QI")
    console.log(newMatch)
    await newMatch.save();

    res.status(201).json({ message: 'Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err.message + 'error in' });
  }
});

router.post('/bigbash23', async (req, res) => {
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, tossDate, tossTime, matchWinner, matchwinnerDate, matchwinnerTime, uniqueId, team1Run , team1Wicket, team1Over, team2Run , team2Wicket, team2Over, actualmatchWinner, actualtossWinner, highlight, series, year} = req.body;

    const newBigbash = new Bigbash({
      team1,
      team2,
      matchDate,
      time,
      venue,
      tossWinner,
      tossDate,
      tossTime,
      matchWinner,
      matchwinnerDate,
      matchwinnerTime,
      uniqueId,
      team1Run ,
      team1Wicket,
      team1Over, 
      team2Run , 
      team2Wicket, 
      team2Over,
      actualmatchWinner,
      actualtossWinner,
      highlight,
      series,
      year,
    });

    console.log(req.body)
    console.log("QI")
    console.log("bigbash",newBigBashMatch)
    // const 
    await newBigBashMatch.save();

    res.status(201).json({ message: 'Bigbash Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err + 'error in' });
  }
});

router.post('/WC23', async (req, res) => {
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, tossDate, tossTime, matchWinner, matchwinnerDate, matchwinnerTime, uniqueId, team1Run , team1Wicket, team1Over, team2Run , team2Wicket, team2Over, actualmatchWinner, actualtossWinner, highlight, series, year} = req.body;

    const newWC23 = new WC23({
      team1,
      team2,
      matchDate,
      time,
      venue,
      tossWinner,
      tossDate,
      tossTime,
      matchWinner,
      matchwinnerDate,
      matchwinnerTime,
      uniqueId,
      team1Run ,
      team1Wicket,
      team1Over, 
      team2Run , 
      team2Wicket, 
      team2Over,
      actualmatchWinner,
      actualtossWinner,
      highlight,
      series,
      year,
    });

    console.log(req.body)
    console.log("QI")
    console.log("bigbash",newWC23)
    // const 
    await newWC23.save();

    res.status(201).json({ message: 'Bigbash Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err + 'error in' });
  }
});

router.post('/WC24', async (req, res) => {
  console.log("workinfg",req.body);
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, tossDate, tossTime, matchWinner, matchwinnerDate, matchwinnerTime, uniqueId, team1Run , team1Wicket, team1Over, team2Run , team2Wicket, team2Over, actualmatchWinner, actualtossWinner, highlight, series, year} = req.body;

    const newWC24 = new WC24({
      team1,
      team2,
      matchDate,
      time,
      venue,
      tossWinner,
      tossDate,
      tossTime,
      matchWinner,
      matchwinnerDate,
      matchwinnerTime,
      uniqueId,
      team1Run ,
      team1Wicket,
      team1Over, 
      team2Run , 
      team2Wicket, 
      team2Over,
      actualmatchWinner,
      actualtossWinner,
      highlight,
      series,
      year,
    });

    console.log(req.body)
    console.log("QI")
    console.log("WC24",newWC24)
    // const 
    await newWC24.save();

    res.status(201).json({ message: 'WC24 Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err + 'error in' });
  }
});

router.post('/SA24', async (req, res) => {
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, tossDate, tossTime, matchWinner, matchwinnerDate, matchwinnerTime, uniqueId, team1Run , team1Wicket, team1Over, team2Run , team2Wicket, team2Over, actualmatchWinner, actualtossWinner, highlight, series, year} = req.body;

    const newSA24 = new SA24({
      team1,
      team2,
      matchDate,
      time,
      venue,
      tossWinner,
      tossDate,
      tossTime,
      matchWinner,
      matchwinnerDate,
      matchwinnerTime,
      uniqueId,
      team1Run ,
      team1Wicket,
      team1Over, 
      team2Run , 
      team2Wicket, 
      team2Over,
      actualmatchWinner,
      actualtossWinner,
      highlight,
      series,
      year,
    });

    console.log(req.body)
    console.log("QI")
    console.log("SA24",newSA24)
    // const 
    await newSA24.save();

    res.status(201).json({ message: 'SA24 Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err + 'error in' });
  }
});

router.post('/ENGvPAK24', async (req, res) => {
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, tossDate, tossTime, matchWinner, matchwinnerDate, matchwinnerTime, uniqueId, team1Run , team1Wicket, team1Over, team2Run , team2Wicket, team2Over, actualmatchWinner, actualtossWinner, highlight, series, year} = req.body;

    const newENGvPAK24 = new ENGvPAK24({
      team1,
      team2,
      matchDate,
      time,
      venue,
      tossWinner,
      tossDate,
      tossTime,
      matchWinner,
      matchwinnerDate,
      matchwinnerTime,
      uniqueId,
      team1Run ,
      team1Wicket,
      team1Over, 
      team2Run , 
      team2Wicket, 
      team2Over,
      actualmatchWinner,
      actualtossWinner,
      highlight,
      series,
      year,
    });

    console.log(req.body)
    console.log("QI")
    console.log("ENGvPAK24",newENGvPAK24)
    // const 
    await newENGvPAK24.save();

    res.status(201).json({ message: 'ENGvPAK24 Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err + 'error in' });
  }
});

router.post('/WIvSA24', async (req, res) => {
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, tossDate, tossTime, matchWinner, matchwinnerDate, matchwinnerTime, uniqueId, team1Run , team1Wicket, team1Over, team2Run , team2Wicket, team2Over, actualmatchWinner, actualtossWinner, highlight, series, year} = req.body;

    const newWIvSA24 = new WIvSA24({
      team1,
      team2,
      matchDate,
      time,
      venue,
      tossWinner,
      tossDate,
      tossTime,
      matchWinner,
      matchwinnerDate,
      matchwinnerTime,
      uniqueId,
      team1Run ,
      team1Wicket,
      team1Over, 
      team2Run , 
      team2Wicket, 
      team2Over,
      actualmatchWinner,
      actualtossWinner,
      highlight,
      series,
      year,
    });

    console.log(req.body)
    console.log("QI")
    console.log("WIvSA24",newWIvSA24)
    // const 
    await newWIvSA24.save();

    res.status(201).json({ message: 'WIvSA24 Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err + 'error in' });
  }
});

module.exports = router;