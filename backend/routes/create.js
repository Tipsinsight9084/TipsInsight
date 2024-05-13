const express = require('express');
const router = express.Router();
const Match = require('../model/match');
const Bigbash = require('../model/bigbash')

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

router.post('/bigbash', async (req, res) => {
  try {
    const { team1, team2, matchDate, time, venue, tossWinner, tossDate, tossTime, matchWinner, matchwinnerDate, matchwinnerTime, uniqueId, team1Run , team1Wicket, team1Over, team2Run , team2Wicket, team2Over, actualmatchWinner, actualtossWinner, highlight} = req.body;

    const newMatch = new Bigbash({
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
    console.log("bigbash",newMatch)
    // const 
    await newMatch.save();

    res.status(201).json({ message: 'Bigbash Match created successfully.' });
  } catch (err) {
    res.status(400).json({ message: err.message + 'error in' });
  }
});

module.exports = router;