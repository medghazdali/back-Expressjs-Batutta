// routes/cityRoutes.js

const express = require('express');
const router = express.Router();
const { insertCityData } = require('../controllers/cityController');

/**
 * @swagger
 * /api/cities:
 *   post:
 *     tags:
 *       - Cities
 *     summary: Insert a ChatGPT-generated city travel plan
 *     description: Saves the city data into the DB
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cityName:
 *                 type: string
 *                 example: "Marrakech"
 *               country:
 *                 type: string
 *                 example: "Morocco"
 *               bestTimeToVisit:
 *                 type: object
 *                 properties:
 *                   recommendedMonths:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["March", "April"]
 *                   averageTemperature:
 *                     type: object
 *                     properties:
 *                       low:
 *                         type: number
 *                         example: 15
 *                       high:
 *                         type: number
 *                         example: 25
 *                   crowdLevel:
 *                     type: string
 *                     example: "Moderate"
 *               dailyItinerary:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     dayNumber:
 *                       type: number
 *                       example: 1
 *                     title:
 *                       type: string
 *                       example: "Arrival and Medina Exploration"
 *                     activities:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           timeOfDay:
 *                             type: string
 *                             example: "morning"
 *                           activity:
 *                             type: string
 *                             example: "Arrive and check into riad"
 *               accommodations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Riad Kniza"
 *                     type:
 *                       type: string
 *                       example: "Riad"
 *                     priceCategory:
 *                       type: string
 *                       example: "Mid-range"
 *                     location:
 *                       type: string
 *                       example: "Medina"
 *                     website:
 *                       type: string
 *                       example: "https://example.com/riadkniza"
 *               budgetBreakdown:
 *                 type: object
 *                 properties:
 *                   accommodation:
 *                     type: number
 *                     example: 1000
 *                   meals:
 *                     type: number
 *                     example: 500
 *                   activities:
 *                     type: number
 *                     example: 400
 *                   transportation:
 *                     type: number
 *                     example: 200
 *                   totalEstimatedCost:
 *                     type: number
 *                     example: 2100
 *               safety:
 *                 type: object
 *                 properties:
 *                   overallRating:
 *                     type: number
 *                     example: 4
 *                   commonRisks:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["Pickpocketing", "Taxi scams"]
 *                   recommendedPrecautions:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["Keep valuables secure", "Use official taxis"]
 *                   emergencyContacts:
 *                     type: object
 *                     properties:
 *                       police:
 *                         type: string
 *                         example: "190"
 *                       ambulance:
 *                         type: string
 *                         example: "150"
 *                       touristHotline:
 *                         type: string
 *                         example: "1234"
 *     responses:
 *       201:
 *         description: Data inserted successfully
 *       500:
 *         description: Failed to insert data
 */
router.post('/', insertCityData);

module.exports = router;
