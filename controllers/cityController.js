// controllers/cityController.js
const City = require('../models/cityModel');

/**
 * Insert ChatGPT-generated data into the City collection
 */
exports.insertCityData = async (req, res) => {
  try {
    // The JSON from ChatGPT is expected in req.body
    const cityData = req.body;

    // Create a new City document with the received data
    const newCity = await City.create(cityData);

    return res.status(201).json({
      message: 'Data inserted successfully',
      data: newCity
    });
  } catch (error) {
    console.error('Insert Error:', error);
    return res.status(500).json({
      message: 'Failed to insert data',
      error: error.message
    });
  }
};
