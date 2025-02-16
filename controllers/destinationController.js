// controllers/DestinationController.js
const Destination = require('../models/destinationModel');

exports.getTopDestination = async (req, res) => {
    try {
        // Example: "Top" by largest population
        // Sort descending by population and limit to 6
        const destination = await Destination.find().sort({ rank: -1 }).limit(6);

        return res.json({
            message: 'Top 6 destination retrieved successfully',
            data: destination
        });
    } catch (error) {
        console.error('Get Top destination Error:', error);
        return res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

/**
 * Inserts a new Destination into the database
 */
exports.addDestination = async (req, res) => {
    try {
      const { name, country, image, rank } = req.body;
  
      // Check required fields
      if (!name || !country || !image) {
        return res.status(400).json({ message: 'name, country, and image are required.' });
      }
  
      // Create the Destination document
      const newDestination = new Destination({ name, country, image, rank });
      await newDestination.save();
  
      return res.status(201).json({
        message: 'Destination added successfully',
        data: newDestination
      });
    } catch (error) {
      console.error('Add Destination Error:', error);
      return res.status(500).json({
        message: 'Server error',
        error: error.message
      });
    }
  };