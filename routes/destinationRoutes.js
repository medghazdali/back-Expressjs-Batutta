// routes/destinationRoutes.js
const express = require('express');
const router = express.Router();
const { addDestination,getTopDestination } = require('../controllers/destinationController');

/**
 * @swagger
 * /api/destinations:
 *   post:
 *     tags: [Destinations]
 *     summary: Insert a new Destination
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - country
 *               - image
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Marrakech"
 *               country:
 *                 type: string
 *                 example: "Morocco"
 *               image:
 *                 type: string
 *                 example: "https://example.com/marrakech.jpg"
 *               rank:
 *                 type: number
 *                 example: 2
 *     responses:
 *       201:
 *         description: Destination added successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post('/', addDestination);

/**
 * @swagger
 * /api/destinations/top6:
 *   get:
 *     tags: [Destinations]
 *     summary: Get the Top 6 Destinations
 *     description: Retrieve the top 6 destinations sorted by highest rank
 *     responses:
 *       200:
 *         description: Successfully retrieved top 6 destinations
 *       500:
 *         description: Server error
 */
router.get('/top6', getTopDestination);

module.exports = router;
