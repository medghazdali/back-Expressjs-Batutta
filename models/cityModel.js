// models/cityModel.js
const mongoose = require('mongoose');

const citySchema = new mongoose.Schema(
  {
    cityName: String,
    country: String,
    bestTimeToVisit: {
      recommendedMonths: [String],
      averageTemperature: {
        low: Number,
        high: Number
      },
      crowdLevel: String
    },
    dailyItinerary: [
      {
        dayNumber: Number,
        title: String,
        activities: [
          {
            timeOfDay: String,
            activity: String
          }
        ]
      }
    ],
    accommodations: [
      {
        name: String,
        type: String,
        priceCategory: String,
        location: String,
        website: String
      }
    ],
    budgetBreakdown: {
      accommodation: Number,
      meals: Number,
      activities: Number,
      transportation: Number,
      totalEstimatedCost: Number
    },
    safety: {
      overallRating: Number,
      commonRisks: [String],
      recommendedPrecautions: [String],
      emergencyContacts: {
        police: String,
        ambulance: String,
        touristHotline: String
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('City', citySchema);
