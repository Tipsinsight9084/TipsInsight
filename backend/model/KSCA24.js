const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  team1: {
    type: String,
    required: true
  },
  team2: {
    type: String,
    required: true
  },
  matchDate: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  tossWinner: {
    type: String,
    default: null
  },
  tossDate: {
    type: Date,
    default: null
  },
  tossTime: {
    type: String,
    default: null
  },
  matchWinner: {
    type: String,
    default: null
  },
  matchwinnerDate: {
    type: Date,
    default: null
  },
  matchwinnerTime: {
    type: String,
    default: null
  },
  uniqueId: {
    type: String,
    unique: true,
    required: true
  }, 
  team1Run: {
    type: Number,
    default: null
  },
  team1Wicket: {
    type: Number,
    default: null
  },
  team1Over: {
    type: String,
    default: null
  },
  team2Run: {
    type: Number,
    default: null
  },
  team2Wicket: {
    type: Number,
    default: null
  },
  team2Over: {
    type: String,
    default: null
  },
  actualmatchWinner: {
    type: String,
    default: null
  },
  actualtossWinner: {
    type: String,
    default: null
  },
  highlight: {
    type: String,
    default: null
  },
  series: {
    type: String,
    default: null
  },
  year: {
    type: String,
    default: null
  }
}, {collection: 'KSCA24'});


const KSCA24 = mongoose.model('KSCA24', matchSchema);

module.exports = KSCA24;
