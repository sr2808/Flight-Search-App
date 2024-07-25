const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', async (req, res) => {
  const {
    origin,
    destination,
    partnerPrograms,
    stops,
    departureTimeFrom,
    departureTimeTo,
    isOldData,
    limit,
    offset,
    cabinSelection,
    date
  } = req.body;
  

  try {
    const response = await axios.post(process.env.API_URL, {
      origin,
      destination,
      partnerPrograms,
      stops,
      departureTimeFrom,
      departureTimeTo,
      isOldData,
      limit,
      offset,
      cabinSelection,
      date
    }, {
      headers: {
        'accept': 'application/json, text/plain, */*',
        'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
