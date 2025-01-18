// models/planModel.js

const mongoose = require('mongoose');

const planSchema = new mongoose.Schema(
  {
    // Reference the user who created the plan
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    // Screen 1: Basic Travel Information
    destination: String,
    startDate: Date,
    endDate: Date,
    numberOfAdults: Number,
    numberOfChildren: Number,
    numberOfInfants: Number,

    // Screen 2: Preferences
    tripTypes: [String],        // e.g. ['Relaxation', 'Adventure']
    activities: [String],       // e.g. ['Museums', 'Beaches']
    preferredClimate: [String], // e.g. ['Warm', 'Cool']

    // Screen 3: Budget Details
    overallBudget: String,      // e.g. "$1,000 to $5,000"
    accommodationType: [String],// e.g. ['Budget', 'Mid-range', 'Luxury']
    transportation: [String]    // e.g. ['Flights', 'Car Rental']
  },
  { timestamps: true }
);

module.exports = mongoose.model('Plan', planSchema);
