/**
 * tripSchema.js
 *
 * This file defines a Trip schema for a travel planning application using Mongoose.
 * Each sub-schema is structured to avoid large text blocks, providing clear, typed data fields.
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * SAFETY SCHEMA
 * - Stores structured details about safety and emergency contacts for the destination.
 */
const SafetySchema = new Schema({
  overallRating: { 
    type: Number,  
    default: 3     // A numeric field (1–5 scale) indicating general safety level. Default is 3 (neutral).
  },
  commonRisks: [
    { type: String } // An array of strings describing common hazards (e.g., "Pickpocketing", "Taxi scams").
  ],
  recommendedPrecautions: [
    { type: String } // An array of strings listing precautions (e.g., "Keep valuables secure", "Use licensed taxis").
  ],
  emergencyContacts: {
    police:         { type: String }, // Police hotline number, e.g., "190".
    ambulance:      { type: String }, // Ambulance hotline number, e.g., "150".
    touristHotline: { type: String }  // General tourist hotline or info number, e.g., "1234".
  }
}, { _id: false }); // _id: false means this sub-document won't have its own _id field in MongoDB.


/**
 * BEST TIME SCHEMA
 * - Specifies recommended months, typical temperatures, and crowd levels for the destination.
 */
const BestTimeSchema = new Schema({
  recommendedMonths: [
    { type: String } // List of months considered ideal for visiting (e.g., ["March", "April"]).
  ],
  averageTemperature: {
    low:  { type: Number }, // Example: 15°C (morning or low-end temperature).
    high: { type: Number }  // Example: 25°C (afternoon or high-end temperature).
  },
  crowdLevel: { 
    type: String // e.g., "High", "Moderate", or "Low" to indicate how busy the destination gets.
  }
}, { _id: false });


/**
 * ACTIVITY SCHEMA
 * - Each item represents a single activity or event during a part of the day.
 */
const ActivitySchema = new Schema({
  timeOfDay: { 
    type: String // e.g., "morning", "afternoon", "evening".
  },
  activity:  { 
    type: String // Brief description of the activity (e.g., "Visit local market").
  }
}, { _id: false });


/**
 * DAY ITINERARY SCHEMA
 * - Represents a single day in the trip's itinerary, with a title and an array of Activity items.
 */
const DayItinerarySchema = new Schema({
  dayNumber: { 
    type: Number // Numerical order of the day, e.g., 1, 2, 3...
  },
  title: { 
    type: String // Short label for the day (e.g., "Arrival and Medina Exploration").
  },
  activities: [ActivitySchema] // Array of activities (morning, afternoon, evening, etc.).
}, { _id: false });


/**
 * ACCOMMODATION SCHEMA
 * - Stores information about recommended lodgings such as riads, hotels, etc.
 */
const AccommodationSchema = new Schema({
  name:          { type: String }, // Accommodation name (e.g., "Riad Kniza").
  type:          { type: String }, // e.g., "Riad", "Hotel", "Hostel".
  priceCategory: { type: String }, // e.g., "Budget", "Mid-range", or "Luxury".
  location:      { type: String }, // Neighborhood or district name (e.g., "Medina").
  website:       { type: String }  // URL for the accommodation's website (if available).
}, { _id: false });


/**
 * BUDGET SCHEMA
 * - Breaks down estimated costs for different trip components and totals them.
 */
const BudgetSchema = new Schema({
  accommodation:      { type: Number }, // Estimated spending on accommodation, e.g., 1050 (USD).
  meals:              { type: Number }, // Estimated cost for meals, e.g., 700 (USD).
  activities:         { type: Number }, // Estimated cost for excursions, museum fees, etc.
  transportation:     { type: Number }, // Estimated local transport cost, e.g., 200 (USD).
  totalEstimatedCost: { type: Number }  // Sum of all costs, e.g., 3650 (USD).
}, { _id: false });


/**
 * RECOMMENDATIONS SCHEMA
 * - Stores personalized suggestions for dining, shopping, and local customs.
 */
const RecommendationsSchema = new Schema({
  vegetarianDining: [
    { type: String } // Array of recommended vegetarian-friendly restaurants (e.g., "Nomad").
  ],
  shoppingTips:      { type: String }, // Short text on best shopping areas or strategies (e.g., "Fixed-price shops").
  culturalEtiquette: { type: String }  // Tips for respectful behavior, e.g., "Dress modestly in religious sites."
}, { _id: false });


/**
 * TRIP SCHEMA
 * - The main schema combining all sub-schemas to represent a single trip or travel plan.
 */
const TripSchema = new Schema({
  title: {
    type: String, 
    required: true // e.g., "Trip Overview: Marrakech, Morocco".
  },
  destinationCity: {
    type: String,
    required: true  // e.g., "Marrakech".
  },
  destinationCountry: {
    type: String,
    required: true  // e.g., "Morocco".
  },
  startDate: {
    type: Date,
    required: true // e.g., 2025-03-15.
  },
  endDate: {
    type: Date,
    required: true // e.g., 2025-03-22.
  },
  numberOfTravelers: {
    type: Number,
    default: 1 // Default to 1 if unspecified.
  },
  tripType: {
    type: String,
    default: "Leisure" // Could be "Cultural", "Adventure", "Business", etc.
  },
  activitiesOfInterest: [
    { type: String } // e.g., ["Shopping", "Cultural Sites", "Desert Adventure"].
  ],
  budgetLevel: {
    type: String,
    default: "Mid-range" // e.g., "Budget", "Mid-range", "Luxury".
  },
  accommodationType: {
    type: String,
    default: "Riad" // e.g., "Hotel", "Riad", "Hostel".
  },
  specialConsiderations: [
    { type: String } // e.g., ["Vegetarian Diet", "Wheelchair Access"], etc.
  ],

  // Sub-schemas:
  bestTimeToVisit:     BestTimeSchema,               // Detailed info on recommended months, weather, crowd levels
  dailyItinerary:      [DayItinerarySchema],         // Array of days, each with a schedule of activities
  accommodations:      [AccommodationSchema],        // Recommended lodging options
  budgetBreakdown:     BudgetSchema,                 // Estimated costs for different categories
  personalizedRecommendations: RecommendationsSchema, // Dining tips, cultural etiquette, etc.
  safety:              SafetySchema                  // Safety rating, risks, precautions, and emergency contacts

}, { timestamps: true }); // Automatically adds "createdAt" and "updatedAt" fields.

module.exports = mongoose.model('Trip', TripSchema);
