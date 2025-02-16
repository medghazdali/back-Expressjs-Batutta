// controllers/planController.js

const Plan = require('../models/planModel');

exports.placeOrder = async (req, res) => {
  try {
    const {
      userId,
      destination,
      startDate,
      endDate,
      numberOfAdults,
      numberOfChildren,
      numberOfInfants,
      tripTypes,
      activities,
      preferredClimate,
      overallBudget,
      accommodationType,
      transportation
    } = req.body;

    // In a real app with auth, you'd extract userId from the JWT token (decoded) 
    // instead of trusting it directly in the request body.

    const newPlan = new Plan({
      user: userId,
      destination,
      startDate,
      endDate,
      numberOfAdults,
      numberOfChildren,
      numberOfInfants,
      tripTypes,
      activities,
      preferredClimate,
      overallBudget,
      accommodationType,
      transportation
    });

    await newPlan.save();

    return res.status(201).json({
      message: 'Plan created successfully',
      plan: newPlan
    });
  } catch (error) {
    console.error('PlaceOrder Error:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
};
