const express = require('express');
const router = express.Router();
const Match = require('../model/match');
const Bigbash = require('../model/bigbash');
const WC23 = require('../model/WC23');
const WC24 = require('../model/WC24');
const SA24 = require('../model/SA24');
const ENGvPAK24 = require('../model/ENGvPAK24');
const WIvSA24 = require('../model/WIvSA24');
const LPL24 = require('../model/LPL24')





router.get('/:uniqueId', async (req, res) => {
    try {
      const uniqueId = req.params
      console.log(uniqueId)

       // Define an array of collections to search
       const collections = [Match, Bigbash, WC23, SA24, ENGvPAK24, WIvSA24, WC24,LPL24]; // Assuming Match and Bigbash are Mongoose models

       let match = null;
       
       // Loop through each model and try to find the document
       for (let i = 0; i < collections.length; i++) {
           const Model = collections[i]; // Get the Mongoose model from the array
           console.log(Model);
           
           try {
               match = await Model.findOne(uniqueId); // Find the document using the model directly
               
               if (match) {
                   break; // Exit loop if a match is found
               }
           } catch (err) {
               console.error(err); // Log any errors
           }
       }
      // const match = await Match.findOne(uniqueId)
      
      if (match) {
        res.json(match);
      } else {
        res.json({ message: 'No match found.' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  module.exports = router;