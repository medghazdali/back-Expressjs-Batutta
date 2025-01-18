// routes/planRoutes.js

const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/planController');

/**
 * @swagger
 * /api/placeorder:
 *   post:
 *     tags: [Plan]
 *     summary: Place a new travel plan (order)
 *     description: This endpoint creates a new travel plan for a specific user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - destination
 *               - startDate
 *               - endDate
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The ID of the user placing the order
 *                 example: 64a79d313729af345201f912
 *               destination:
 *                 type: string
 *                 description: Destination for the trip
 *                 example: "Paris, France"
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Start date of the trip
 *                 example: "2025-06-01"
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: End date of the trip
 *                 example: "2025-06-10"
 *               numberOfAdults:
 *                 type: integer
 *                 description: Number of adults traveling
 *                 example: 2
 *               numberOfChildren:
 *                 type: integer
 *                 description: Number of children
 *                 example: 1
 *               numberOfInfants:
 *                 type: integer
 *                 description: Number of infants
 *                 example: 0
 *               tripTypes:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Types of trip desired (relaxation, adventure, etc.)
 *                 example: ["Romantic", "Cultural"]
 *               activities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Activities the user wants
 *                 example: ["Museums", "Food Tours"]
 *               preferredClimate:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Preferred climates (warm, cool, etc.)
 *                 example: ["Mild"]
 *               overallBudget:
 *                 type: string
 *                 description: Overall budget range
 *                 example: "$1,000 to $5,000"
 *               accommodationType:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Types of accommodations (budget, mid-range, etc.)
 *                 example: ["Mid-range"]
 *               transportation:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Transportation preferences
 *                 example: ["Flights", "Public Transport"]
 *     responses:
 *       201:
 *         description: Plan created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Plan created successfully"
 *                 plan:
 *                   type: object
 *                   description: The newly created plan
 *       500:
 *         description: Server error
 */
router.post('/placeorder', placeOrder);

module.exports = router;
