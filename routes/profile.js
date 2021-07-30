const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/characters/:playerID', async (req, res) => { // 94803824
  try{
    const { playerID } = req.params;
    const response = await fetch(`${process.env.API_URL}/characters/${playerID}`);
    const data = await response.json();
    
    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({ message: 'Profile Not Found' })    
    }

    res.json(data);    

  } catch(err) {
    console.error(err);
    res.status(500).json({message: 'Server Error'})
  }
});

router.get('/alliances/:allianceID', async (req, res) => { // 99000025
  try{
    const { allianceID } = req.params;
    const response = await fetch(`${process.env.API_URL}/alliances/${allianceID}`);
    const data = await response.json();
    res.json(data);    

  } catch(err) {
    console.error(err);
    res.status(500).json({message: 'Server Error'})
  }
});

router.get('/regions/:regionID', async (req, res) => { // 10000001
  try{
    const { regionID } = req.params;
    const response = await fetch(`${process.env.API_URL}/universe/regions/${regionID}`);
    const data = await response.json();
    res.json(data);    

  } catch(err) {
    console.error(err);
    res.status(500).json({message: 'Server Error'})
  }
});

module.exports = router;

