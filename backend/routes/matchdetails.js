const express = require('express');
const router = express.Router();
const Match = require('../model/match');
const Bigbash = require('../model/bigbash');



router.get('/:uniqueId', async (req, res) => {
    try {
      const uniqueId = req.params
      console.log(uniqueId)

       // Define an array of collections to search
       const collections = [Match, Bigbash]; // Assuming Match and Bigbash are Mongoose models

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